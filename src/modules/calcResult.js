const data = {
    type: true,
    diam: 0,
    diamCount: 0,
    bottom: false,
    arrDiam: [],
    arrDiamCount: [],
    distHouse: 0,
    calcResult: 0
};
const calcResult = () => {

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
                    res = 1.1;
                } else {
                    res = 1.2;
                }
            } else {
                res = 1;
            }
            return res;
        };

        sum = (startingPrice + (startingPrice * data.diam / 10) + data.diamCount) * checkBottom();

        calcRes.value = Math.ceil(sum);
        data.calcResult = calcRes.value;
    };


    const accordion = document.getElementById('accordion'),
        twoCol = document.querySelector('.two-col');

    accordion.addEventListener('change', (e) => {
        const { target } = e;

        if (target.closest('#myonoffswitch')) {

            data.type = target.checked;
            if (target.checked) {
                twoCol.style.display = 'none';
            } else {
                twoCol.style.display = '';
            };

        }; //else
        if (target.closest('.diam')) {


            const optDiam1 = document.querySelector('.d1'),
                optDiam2 = document.querySelector('.d2');
            if (data.type) {
                data.arrDiam = [];
                optDiam2.value = '';
                if (parseInt(optDiam1.value) === 2) {
                    data.diam = 2;
                } else {
                    data.diam = 0;
                };
                accordion.querySelectorAll('.diam').forEach((elem) => {
                    data.arrDiam.push(elem.value);
                });

                console.log(data.diam);
                console.log(data.arrDiam);
            } else {
                data.arrDiam = [];
                if (parseInt(optDiam1.value) === 2 || parseInt(optDiam2.value) === 2) {
                    data.diam = 2;
                } else {
                    data.diam = 0;
                };
                accordion.querySelectorAll('.diam').forEach((elem) => {
                    data.arrDiam.push(elem.value);
                });

                console.log(data.diam);
                console.log(data.arrDiam);
            };
        };
        //else
        if (target.closest('.diamCount')) {
            const optDiamCount1 = document.querySelector('.dc1'),
                optDiamCount2 = document.querySelector('.dc2');


            if (data.type) {
                data.arrDiamCount = [];
                optDiamCount2.value = '';
                if (parseInt(optDiamCount1.value) === 2) {
                    data.diamCount = 0.3 * 10000;
                } else if (parseInt(optDiamCount1.value) === 3) {
                    data.diamCount = 0.5 * 10000;
                } else {
                    data.diamCount = 0;
                };

                accordion.querySelectorAll('.diamCount').forEach((elem) => {
                    data.arrDiamCount.push(elem.value);
                });

                console.log(data.arrDiamCount);

            } else {
                data.arrDiamCount = [];
                if (parseInt(optDiamCount1.value) === 2) {
                    data.diamCount = 0.3 * 10000;
                } else
                if (parseInt(optDiamCount1.value) === 3) {
                    data.diamCount = 0.5 * 10000;
                } else {
                    data.diamCount = 0;
                };

                if (parseInt(optDiamCount2.value) === 3) {
                    data.diamCount = data.diamCount + 0.4 * 5000;
                } else if (parseInt(optDiamCount2.value) === 2) {
                    data.diamCount = data.diamCount + 0.2 * 5000;
                };


                accordion.querySelectorAll('.diamCount').forEach((elem) => {
                    data.arrDiamCount.push(elem.value);
                });
                console.log(data.arrDiamCount);
            };

        }; //else
        if (target.closest('#myonoffswitch-two')) {
            data.bottom = target.checked;
        };
        data.distHouse = document.querySelector('.distHouse').value;
        calc(data);
        console.log(data);
    });

    calc(data);

};
export { data };
export default calcResult;