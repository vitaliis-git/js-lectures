console.log('arr' + ' - object'); // конкатенація

console.log(5+7); // додавання

console.log('5 ' + 7); // конкатенація

console.log(5 + + '7'); // додавання



let incr = 10;
let decr = 10;

// incr++; // інкремент постфіксний
// decr--; // декремент постфіксний
// console.log(incr);
// console.log(decr);

// ++incr; // інкремент префіксний
// --decr; // декремент префіксний
// console.log(incr);
// console.log(decr);

console.log(incr++);
console.log(decr--);

console.log(++incr);
console.log(--decr);


console.log(5 < 2);
console.log(5 > 2);

console.log(5%2); // остача від ділення 5 на 2

// console.log(2*4 = 8); // = оператор присвоєння
console.log(2*4 == 8); // == оператор порівняння
console.log(2*4 == '8'); // приведення даних
console.log(2*4 === '8'); // === строге порявняння, не приводить дані до одного типу
console.log(2*4 === 8);


let isChecked = false;
let isClosed = true;

console.log(isChecked && isClosed); // оператор "і", true виведеться тільки якшо обидва значення true


let isChecked1 = false;
let isClosed1 = false;

console.log(isChecked1 || isClosed1); // оператор "або", true виведеться якшо хоча б одне значення true


let isChecked2 = true;
let isClosed2 = false;
console.log(isChecked2 && !isClosed2); // оператор "не" перетворює булеанове значення на протилежне (true на false або навпаки)
console.log(isChecked2 || isClosed2);


let hamburger = true;
let fries = false;
if(hamburger && fries){
    console.log("Я ситий")
}


let hamburger1 = 5;
let fries1 = 0; // динамічна типізація 0 - false, все що більше 0 - true
if(hamburger1 && fries1){
    console.log("Я ситий")
}


let hamburger2 = 1;
let fries2 = 5;
console.log(hamburger2&&fries2); // одне зі значень 0, то повертається 0, тобто false. якщо всі значення більше 0, то повертається значення останньої змінної, тобто fries2



/*
Є 5 значень, які приводять до false:
0
"" пустий рядок
null
undefined
NaN not a number

Всі інші значення будуть приводитись до true
*/



// Хочете, щоб були 3 гамбургери і кола або 2 порції нагетсів і 2 картоплі фрі

let hambergers = 2;
let cola = 2;
let nuggets = 2;
let fries3 = 1;

if(hambergers >= 3 && cola || nuggets >= 2 && fries3 >= 2){
    console.log('всі поїли')
}
