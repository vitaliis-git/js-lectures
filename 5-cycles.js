// while

let num = 80;

while(num < 90){
    console.log(num);
    num++;
}


// do-while

let num1 = 80;

do{
    console.log(num1);
    num1++;
}while(num1 < 90)

// цикли while i do-while в cypress не працюють



// for

for(let i = 1; i < 8; i++){
    console.log(i)
}
// змінна i - це ітератор


num = 10;
for(let i = 0; i < 8; i++){
    console.log(num);
    num++
}



num = 0;
for(let i = 0; i < 8; i++){
    if(num === 5){
        break;
    }
    console.log(num);
    num++;
}



num = 0;
for(let i = 0; i < 8; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}



for(let i = 0; i < 3; i++){
    console.log(`i = ${i}`);

    for(let j = 0; j < 3; j++){
        console.log(`j = ${j}`);
    }
}