const calcTabs = () => {

    const accordion = document.querySelector('#accordion');

    const toggleBlock = (e) => {
        // e.preventDefault();
        const target = e.target;

        if (target.closest('.panel-heading')) {
            const parent = target.closest('.panel-default');
            const child = parent.querySelector('.panel-collapse');
            document.querySelectorAll('.panel-collapse').forEach((item) => {
                if (item === child) {
                    e.preventDefault();
                    child.classList.add('in');
                } else {
                    e.preventDefault();
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
            e.preventDefault();
            child.classList.remove('in');
            e.preventDefault();
            nextBlockChild.classList.add('in');
        };

    };

    accordion.addEventListener('click', toggleBlock);

};

export default calcTabs;