const calcResult = () => {
    const data = {
        type: true,
        diam: 0,
        diamCount: 0,
        bottom: false,
    };

    const calc = data => {
        const calcRes = document.getElementById('calc-result');
        //console.log(calcRes);
        const startingPrice = (data.type) ? 10000 : 15000;
        //console.log(startingPrice);
        let sum = startingPrice;

        const checkBottom = () => {
            //днище
            let res;
            if (data.bottom) {
                if (data.type) {
                    res = 1000;
                } else {
                    res = 2000;
                }
            } else {
                res = 0;
            }
            return res;
        };

        checkBottom();

        sum = startingPrice + (startingPrice * data.diam) + (startingPrice * data.diamCount) + checkBottom();

        calcRes.value = sum;

    };

    // const acc = document.querySelector('#accordion')
    // acc.addEventListener('click', e => {
    //     const { target } = e;
    //     if (target.closest('#myonoffswitch')) console.log(1);
    // })

    const accordion = document.getElementById('accordion'),
        twoCol = document.querySelector('.two-col');

    accordion.addEventListener('change', (e) => {
        const { target } = e;
        console.log(target);
        if (target.closest('#myonoffswitch')) {

            // target.checked = false;

            data.type = target.checked;
            //console.log(target);
            if (target.checked) {
                twoCol.style.display = 'none';
            } else {
                twoCol.style.display = '';
            }
        } else if (target.closest('.diam')) {
            //const
            const arr = [];
            accordion.querySelectorAll('.diam').forEach((elem) => {
                arr.push(elem.value);
            });
            console.log(arr);
            const reducer = (acc, val) => +acc + +val;
            data.diam = arr.reduce(reducer, 0);
            //console.log(data.diam);
        } else if (target.closest('.diamCount')) {
            //const
            const arr = [];
            accordion.querySelectorAll('.diamCount').forEach((elem) => {
                arr.push(elem.value);
            });
            // console.log(arr);
            const reducer = (acc, val) => +acc + +val;
            data.diamCount = arr.reduce(reducer, 0);
            //console.log(data.diamCount);
        } else if (target.closest('#myonoffswitch-two')) {
            data.bottom = target.checked;
        }
        calc(data);
    });
    calc(data);
};
export default calcResult;