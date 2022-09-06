// for taking input from user.
const prompt = require("prompt-sync")({sigint: true});

/*****************************************************************************/
//Program to output the following pattern -
/*
    1
    2 3
    4 5 6
    7 8 9 10
*/
function printPattern(n){
    let temp = 1;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write(` ${temp++}`);
        }
        console.log();
    }
}
const num = prompt('Enter the number : ');
printPattern(num);

/*************************************************************************/
//Program to find whether a given number is armstrong number or not-
function checkArmstrongNumber(num){
    let n = num.length;
    let temp = parseInt(num);
    let sum=0;
    while(temp > 0){
        let rem = temp % 10;
        sum = sum + Math.pow(rem, n);
        console.log("temp/10 "+ temp/10);
        temp = Math.trunc(temp/10);
    }
    if(num == sum){
        console.log(`${num} is an Armstong number.`);
    }else{
        console.log(`${num} is not an Armstong number.`);
    }
}
const num1 = prompt('Enter the number : ');
checkArmstrongNumber(num1);

/*************************************************************************/
//Program to find whether a given number is special number or not.
function checkSpecialNumber(num){
    let sumOfFact = 0;
    let temp = parseInt(num);
    while(temp > 0) {
        let fact =1;
        let rem = temp % 10;
        for(let i=1; i<=rem; i++){
            fact = fact*i;
        }
        sumOfFact = sumOfFact+fact;
        temp = Math.trunc(temp/10);
    }
    if(num == sumOfFact){
        console.log(`${num} is a special number.`);   
    }else{ 
        console.log(`${num} is not a special number.`); 
    }
}
const num2 = prompt('Enter the number : ');
checkSpecialNumber(num2);