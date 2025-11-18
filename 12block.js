function createCounter1() {
    let num = 1;
    return function() {
        console.log(num);
        num++;
    };
}

let counter1 = createCounter1();
counter1();
counter1();
counter1();

function createCounter2() {
    let num = 10;
    return function() {
        console.log(num);
        num--;
    };
}

let counter2 = createCounter2();
counter2();
counter2();
counter2();

function createCounter3() {
    let num = 10;
    return function() {
        if (num > 0) {
            console.log(num);
            num--;
        } else {
            console.log('Отсчет окончен');
        }
    };
}

let counter3 = createCounter3();
for (let i = 0; i < 12; i++) {
    counter3();
}