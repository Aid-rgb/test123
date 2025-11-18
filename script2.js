// Задание 1
function printNamePolikarp1() {
  console.log('Поликарп');
}
printNamePolikarp1();


// Задание 2
function printSum1to100_2() {
  let totalSum2 = 0;
  for (let i = 1; i <= 100; i++) {
    totalSum2 += i;
  }
  console.log(totalSum2);
}
printSum1to100_2();


// Задание 3
function printCube3(cubeInputNumber) {
  console.log(cubeInputNumber ** 3);
}
printCube3(3);


// Задание 4
function checkSign4(signTestNumber) {
  if (signTestNumber > 0) {
    console.log('+++');
  } else if (signTestNumber < 0) {
    console.log('---');
  } else {
    console.log('ноль');
  }
}
checkSign4(-5);


// Задание 5
function printSumOfThree5(n1, n2, n3) {
  console.log(n1 + n2 + n3);
}
printSumOfThree5(4, 5, 6);


// Задание 6
function sumThreeValues6(a, b, c) {
  console.log(a + b + c);
}
let param1_6 = 1;
let param2_6 = 2;
let param3_6 = 3;
sumThreeValues6(param1_6, param2_6, param3_6);


// Задание 7
console.log(2 * 2);
console.log(3 * 3);
console.log(5 * 5);


// Задание 8
console.log(2 + 3);
console.log(3 + 0);
console.log(0 + 0);


// Задание 9
function getCube9(num) {
  return num ** 3;
}
let result9 = getCube9(3);
console.log(result9);


// Задание 10
function getSquareRoot10(num) {
  return Math.sqrt(num);
}
let root3_10 = getSquareRoot10(3);
let root4_10 = getSquareRoot10(4);
console.log(root3_10 + root4_10);


// Задание 11
function getSqrt11(num) {
  return Math.sqrt(num);
}
function roundTo3_11(num) {
  return num.toFixed(3);
}
console.log(roundTo3_11(getSqrt11(2)));


// Задание 12
function getSqrt12(num) {
  return Math.sqrt(num);
}
function sumThree12(a, b, c) {
  return a + b + c;
}
let result12 = sumThree12(getSqrt12(2), getSqrt12(3), getSqrt12(4));


// Задание 13
function roundTo3_13(num) {
  return num.toFixed(3);
}
let result13 = roundTo3_13(sumThree12(getSqrt12(2), getSqrt12(3), getSqrt12(4)));


// Задание 14
function returnImmediately14(num) {
  return num;
}
console.log(returnImmediately14(3));


// Задание 15
function conditionalReturn15(num) {
  if (num <= 0) {
    return Math.abs(num);
  } else {
    return num ** 2;
  }
}
console.log(conditionalReturn15(10));
console.log(conditionalReturn15(-5));


// Задание 16
function earlyReturn16(num) {
  if (num <= 0) {
    return Math.abs(num);
  }
  return num ** 2;
}
console.log(earlyReturn16(10));
console.log(earlyReturn16(-5));


// Задание 17
function brokenLoop17(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
    return sum;
  }
}
console.log(brokenLoop17(5));

function fixedLoop17(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}


// Задание 18
function countDivisions18(startValue) {
  let steps = 0;
  let current = startValue;
  while (current >= 10) {
    current /= 2;
    steps++;
  }
  return steps;
}
console.log(countDivisions18(100));


// Задание 19
function productOrDiff19(x, y) {
  if (x > 0 && y > 0) {
    return x * y;
  } else {
    return x - y;
  }
}
console.log(productOrDiff19(3, 4));


// Задание 20
function areAllEven20(arr) {
  for (let num of arr) {
    if (num % 2 !== 0) {
      return false;
    }
  }
  return true;
}


// Задание 21
function areAllDigitsOdd21(number) {
  let str = String(number);
  for (let char of str) {
    if (Number(char) % 2 === 0) {
      return false;
    }
  }
  return true;
}


// Задание 22
function hasConsecutiveDuplicates22(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      return true;
    }
  }
  return false;
}


// Задание 23
function isEqual23(a, b) {
  return a == b;
}


// Задание 24
function isNotEqual24(a, b) {
  return a != b;
}


// Задание 25
function isSumAtLeast10_25(a, b) {
  return a + b >= 10;
}


// Задание 26
function isNonNegative26(num) {
  return num >= 0;
}


// Задание 27
function calculateSum27(arr) {
  let total = 0;
  for (let elem of arr) {
    total += elem;
  }
  return total;
}
function calculateAverage27(arr) {
  return calculateSum27(arr) / arr.length;
}


// Задание 28
function calculateArraySum28(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}
function divideSums28(arr1, arr2) {
  let sum1 = calculateArraySum28(arr1);
  let sum2 = calculateArraySum28(arr2);
  return sum1 / sum2;
}


// Задание 29
function getProduct29(arr) {
  let result = 1;
  for (let elem of arr) {
    result *= elem;
  }
  return result;
}


// Задание 30
let num30 = 1;
function func30() {
  console.log(num30);
}
func30();


// Задание 31
let num31 = 1;
function func31() {
  console.log(num31);
}
num31 = 2;
func31();


// Задание 32
function func32() {
  console.log(num32);
}
let num32;
num32 = 1;
func32();
num32 = 2;
func32();


// Задание 33
function func33() {
  let numLocal33 = 5;
  return numLocal33;
}
// console.log(numLocal33); // ошибка


// Задание 34
function func34() {
  let numLocal34 = 5;
  return numLocal34;
}
console.log(func34());


