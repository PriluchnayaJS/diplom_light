const popupConsult = () => {

    const consultBtn = document.querySelector('.consultation-btn'),
        popupConsult = document.querySelector('.popup-consultation');

    consultBtn.addEventListener('click', () => {
        popupConsult.style.display = 'block';

        // При открытии окна переносим текст вопроса из формы в скрытый инпут в окне
        const questionInput = document.querySelector('.director-form input[name="user_quest"]');
        const inputInPopup = popupConsult.querySelector('[name="user_quest"]');
        if (questionInput && inputInPopup) {
            inputInPopup.value = questionInput.value;
        }
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
