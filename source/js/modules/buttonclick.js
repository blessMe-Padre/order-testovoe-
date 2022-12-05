const initButtonClick = () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    console.log('клик по кнопке');
  });
}

export { initButtonClick }