// Задание 35
let num35 = 1;
function func35() {
  num35 = 2;
}
func35();
console.log(num35);


// Задание 36
let num36 = 1;
function func36() {
  let numLocal36 = 2;
}
func36();
console.log(num36);


// Задание 37
let num37 = 1;
function func37() {
  num37 = 2;
}
func37();
console.log(num37);


// Задание 38
let num38 = 1;
function func38() {
  num38 = 2;
}
console.log(num38);


// Задание 39
let num39 = 1;
function func39() {
  let numLocal39 = 2;
}
func39();
console.log(num39);


// Задание 40
let num40 = 1;
function func40() {
  let numLocal40 = 2;
}
console.log(num40);
func40();


// Задание 41
let num41 = 1;
function func41() {
  num41 = 2;
}
console.log(num41);
func41();


// Задание 42
let num42 = 1;
function func42() {
  num42++;
}
func42();
func42();
func42();
console.log(num42);


// Задание 43
function func43() {
  num43 = 2;
}
let num43;
num43 = 1;
console.log(num43);
func43();


// Задание 44
function func44() {
  num44 = 2;
}
let num44 = 1;
func44();
console.log(num44);


// Задание 45
function func45() {
  return 'hello';
}


// Задание 46
console.log(func45());


// Задание 47
console.log(func45);


// Задание 48
func45 = 123;
console.log(func45);


// Задание 49
function func1_49() {
  return 3;
}


// Задание 50
let func2_50 = func1_49;


// Задание 51
console.log(func1_49() + func2_50());


// Задание 52
let func1_52 = function() {
  return 1;
};


// Задание 53
let func2_53 = function() {
  return 2;
};


// Задание 54
console.log(func1_52() + func2_53());


// Задание 55
funcDeclaration55();
function funcDeclaration55() {
  console.log('Function Declaration works!');
}


// Задание 56
let funcExpression56 = function() {
  console.log('Function Expression works!');
};
funcExpression56();


// Задание 57
let func1_57 = function() { console.log('!'); };
let func2_57 = function() { console.log('!'); };
function func3_57() { console.log('!'); }


// Задание 58
function testSumFunctions58(f1, f2, f3) {
  return f1() + f2() + f3();
}
let result58 = testSumFunctions58(
  function() { return 1; },
  function() { return 2; },
  function() { return 3; }
);
console.log(result58);


// Задание 59
function fd1() { return 1; }
function fd2() { return 2; }
function fd3() { return 3; }
let result59 = testSumFunctions58(fd1, fd2, fd3);
console.log(result59);


// Задание 60
let fe1 = function() { return 1; };
let fe2 = function() { return 2; };
let fe3 = function() { return 3; };
let result60 = testSumFunctions58(fe1, fe2, fe3);
console.log(result60);


// Задание 61
function cubeCallback61(num) {
  return num ** 3;
}
function testCube61(fn) {
  console.log(fn(3));
}
testCube61(cubeCallback61);
testCube61(function(n) { return n ** 3; });
testCube61((n) => n ** 3);


// Задание 62
function testAdd62(fn) {
  console.log(fn(2, 3));
}
testAdd62((a, b) => a + b);


// Задание 63
function testNumFuncs63(num, f1, f2) {
  return f1(num) + f2(num);
}
let result63 = testNumFuncs63(3, n => n ** 2, n => n ** 3);
console.log(result63);


// Задание 64
function transformArray64(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i]);
  }
  return arr;
}
let result64 = transformArray64([1, 2, 3, 4, 5], n => n ** 3);
console.log(result64);


// Задание 65
function calcNested65(a, b) {
  function square(x) { return x * x; }
  function cube(x) { return x * x * x; }
  return square(a) + cube(b);
}
console.log(calcNested65(2, 3));


// Задание 66
function returnFunc66() {
  return function() { return 1; };
}
function returnFunc67() {
  return function() { return 2; };
}
let sum66 = returnFunc66()() + returnFunc67()();
console.log(sum66);


// Задание 67
function deepNested67() {
  return () => () => () => () => '!'; // 4 уровня
}
console.log(deepNested67()()()()());


// Задание 68
function chainAdd68(a) {
  return (b) => (c) => a + b + c;
}
console.log(chainAdd68(2)(3)(4));


// Задание 69
function buildArray69(a) {
  return (b) => (c) => (d) => () => [a, b, c, d];
}
console.log(buildArray69(2)(3)(4)(5)());


// Задание 70
function each70(arr, fn) {
  let result = [];
  for (let item of arr) {
    result.push(fn(item));
  }
  return result;
}
let result70 = each70([1, 2, 3, 4, 5], n => n ** 3);
console.log(result70);


// Задание 71
function filter71(arr, predicate) {
  let result = [];
  for (let item of arr) {
    if (predicate(item)) result.push(item);
  }
  return result;
}
let result71 = filter71([1, 2, 3, 4, 5], elem => elem > 0);
console.log(result71);


// Задание 72
function createCounterUp72() {
  let count = 1;
  return () => {
    console.log(count);
    count++;
  };
}
let counter72 = createCounterUp72();
counter72();
counter72();
counter72();


// Задание 73
function createCounterDown73() {
  let count = 10;
  return () => {
    console.log(count);
    count--;
  };
}
let counter73 = createCounterDown73();
counter73();
counter73();
counter73();


// Задание 74
function createCountdown74() {
  let count = 10;
  return () => {
    if (count > 0) {
      console.log(count);
      count--;
    } else {
      console.log('Отсчет окончен');
    }
  };
}
let countdown74 = createCountdown74();
for (let i = 0; i < 12; i++) {
  countdown74();
}