const tabs = () => {
    const tabHeader = document.querySelector('.slideInDown'),
        //tab = tabHeader.querySelectorAll('.panel'),
        panelНeading = tabHeader.querySelectorAll('.panel-heading'),
        tabContent = tabHeader.querySelectorAll('.panel-collapse');
    // console.log(tabHeader);
    // console.log(panelНeading);
    // console.log(tab);
    // console.log(tabContent);

    // tabHeader.addEventListener('click', (e) => {
    //     let target = e.target;
    //     target = target.closest('.panel-heading');
    //     console.log(target);
    // })

    const toggleTabContent = (index) => {
        for (let i = 0; i < tabContent.length; i++) {
            if (index === i) {

                tabContent[i].classList.add('in');
            } else {

                tabContent[i].classList.remove('in');
            };
        };
    };


    tabHeader.addEventListener('click', (event) => {
        let target = event.target;

        target = target.closest('.panel-heading'); //поднимается выше до родителя и ищет элемент
        event.preventDefault();
        if (target) {


            panelНeading.forEach((item, i) => {
                if (item === target) {

                    toggleTabContent(i);
                };
            });

        };

    });

};

export default tabs;