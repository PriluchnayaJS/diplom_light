const calcTabs = () => {

    const accordion = document.querySelector('#accordion');

    const toggleBlock = (e) => {
        e.preventDefault();
        const target = e.target;

        if (target.closest('.panel-heading')) {
            const parent = target.closest('.panel-default');
            const child = parent.querySelector('.panel-collapse');
            document.querySelectorAll('.panel-collapse').forEach((item) => {
                if (item === child) {
                    child.classList.add('in');
                } else {
                    item.classList.remove('in');
                }
            });
        }

        if (target.closest('.construct-btn')) {
            const parent = target.closest('.panel-default');
            const child = parent.querySelector('.panel-collapse');
            const nextBlock = parent.nextSibling.nextSibling;

            if (nextBlock === null) {
                return;
            }
            const nextBlockChild = nextBlock.querySelector('.panel-collapse');
            child.classList.remove('in');
            nextBlockChild.classList.add('in');
        };
        // const chBoxs = document.querySelectorAll('.onoffswitch-checkbox');
        // // console.log(chBoxs);

        // if (chBoxs[0]) {
        //     chBoxs[0].addEventListener('change', chBoxs[0].checked = false);
        // };
    };

    accordion.addEventListener('click', toggleBlock);
};

export default calcTabs;