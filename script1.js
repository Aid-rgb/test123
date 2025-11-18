let test1 = 15; 
if (test1 > 10) {
  console.log('Задание 1: +++');
} else {
  console.log('Задание 1: ---');
}

let test2 = 5; 
if (test2 < 10) {
  console.log('Задание 2: +++');
} else {
  console.log('Задание 2: ---');
}

let test3 = 10; 
if (test3 >= 10) {
  console.log('Задание 3: +++');
} else {
  console.log('Задание 3: ---');
}

let test4 = 10; 
if (test4 <= 10) {
  console.log('Задание 4: +++');
} else {
  console.log('Задание 4: ---');
}
let varA = 7;
let varB = 3;

if (varA > varB) {
  console.log('varA больше varB');
} else if (varB > varA) {
  console.log('varB больше varA');
} else {
  console.log('varA и varB равны');
}

if (varA === varB) {
  console.log('Значения равны');
} else {
  console.log('Значения не равны');
}
let str1 = 'hello';
let str2 = 'world';

if (str1 === str2) {
  console.log('Строки равны');
} else {
  console.log('Строки не равны');
}
let strEq1_a = '3';
let strEq1_b = '3';
if (strEq1_a == strEq1_b) {
  console.log('Задание 5: +++'); 
} else {
  console.log('Задание 5: ---');
}

let strEq2_a = '3';
let strEq2_b = '3';
if (strEq2_a === strEq2_b) {
  console.log('Задание 6: +++'); 
} else {
  console.log('Задание 6: ---');
}

let numStrEq_a = 3;
let numStrEq_b = '3';
if (numStrEq_a == numStrEq_b) {
  console.log('Задание 7: +++'); 
} else {
  console.log('Задание 7: ---');
}

let numStrStrict_a = 3;
let numStrStrict_b = '3';
if (numStrStrict_a === numStrStrict_b) {
  console.log('Задание 8: ---'); 
} else {
  console.log('Задание 8: +++'); 
}

let numEq_a = 3;
let numEq_b = 3;
if (numEq_a === numEq_b) {
  console.log('Задание 9: +++'); 
} else {
  console.log('Задание 9: ---');
}
let numA = 3;
if (numA > 0 && numA < 5) {
  console.log('Задание 10: +++');
} else {
  console.log('Задание 10: ---');
}

let numB = 15;
if (numB >= 10 && numB <= 20) {
  console.log('Задание 11: +++');
} else {
  console.log('Задание 11: ---');
}

let val1 = 1;
let val2 = 4;
if (val1 <= 1 && val2 >= 3) {
  console.log('Задание 12: +++');
} else {
  console.log('Задание 12: ---');
}

let num = 3; 
if (num == 0 || num > 1 && num < 5) {
  console.log('Задание 13: +++');
} else {
  console.log('Задание 13: ---');
}

let num1 = -1;
let num2 = 15;
if ( !(num1 >= 0 || num2 <= 10) ) {
  console.log('Задание 14: +++');
} else {
  console.log('Задание 14: ---');
}

let flag = true;
if (flag) {
  console.log('Задание 15: +++');
} else {
  console.log('Задание 15: ---');
}
let a16 = true;
let b16 = true;
if (a16 && b16) {
  console.log('Задание 16: +++');
} else {
  console.log('Задание 16: ---');
}

let a17 = true;
let b17 = true;
if (a17 && !b17) {
  console.log('Задание 17: +++');
} else {
  console.log('Задание 17: ---');
}

let a18 = true;
let b18 = true;
if (!a18 && !b18) {
  console.log('Задание 18: +++');
} else {
  console.log('Задание 18: ---');
}

let a19 = true;
let b19 = true;
if (a19 && b19) {
  console.log('Задание 19: +++');
} else {
  console.log('Задание 19: ---');
}

let a20 = true;
let b20 = true;
let c20 = true;
if (a20 && b20 && c20) {
  console.log('Задание 20: +++');
} else {
  console.log('Задание 20: ---');
}

let a21 = true;
let b21 = true;
let c21 = true;
if (a21 || (b21 && c21)) {
  console.log('Задание 21: +++');
} else {
  console.log('Задание 21: ---');
}

let a22 = true;
let b22 = true;
let c22 = true;
if (a22 || (!b22 && !c22)) {
  console.log('Задание 22: +++');
} else {
  console.log('Задание 22: ---');
}

