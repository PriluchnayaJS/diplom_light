    const calcTabs = () => {
        const calc = document.querySelector('#accordion');

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

        };

        calc.addEventListener('click', toggleBlock);
    };

    export default calcTabs;