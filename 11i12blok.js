// Задание 1: Функция test, возвращающая сумму
function test1(func1, func2, func3) {
    return func1() + func2() + func3();
}

console.log('=== ЗАДАНИЕ 1 ===');
let result1 = test1(
    function() { return 1; },
    function() { return 2; },
    function() { return 3; }
);
console.log('Результат задания 1:', result1);

// Задание 2: Function Declaration
console.log('=== ЗАДАНИЕ 2 ===');
function func1() { return 1; }
function func2() { return 2; }
function func3() { return 3; }

let result2 = test1(func1, func2, func3);
console.log('Результат задания 2 (Function Declaration):', result2);

// Задание 3: Function Expression
console.log('=== ЗАДАНИЕ 3 ===');
let func1exp = function() { return 1; };
let func2exp = function() { return 2; };
let func3exp = function() { return 3; };

let result3 = test1(func1exp, func2exp, func3exp);
console.log('Результат задания 3 (Function Expression):', result3);

console.log('=== ИТОГ ===');
console.log('Все задания выполнены успешно! Все результаты равны 6.');

// Параметры передаваемых функций
function test2(func) {
    console.log(func(3));
}

test2(function(num) {
    return num * num * num;
});

function func4(num) {
    return num * num * num;
}

test2(func4);

let func5 = function(num) {
    return num * num * num;
};

test2(func5);

function test3(func) {
    console.log(func(2, 3));
}

test3(function(a, b) {
    return a + b;
});

// Передача числа параметром
function test4(num, func1, func2) {
    return func1(num) + func2(num);
}

let result4 = test4(3, 
    function(num) { return num * num; },
    function(num) { return num * num * num; }
);
console.log(result4);

// Применение передачи функции параметром
function test5(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

let result5 = test5([1, 2, 3, 4, 5], function(num) {
    return num * num * num;
});
console.log(result5);

// Вложенные функции
function func6(num1, num2) {
    function square(num) { return num * num; }
    function cube(num) { return num * num * num; }
    return square(num1) + cube(num2);
}
console.log(func6(2, 3));

// Функция, возвращающая функцию
function func7() { return function() { return 1; }; }
function func8() { return function() { return 2; }; }
let sum = func7()() + func8()();
console.log(sum);

// Любой уровень вложенности
function func9() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return '!';
                };
            };
        };
    };
}
console.log(func9()()()()());

// Параметры возвращаемой функции
function func10(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        };
    };
}
console.log(func10(2)(3)(4));

function func11(num1) {
    let arr = [num1];
    return function(num2) {
        arr.push(num2);
        return function(num3) {
            arr.push(num3);
            return function(num4) {
                arr.push(num4);
                return function() { return arr; };
            };
        };
    };
}
console.log(func11(2)(3)(4)(5)());

// Нюансы коллбэков
function cube(num) { return num ** 3; }
let result6 = each([1, 2, 3, 4, 5], cube);
console.log(result6);

// Применение стрелочных функций
let result7 = filter([1, 2, 3, 4, 5], elem => elem > 0);

//------------------------------------------------
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