let test23 = 5;
if (test23 > 0) console.log('Задание 23: +++');
else console.log('Задание 23: ---');

let test24 = -2;
if (test24 > 0) console.log('Задание 24: +++');
let lang = 'ru';

switch (lang) {
  case 'ru':
    console.log('rus');
    break;
  case 'en':
    console.log('eng');
    break;
  case 'de':
    console.log('deu');
    break;
  default:
    console.log('language not supported');
    break;
}

let num3 = 1;
let res = num3 >= 0 ? '1' : '2';
console.log(res);
let isAdult = confirm('Вам уже есть 18 лет?');

if (isAdult) {
  console.log('Добро пожаловать! Контент для взрослых.');
} else {
  console.log('Доступ запрещён. Вам ещё нет 18 лет.');
}

let age = 17;
let adult; 
if (age >= 18) {
  adult = true;
} else {
  adult = false;
}
console.log(adult);
let age29 = 17;
let adult29;

if (age29 >= 18) {
  adult29 = true;  
} else {
  adult29 = false;
}

console.log(adult29); 

let age30 = 17;
let adult30;

if (age30 >= 18) {
  adult30 = true;
} else {
  adult30 = false;  
}

console.log(adult30); 

let age31 = 17;
let res31;

if (age31 >= 18) {
  if (age31 <= 23) {
    res31 = 'от 18 до 23';  
  } else {
    res31 = 'больше 23';
  }
} else {
  res31 = 'меньше 18';  
}

console.log(res31); 

let age32 = 19;
let res32;

if (age32 >= 18) {
  if (age32 <= 23) {
    res32 = 'от 18 до 23';
  } else {
    res32 = 'больше 23';
  }
} else {
  res32 = 'меньше 18';
}
console.log(res32);
let num33 = 120;
let lastDigit33 = String(num33)[String(num33).length - 1];

if (lastDigit33 === '0') {
  console.log('Задание 33: Последняя цифра — ноль');
} else {
  console.log('Задание 33: Последняя цифра — не ноль');
}

let num34 = 123;
let lastDigit34 = String(num34)[String(num34).length - 1];

if (lastDigit34 === '0' || lastDigit34 === '2' || lastDigit34 === '4' || 
    lastDigit34 === '6' || lastDigit34 === '8') {
  console.log('Задание 34: Чётное число');
} else {
  console.log('Задание 34: Нечётное число');
}
let num35 = 7;
if (num35 % 2 === 0) {
  console.log('Задание 35: Чётное число');
} else {
  console.log('Задание 35: Нечётное число');
}

let num36 = 9;
if (num36 % 3 === 0) {
  console.log('Задание 36: Число делится на 3');
} else {
  console.log('Задание 36: Число не делится на 3');
}
let month = 5; 

if (month === 12 || month === 1 || month === 2) {
  console.log('Задание 37: Зима');
} else if (month >= 3 && month <= 5) {
  console.log('Задание 37: Весна');
} else if (month >= 6 && month <= 8) {
  console.log('Задание 37: Лето');
} else if (month >= 9 && month <= 11) {
  console.log('Задание 37: Осень');
} else {
  console.log('Задание 37: Некорректный номер месяца');
}

let str38 = 'abcde';
if (str38[0] === 'a') {
  console.log('Задание 38: Первый символ — "a"');
} else {
  console.log('Задание 38: Первый символ не "a"');
}

let num39 = 12345;
let firstDigit39 = String(num39)[0];
if (firstDigit39 === '1' || firstDigit39 === '2' || firstDigit39 === '3') {
  console.log('Задание 39: Первая цифра — 1, 2 или 3');
} else {
  console.log('Задание 39: Первая цифра не 1, 2 или 3');
}

let num40 = 456;
let str40 = String(num40);
if (str40.length === 3) {
  let sum40 = Number(str40[0]) + Number(str40[1]) + Number(str40[2]);
  console.log('Задание 40: Сумма цифр =', sum40);
} else {
  console.log('Задание 40: Число не трёхзначное');
}

let num41 = 123420; 
let str41 = String(num41).padStart(6, '0'); 

if (str41.length === 6) {
  let sumFirstHalf = Number(str41[0]) + Number(str41[1]) + Number(str41[2]);
  let sumSecondHalf = Number(str41[3]) + Number(str41[4]) + Number(str41[5]);

  if (sumFirstHalf === sumSecondHalf) {
    console.log('Задание 41: Суммы половин равны');
  } else {
    console.log('Задание 41: Суммы половин не равны');
  }
} else {
  console.log('Задание 41: Число не шестизначное');
}

