const toggleMenu = () => {

    const callBtns = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call');

    callBtns.forEach((elem) => {

        elem.addEventListener('click', () => {
            popupCall.style.display = 'block';

            // При открытии окна переносим  объект data в скрытый инпут в окне
            const questionInput = document.querySelector('.director-form input[name="user_quest"]');
            const inputData = popupCall.querySelector('[name="data_form"]');
            if (questionInput && inputInPopup) {
                inputInPopup.value = questionInput.value;
            }


        });
    });

    popupCall.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popupCall.style.display = 'none';
            event.preventDefault();
        } else {
            target = target.closest('.popup-dialog');

            if (!target) {
                popupCall.style.display = 'none';
            };
        };
    });
};

export default toggleMenu;