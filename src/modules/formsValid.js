const formsValid = () => {

    const phones = document.querySelectorAll('.phone-user');
    //console.log(phones);

    phones.forEach((e) => {
        e.addEventListener('input', () => {

            e.setAttribute('pattern', '[+][0-9]{11}');
            if (!e.value) {
                e.setAttribute('placeholder', '+7XXXXXXXXXX');
            } else {
                e.setAttribute('placeholder', '+7(___)___-__-__');
            };
        });

    });

    const names = document.querySelectorAll('.user-name');
    //console.log(names);
    names.forEach((e) => {
        e.addEventListener('input', () => {

            e.setAttribute('pattern', '^[А-Яа-яЁё ]+$');
            if (!e.value) {
                e.setAttribute('placeholder', 'Ваше имя (RU/space)');
            } else {
                e.setAttribute('placeholder', 'Ваше имя');
            };
        });
    });
};

export default formsValid;