let arr42 = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr42) {
  console.log(elem);
}

let obj43 = {x: 1, y: 2, z: 3};
for (let key in obj43) {
  console.log(key);
}

let obj44 = {x: 1, y: 2, z: 3};
for (let key in obj44) {
  console.log(obj44[key]);
}
let i45 = 1;
while (i45 <= 100) {
  console.log(i45);
  i45++;
}

let i46 = 11;
while (i46 <= 33) {
  console.log(i46);
  i46++;
}

let i47 = 100;
while (i47 >= 1) {
  console.log(i47);
  i47--;
}

let num48 = 5; 
let iterations48 = 0;
while (num48 <= 1000) {
  num48 *= 3;
  iterations48++;
}
console.log('Задание 48: Итоговое число =', num48);
console.log('Задание 48: Количество итераций =', iterations48);
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

for (let i = 11; i <= 33; i++) {
  console.log(i);
}

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

for (let i = 100; i >= 0; i--) {
  console.log(i);
}
let arr54 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr54.length; i++) {
  console.log(arr54[i]);
}

let arr55 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr55.length - 1; i++) {
  console.log(arr55[i]);
}

let arr56 = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr56.length - 1; i >= 0; i--) {
  console.log(arr56[i]);
}

let arr57 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr57.length; i++) {
  console.log(arr57[i]);
}
let arr58 = [2, 5, 9, 15, 1, 4];
for (let elem of arr58) {
  if (elem > 3 && elem < 10) {
    console.log(elem);
  }
}

let obj59 = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj59) {
  let value = obj59[key];
  if (value % 2 !== 0) {
    console.log(value);
  }
}
let sumEven = 0;
for (let i = 2; i <= 100; i += 2) {
  sumEven += i;
}
console.log('Задание 60: Сумма чётных чисел =', sumEven);

let sumOdd = 0;
for (let i = 1; i <= 99; i += 2) {
  sumOdd += i;
}
console.log('Задание 61: Сумма нечётных чисел =', sumOdd);

let product = 1;
for (let i = 1; i <= 20; i++) {
  product *= i;
}
console.log('Задание 62: Произведение чисел от 1 до 20 =', product);
let arr63 = [2, 5, 9, 3, 1, 4];
let sum63 = 0;
for (let elem of arr63) {
  sum63 += elem;
}
console.log('Задание 63: Сумма всех элементов =', sum63);

let arr64 = [2, 5, 9, 3, 1, 4];
let sumEven64 = 0;
for (let elem of arr64) {
  if (elem % 2 === 0) {
    sumEven64 += elem;
  }
}
console.log('Задание 64: Сумма чётных элементов =', sumEven64);

let arr65 = [2, 5, 9, 3, 1, 4];
let sumSquares65 = 0;
for (let elem of arr65) {
  sumSquares65 += elem * elem;
}
console.log('Задание 65: Сумма квадратов =', sumSquares65);

let arr66 = [2, 5, 9, 3, 1, 4];
let product66 = 1; 
for (let elem of arr66) {
  product66 *= elem;
}
console.log('Задание 66: Произведение элементов =', product66);
let str67 = '';
for (let i = 0; i < 5; i++) {
  str67 += '-';
}
console.log('Задание 67:', str67);

let str68 = '';
for (let i = 1; i <= 9; i++) {
  str68 += i;
}
console.log('Задание 68:', str68);

let str69 = '';
for (let i = 9; i >= 1; i--) {
  str69 += i;
}
console.log('Задание 69:', str69);

let str70 = '';
for (let i = 1; i <= 9; i++) {
  str70 += '-' + i;
}
str70 += '-'; 
console.log('Задание 70:', str70);
let arr71 = [5, 2, 7, 0, 9, 3];
for (let elem of arr71) {
  console.log(elem);
  if (elem === 0) {
    break;
  }
}

let arr72 = [4, 6, 2, -3, 8, 1];
let sum72 = 0;
for (let elem of arr72) {
  if (elem < 0) {
    break;
  }
  sum72 += elem;
}
console.log('Задание 72: Сумма до первого отрицательного =', sum72);

let arr73 = [1, 5, 3, 8, 3, 2];
let pos73 = -1;
for (let i = 0; i < arr73.length; i++) {
  if (arr73[i] === 3) {
    pos73 = i;
    break;
  }
}
console.log('Задание 73: Позиция первого числа 3 =', pos73);

