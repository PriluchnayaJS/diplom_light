const btnMore = () => {

    const addSentenceBtn = document.querySelector('.add-sentence-btn'),
        divCols = document.querySelectorAll('.hidden'),
        divCol = document.querySelector('.visible-sm-block');

    addSentenceBtn.addEventListener('click', () => {

        addSentenceBtn.classList.toggle('hidden');
        divCols.forEach((elem) => {
            elem.classList.toggle('hidden');
        });
        divCol.classList.toggle('visible-sm-block');

    });

    const discountBtns = document.querySelectorAll('.discount-btn'),
        popupDiscount = document.querySelector('.popup-discount');
    //console.log(popupDiscount);

    discountBtns.forEach((elem) => {

        elem.addEventListener('click', () => {
            popupDiscount.style.display = 'block';
        });
    });

    popupDiscount.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popupDiscount.style.display = 'none';
            event.preventDefault();
        } else {
            target = target.closest('.popup-dialog');

            if (!target) {
                popupDiscount.style.display = 'none';
            };
        };
    });

};
export default btnMore;