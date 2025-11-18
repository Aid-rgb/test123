"use strict";

const PI = 3.14;
let r, g;
r = 5;
g = PI * 5 ** 2;
alert("Площадь круга = " + g);

let a, b, s, p;
a = 5;
s = a ** 2;
alert("Площадь квадрата = " + s);

b = 7;
s = a * b;
alert("Площадь прямоугольника = " + s);

p = 2 * (a + b);
alert("Периметр прямоугольника = " + p);

let tc, f;
tc = 25;
f = (25 * 9 / 5) + 32;
alert("Градусов по фаренгейту " + f);

let tf, c;
tf = 77;
c = (77 - 32) / (9 / 5);
alert("Градусов по цельсия " + c)


let sec = 60 * 60;
let min = 60;
let bite = 1024 * 1024;

alert("В сутках: " + 24 * sec + "секунд");
alert("В 30 сутках: " + 30 * 24 * sec + "секунд");
alert("В году: " + 365 * 24 * sec + "секунд");
alert("В сутках: " + 24 * min + "минут");
alert("В году: " + 365 * 24 * min + "минут");
alert("В одном мегабайте: " + bite + "байт");
alert("В одном гигабайте: " + 1024 * bite + "байт");
alert("В десяти гигабайтах: " + 10 * 1024 *bite + "байт");
alert("В одном терабайте: " + 1024 * 1024 * bite + "байт");
alert("В одном терабайте: " + 1024 * bite + "килобайт");

let arr = [10, 20, 30, 40, 50];
alert(arr); 
console.log(arr); 

let arr1 = ['apple', 'banana', 'orange', 'grape'];
alert(arr1); 
console.log(arr1); 

let arr2 = [1, 2, 3];
alert(arr2[0]); 
alert(arr2[1]); 
alert(arr2[2]); 

let arr3 = [1, 2, 3];
let sum = arr3[0] + arr3[1] + arr3[2];
alert(sum); 

let arr4 = ['a', 'b', 'c', 'd'];
let result = arr4[0] + '+' + arr4[1] + '+' + arr4[2] + '+' + arr4[3];
alert(result); 

let arr5 = ['яблоко', 'банан', 'апельсин', 21, true];
alert(arr5.length);

let arr6 = ['яблоко', 'банан', 'апельсин', 42, true];
alert(arr6[arr6.length - 1]); 

let arr7 = ['a', 'b', 'c'];
arr7[0] = 1; 
arr7[1] = 2; 
arr7[2] = 3; 
console.log(arr7); 

let arr8 = [17, 27, 37, 47, 57]; 
arr8[0] += 3;
arr8[1] += 3;
arr8[2] += 3;
arr8[3] += 3;
arr8[4] += 3;
console.log(arr8);

let arr9 = [1, 2, 3];
arr9[0]++;
arr9[1]++;
arr9[2]++;
console.log(arr9);

let arr0 = [];
arr0[0] = 1;
arr0[1] = 2;
arr0[2] = 3;
console.log(arr0);

let arra = [1, 2, 3];
arra[3] = 4;
arra[4] = 5;
console.log(arra); 

let arrc = [];
arrc[3] = 'a';
arrc[8] = 'b';
console.log(arrc.length); 

let arrv = [];
arrv.push(1);
arrv.push(2);
arrv.push(3);
console.log(arrv); 

let arrm = [1, 2, 3];
arrm.push(4);
arrm.push(5);
console.log(arrm); 

let arr45 = ['a', 'b', 'c'];
let key = 2;
console.log(arr45[key]); 

let arr90 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;

let sum1 = arr90[key1] + arr90[key2];
console.log(sum);

let arr55 = ['a', 'b', 'c', 'd', 'e'];
delete arr55[1]; 
delete arr55[3]; 
console.log(arr55);        
console.log(arr55.length); 

let arr11 = [1, 2, 3, 4, 5];
console.log(arr11[arr11.length - 1]);

let arr22 = [1, 2, 3, 4, 5];
console.log(arr22[0] + arr22[1] + arr22[2] + arr22[3] + arr22[4]); 

let arr33 = [1, 2, 3, 4, 5];
console.log(arr33.length); 

let weekDays = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье'
};

console.log(weekDays[1]); 
console.log(weekDays[2]); 
console.log(weekDays[3]); 
console.log(weekDays[4]); 
console.log(weekDays[5]); 
console.log(weekDays[6]); 
console.log(weekDays[7]); 

let months = {
  1: 'Январь',
  2: 'Февраль',
  3: 'Март',
  4: 'Апрель',
  5: 'Май',
  6: 'Июнь',
  7: 'Июль',
  8: 'Август',
  9: 'Сентябрь',
  10: 'Октябрь',
  11: 'Ноябрь',
  12: 'Декабрь'
};

console.log(months);

let user = {
  name: 'Иван',
  surname: 'Иванов',
  patronymic: 'Иванович'
};

console.log(user.surname + ' ' + user.name + ' ' + user.patronymic);

let date = {
  year: 2025,
  month: 10,
  day: 7
};
console.log(date.year + '-' + date.month + '-' + date.day);

let obj = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['с-с']);
console.log(obj['d 4']);
console.log(obj.e5);

let obj1 = {x: 1, y: 2, z: 3};

obj1.x = obj1.x ** 2;
obj1.y = obj1.y ** 2;
obj1.z = obj1.z ** 2;
console.log(obj1);

let obj2 = {};

obj2.name = 'Алексей';
obj2.age = 30;
obj2.city = 'Москва';
console.log(obj2);

let obj3 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj3);
console.log(keys);

let obj4 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj4).length);

let obj5 = {x: 1, y: 2, z: 3};
let key11 = 'y';
console.log(obj[key11]);

let obj6 = {x: 1, y: 2, z: 3};

let prop1 = 'x';
console.log(obj6[prop1]);

let obj7 = {x: 1, y: 2, z: 3};

let prop2 = 'x';
console.log(obj7[prop2]);

let key21 = 'x';

let obj8 = {
	[key21]: 1,
	y: 2,
	z: 3
};

let key31 = 'x';
let key41 = 'y';
let key51 = 'z';

let obj9 = {
	[key31]: 1,
	[key41]: 2,
	[key51]: 3
};

const arr99 = [1, 2, 3, 4, 5];
const res1 = arr99[1] + arr99[2];

console.log(res1);

let obj10 = {x: 1, y: 2, z: 3};
console.log(obj10['x']);

let obj11 = {x: 1, y: 2, z: 3};
let key33 = 'x';

console.log(obj11[key33]);

let obj12 = {x: 1, y: 2, z: 3};
let sum3 = obj12['x'] + obj12['y'] + obj12['z'];

console.log(sum3);

let obj13 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj13).length);