let sum74 = 0;
let count74 = 0;
let num74 = 1;
while (true) {
  sum74 += num74;
  count74++;
  if (sum74 > 100) {
    break;
  }
  num74++;
}
console.log('Задание 74: Нужно сложить', count74, 'чисел');
let result75 = '';
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 3; j++) {
    result75 += i;
  }
}
console.log('Задание 75:', result75);

let result76 = '';
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    result76 += i + '' + j + ' ';
  }
}
console.log('Задание 76:', result76.trim());
let arr77 = [];
for (let i = 1; i <= 10; i++) {
  arr77.push(i);
}
console.log('Задание 77:', arr77);

let arr78 = [];
for (let i = 0; i < 10; i++) {
  arr78.push('x');
}
console.log('Задание 78:', arr78);

let original79 = [-2, 5, -1, 8, 0, 3, -7, 4];
let positive79 = [];
for (let num of original79) {
  if (num > 0) {
    positive79.push(num);
  }
}
console.log('Задание 79: Положительные числа:', positive79);
let arr80 = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l']
];
console.log('Задание 80:');
console.log(arr80[3][2]); 
console.log(arr80[1][1]); 
console.log(arr80[2][0]); 
console.log(arr80[0][0]); 

let arr81 = [[1, 2], [3, 4], [5, 6]];
let sum81 = 0;
for (let i = 0; i < arr81.length; i++) {
  for (let j = 0; j < arr81[i].length; j++) {
    sum81 += arr81[i][j];
  }
}
console.log('Задание 81: Сумма всех элементов =', sum81);
let arr82 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

let sum82 = 0;
for (let i = 0; i < arr82.length; i++) {            
  for (let j = 0; j < arr82[i].length; j++) {      
    for (let k = 0; k < arr82[i][j].length; k++) {  
      sum82 += arr82[i][j][k];
    }
  }
}
console.log('Задание 82: Сумма всех элементов =', sum82);
let arr83 = [[1, 2, 3], [4, 5], [6]];
let sum83 = 0;

for (let subArr of arr83) {
  for (let elem of subArr) {
    sum83 += elem;
  }
}
console.log('Задание 83: Сумма =', sum83);

let arr84 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum84 = 0;

for (let matrix of arr84) {
  for (let row of matrix) {
    for (let num of row) {
      sum84 += num;
    }
  }
}
console.log('Задание 84: Сумма =', sum84);
let arr85 = [];
for (let i = 0; i < 3; i++) {
  arr85[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr85[i].push(j);
  }
}
console.log('Задание 85:', arr85);

let arr86 = [];
for (let i = 0; i < 3; i++) {
  arr86[i] = [];
  for (let j = 0; j < 4; j++) {
    arr86[i].push('x');
  }
}
console.log('Задание 86:', arr86);

let arr87 = [];
for (let i = 0; i < 3; i++) {
  arr87[i] = [];
  for (let j = 0; j < 2; j++) {
    arr87[i][j] = [];
    for (let k = 1; k <= 5; k++) {
      arr87[i][j].push(k);
    }
  }
}
console.log('Задание 87:', arr87);
let arr88 = [];
for (let i = 0; i < 3; i++) {
  arr88[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr88[i].push(j);
  }
}
console.log('Задание 88:', arr88);

let arr89 = [];
for (let i = 0; i < 3; i++) {
  arr89[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr89[i].push(j);
  }
}
console.log('Задание 89:', arr89);

let arr90 = [];
for (let i = 0; i < 3; i++) {
  arr90[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr90[i].push(j);
  }
}
console.log('Задание 90:', arr90);

let arr91 = [];
for (let i = 0; i < 3; i++) {
  arr91[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr91[i].push(j);
  }
}
console.log('Задание 91:', arr91);

let arr92 = [];
for (let i = 0; i < 3; i++) {
  arr92[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr92[i].push(j);
  }
}
console.log('Задание 92:', arr92);

let arr93 = [];
for (let i = 0; i < 3; i++) {
  arr93[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr93[i].push(j); 
  }
}
console.log('Задание 93:', arr93);
let arr94 = [];
let k94 = 1;
for (let i = 0; i < 4; i++) {
  arr94[i] = [];
  for (let j = 0; j < 2; j++) {
    arr94[i].push(k94++);
  }
}
console.log(arr94);

