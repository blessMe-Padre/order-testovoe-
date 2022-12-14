import formatPrice from '../modules/priceFormatter';

const initCounter = () => {
  const counters = document.querySelectorAll('.counter');
  const productSum = document.querySelector('.product-sum');
  const orderTotal = document.querySelector('.order-total');
  const getTotal = document.querySelector('.get-total');

  if (counters) {
    counters.forEach((counter) => {

      counter.addEventListener('click', (evt) => {
        const target = evt.target; // получаем нажатый counter

        if (target.closest('.counter__btn')) {
          // получает значение input
          let value = parseInt(target.closest('.counter').querySelector('.counter__count').value, 10);

          let discount = target.closest('.counter').querySelector('.counter__discount-before').value;

          let price = target.closest('.counter').querySelector('.counter__before').value;

          if (target.classList.contains('counter__btn--plus')) {
            value++;
          } else {
            --value;
          }
          // disabled на кнопки
          if (value <= 0) {
            value = 0;
            target.closest('.counter').querySelector('.counter__btn--minus').setAttribute('disabled', 'disabled');
          } else {
            target.closest('.counter').querySelector('.counter__btn--minus').removeAttribute('disabled', 'disabled');
          }

          // расчет общей стоимости от количества ед.
          let count = target.closest('.counter').querySelector('.counter__count').value = value;

          target.closest('.counter').querySelector('.counter__after').value = count * price;
          target.closest('.counter').querySelector('.counter__discount-after').value = count * discount;

          // карточка заказа
          let counterDiscount = document.querySelectorAll('.counter__discount-after');
          let sumDiscount = 0;
          counterDiscount.forEach((item) => {
            sumDiscount += +item.value;
          });

          let counterAfter = document.querySelectorAll('.counter__after');
          let sum = 0;
          counterAfter.forEach((item) => {
            sum += +item.value;
          });
          let totalSum = sumDiscount + sum - sum;
          productSum.innerText = formatPrice(totalSum);

          // расчет всей суммы "акции"
          let discountNew = sumDiscount - sum;

          // расчет финальной суммы и добавление value в скрытый инпут
          let finallyPrice = totalSum - discountNew;
          orderTotal.innerText = formatPrice(finallyPrice);
          getTotal.value = finallyPrice;
        }
      });
    });
  }
};

export { initCounter }
