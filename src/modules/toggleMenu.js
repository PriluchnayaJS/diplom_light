const toggleMenu = () => {

    const callBtns = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call');

    callBtns.forEach((elem) => {

        elem.addEventListener('click', () => {
            popupCall.style.display = 'block';
        });
    });

    popupCall.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popupCall.style.display = 'none';
        } else {
            target = target.closest('.popup-dialog');

            if (!target) {
                popupCall.style.display = 'none';
            };
        };
    });
};

export default toggleMenu;