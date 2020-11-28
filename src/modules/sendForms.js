const sendForms = () => {

    const forms = document.querySelectorAll('div.col-lg-4 > form');

    //console.log(forms);

    forms.forEach((elem) => {
        const errorMessage = 'ошибка',
            loadMessage = 'идет отправка...',
            successMessage = 'отправлено';

        elem.addEventListener('submit', (event) => {
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'font-size: 1.8rem; color: #ffa500;';

            event.preventDefault();

            elem.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            //получение данных с формы в обработчике событий
            const formData = new FormData(elem);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            //передача данных при вызове функции
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    };
                    console.log(response);
                    elem.reset();
                    statusMessage.textContent = successMessage;
                    setTimeout(() => statusMessage.remove(), 3000);
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    setTimeout(() => statusMessage.remove(), 3000);

                    console.error(error);
                });
        });

    });

    //запрос на сервер в отдельной функции postData()
    const postData = (body) => {

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include',
            cache: 'default'

        });

    };



};

export default sendForms;