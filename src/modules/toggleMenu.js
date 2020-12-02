import { data } from './calcResult';
const toggleMenu = () => {

    const callBtns = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call');

    callBtns.forEach((elem) => {

        elem.addEventListener('click', () => {
            popupCall.style.display = 'block';

            // При открытии окна переносим  объект data в скрытый инпут в окне
            const calcRes = document.getElementById('calc-result');
            const inputData = popupCall.querySelector('[name="data_form"]');
            // console.log(inputData);
            if (data) {
                inputData.value = JSON.stringify(data);
            };
            calcRes.value = '';

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