const checkList = () => {
    const checkBtn = document.querySelector('.check-btn'),
        popupCheck = document.querySelector('.popup-check');

    checkBtn.addEventListener('click', () => {
        popupCheck.style.display = 'block';
    });

    popupCheck.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popupCheck.style.display = 'none';
            event.preventDefault();
        } else {
            target = target.closest('.popup-dialog');

            if (!target) {
                popupCheck.style.display = 'none';
            };
        };
    });

};

export default checkList;