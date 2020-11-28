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

    const name2 = document.querySelector('#name_2');
    //console.log(name2);


    name2.addEventListener('input', () => {

        name2.setAttribute('pattern', '^[А-Яа-яЁё ]+$');
        if (!name2.value) {
            name2.setAttribute('placeholder', 'Ваше имя (RU/space)');
        } else {
            name2.setAttribute('placeholder', 'Ваше имя');
        };
    });

};

export default formsValid;