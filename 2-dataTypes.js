/*
1. Прості типи або примітивні:
    - string (текст)
    - number (число)
    - boolean (логічний тип)
    - nool
    - undefined
    - symbol
    - bigint

2. Об'єкти:
    - об'єкт звичайний {}
    - масиви
    - об'єкт дати
    - регулярні вирази
    - помилки
*/

let number = 5;

let floatNumber = 5.5;

// infiniti, not a number (NaN)

console.log(4/0); // infiniti

console.log(-4/0); // - infiniti

console.log('string' * 5); // NaN

//boolean
let isExist = true; // false


// null, undefined
console.log(qweqweqwe);

let value = null;
console.log(value); // null


let value2;
console.log(value2); // undefined


//object
let obj = {};

let person = {
    name: "Dmytro",
    age: 28,
    status: {
        qwe1: 123,
        qwe2: "abc"
    }
};
console.log(person);
console.log(person.status.qwe2);


let person1 = new Object();
person1.name = "Vitalii"
person1.age = 36
console.log(person1);
console.log(`Name: ${person1.name}`) // інтерполяція
console.log(`Age: ${person1.age}`) // інтерполяція


let endpoint = 'help';
console.log(`https://someurl/${endpoint}`) //виведення URL ендроінта


// масиви (array)
let arr = ['text', 'some text', 36, {name: 123}, []];
console.log(arr);
console.log(arr[0]); // в масивах рахунок елементів починається з 0
console.log(arr[4]);


let numArr = [1, 2, 3];
let numObj = {a:1, b:2, c:3};

console.log(numArr[0]);
console.log(numObj.a);


let salaryObj = {
    'Anna': 1000,
    'Vlada': 1200
};

let salaryArr = ['Anna', 1000, 'Vlada', 1200];

let someArrObj = {
    0: 'Anna',
    1: 1000,
    2: 'Vlada',
    3: 1200
};

console.log(salaryArr[0]);
console.log(someArrObj[0]); // якщо ключом об'єкта є цифра, то доступ до значення відбувається як в масиві через []

let someArrObj2 = {
    a: 'Anna',
    b: 1000,
    c: 'Vlada',
    d: 1200
};

//console.log(someArrObj2.a);
//console.log(someArrObj2["a"]);

console.log(`b1: ${someArrObj2["b"]}`);
someArrObj2.b = 2000;
console.log(`b2: ${someArrObj2["b"]}`);



let someText = " Hello world!! ";

// console.log(someText.length);
// console.log(someText.substring(0, 6));
// console.log(someText.toUpperCase());
// console.log(someText.toLowerCase());
// console.log(someText.indexOf('o'));
// console.log(someText.trim());
// console.log(someText.charAt(5));
console.log(someText[1]);



let myArr = [];
myArr.push("Доброго");
myArr.push("вечора");
// console.log(myArr);
// console.log(myArr.length);
console.log(myArr.join(" "));
console.log(myArr.pop());



let newObj = {
    a: 1,
    b: 2,
    c: 'qwerty'
}
console.log(newObj.a);
delete newObj.a;
console.log(newObj);


let someNum = 12.4;
console.log(Math.round(someNum));


let resolution = "12.2px";
console.log(parseInt(resolution));
console.log(parseFloat(resolution));