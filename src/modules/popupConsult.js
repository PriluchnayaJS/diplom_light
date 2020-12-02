const popupConsult = () => {

    const consultBtn = document.querySelector('.consultation-btn'),
        popupConsult = document.querySelector('.popup-consultation');

    consultBtn.addEventListener('click', () => {
        popupConsult.style.display = 'block';

        // При открытии окна переносим текст вопроса из формы в скрытый инпут в окне
        const calcRes = document.getElementById('calc-result');
        const inputInPopup = popupConsult.querySelector('[name="user_quest"]');
        if (calcRes) {
            inputInPopup.value = JSON.stringify(data);
        };
    });

    popupConsult.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popupConsult.style.display = 'none';
            event.preventDefault();
        } else {
            target = target.closest('.popup-dialog');

            if (!target) {
                popupConsult.style.display = 'none';
            };
        };
    });

};

export default popupConsult;