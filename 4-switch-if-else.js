// if-else

if(4 == 9){
    console.log('Expression is true')
}

if(4 == 9) console.log('Expression is true') // якщо після умови йде 1 оператор, то фігурні дужки можна не ставити, але краще так не писати



if(4 == 9){
    console.log('Expression is true')
} else {
    console.log('Expression is false')
}



if(4){
    console.log('Expression is true')
} else {
    console.log('Expression is false')
}



let num = 500;

if(num < 49){
    console.log('error')
} else if (num > 100){
    console.log('some big number')
} else {
    console.log('ok')
}



// коли багато умов if else, то це можна записати в іншому виді, щоб код вяглядав биль шлаконічно, у вигляді тернарного оператора

let num1 = 50;
(num1 === 50) ? console.log('ok') : console.log('error')



// switch-case

let number = 60;

switch(number){
    case 49:
        console.log('Your value is 49');
        break;
    case 50:
        console.log('Your value is 50');
        break;
    case 51:
        console.log('Your value is 51');
        break;
    case 52:
        console.log('Your value is 52');
        break;
    default:
        console.log('This is default output');
        break;
}