let arr95 = [];
let k95 = 2;
for (let i = 0; i < 4; i++) {
  arr95[i] = [];
  for (let j = 0; j < 3; j++) {
    arr95[i].push(k95);
    k95 += 2;
  }
}
console.log(arr95);

let arr96 = [];
let k96 = 1;
for (let i = 0; i < 2; i++) {
  arr96[i] = [];
  for (let j = 0; j < 2; j++) {
    arr96[i][j] = [];
    for (let m = 0; m < 2; m++) {
      arr96[i][j].push(k96++);
    }
  }
}
console.log(arr96);

let arr97 = [];
let k97 = 1;
for (let i = 0; i < 3; i++) {
  arr97[i] = [];
  for (let j = 0; j < 3; j++) {
    arr97[i][j] = k97;
    k97++;
  }
}
console.log(arr97);

let arr98 = [];
let k98 = 1;
for (let i = 0; i < 3; i++) {
  arr98[i] = [];
  for (let j = 0; j < 3; j++) {
    arr98[i][j] = k98;
    k98++;
  }
}
console.log(arr98);

let arr99 = [];
let k99 = 1;
for (let i = 0; i < 3; i++) {
  arr99[i] = [];
  for (let j = 0; j < 3; j++) {
    arr99[i][j] = k99;
    k99++;
  }
}
console.log(arr99);

let arr100 = [];
let k100 = 1;
for (let i = 0; i < 3; i++) {
  arr100[i] = [];
  for (let j = 0; j < 3; j++) {
    arr100[i][j] = k100;
    k100++;
  }
}
console.log(arr100);

let arr101 = [];
let k101 = 1;
for (let i = 0; i < 3; i++) {
  arr101[i] = [];
  for (let j = 0; j < 3; j++) {
    arr101[i][j] = k101;
    k101++;
  }
}
console.log(arr101);

let arr102 = [];
for (let i = 0, k102 = 1; i < 3; i++) {
  arr102[i] = [];
  for (let j = 0; j < 3; j++) {
    arr102[i][j] = k102;
    k102++;
  }
}
console.log(arr102);

let arr103 = [];
for (let i = 0, k103 = 1; i < 3; i++) {
  arr103[i] = [];
  for (let j = 0; j < 3; j++) {
    arr103[i][j] = k103;
    k103++;
  }
}
console.log(arr103);

let arr104 = [];
for (let i = 0, k104 = 1; i < 3; i++) {
  arr104[i] = [];
  for (let j = 0; j < 3; j++) {
    arr104[i][j] = k104;
    k104++;
  }
}
console.log(arr104);

let arr105 = [];
for (let i = 0, k105 = 1; i < 3; i++) {
  arr105[i] = [];
  for (let j = 0; j < 3; j++) {
    arr105[i][j] = k105++;
  }
}
console.log(arr105);

let arr106 = [];
let k106 = 1;
for (let i = 0; i < 3; i++) {
  arr106[i] = [];
  for (let j = 0; j < 3; j++) {
    arr106[i][j] = k106;
    k106++;
  }
}
console.log(arr106);
console.log(Math.pow(2, 10));

console.log(Math.sqrt(245));

let arr109 = [4, 2, 5, 19, 13, 0, 10];
let sumCubes = 0;
for (let i = 0; i < arr109.length; i++) {
  sumCubes += Math.pow(arr109[i], 3);
}
console.log(Math.sqrt(sumCubes));
let root110 = Math.sqrt(379);
console.log(Math.round(root110));        
console.log(root110.toFixed(1));         
console.log(root110.toFixed(2));         

let root111 = Math.sqrt(587);
let result111 = {
  floor: Math.floor(root111),
  ceil: Math.ceil(root111)
};
console.log(result111);
let numbers = [4, -2, 5, 19, -130, 0, 10];
let min112 = Math.min(...numbers);
let max112 = Math.max(...numbers);
console.log('Минимальное:', min112);
console.log('Максимальное:', max112);
let randomInt = Math.floor(Math.random() * 100) + 1;
console.log(randomInt);

let arr114 = [];
for (let i = 0; i < 10; i++) {
  arr114.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr114);

let a = 7;
let b = -3;
let diff = Math.abs(a - b);
console.log(diff);

let str116 = 'js';
console.log(str116.toUpperCase());

let str117 = 'JS';
console.log(str117.toLowerCase());
