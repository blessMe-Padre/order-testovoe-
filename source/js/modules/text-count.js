const initTextCount = () => {
    const textarea = document.querySelector('.input-textarea');
    const count = document.querySelector('.input-textarea-span');

    textarea.addEventListener('input', (evt) => {
        const length = evt.target.value.length;
        count.innerText = `${length}`;
    });
};

export { initTextCount }
