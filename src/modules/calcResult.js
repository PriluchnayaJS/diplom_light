const calcResult = () => {
    const data = {
        type: true,
        diam: 0,
        diamCount: 0,
        bottom: false,
    };

    const calc = data => {
        const calcResult = document.getElementById('calc-result');
        const startingPrice = (data.type) ? 10000 : 15000;
        let sum = startingPrice;

        const checkBottom = () => {
            let res;
            if (data.bottom) {
                if (data.type) {
                    res = 1000;
                } else {
                    res = 2000;
                }
            } else {
                res = 0
            }
            return res;
        };

        checkBottom();

        sum = startingPrice + (startingPrice * data.diam) + (startingPrice * data.diamCount) + checkBottom()

        calcResult.value = sum;
    };
    const accordion = document.getElementById('accordion'),
        dnone = document.querySelector('.d-none');
    accordion.addEventListener('change', (e) => {
        const { target } = e;
        if (target.closest('#myonoffswitch')) {
            data.type = target.checked;
            if (target.checked) {
                dnone.style.display = 'none';
            } else {
                dnone.style.display = '';
            }
        } else if (target.closest('.diam')) {
            const arr = [];
            accordion.querySelectorAll('.diam').forEach((elem) => {
                arr.push(elem.value);
            });
            const reducer = (acc, val) => +acc + +val;
            data.diam = arr.reduce(reducer, 0);
        } else if (target.closest('.diamCount')) {
            const arr = [];
            accordion.querySelectorAll('.diamCount').forEach((elem) => {
                arr.push(elem.value);
            });
            const reducer = (acc, val) => +acc + +val;
            data.diamCount = arr.reduce(reducer, 0);
        } else if (target.closest('#myonoffswitch-two')) {
            data.bottom = target.checked;
        }
        calc(data);
    });
};
export default calcResult;