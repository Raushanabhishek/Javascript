// for taking input from user.
const prompt = require("prompt-sync")({sigint: true});

// Program to check whether a triangle is equilateral, isosceles or scalene.
 function checktriangle(x, y, z){
    if(x===y && y===z){
        console.log("Equilateral Triangle.");
    }else if(x===y || y===z || x===z){
        console.log("Isosceles Traingle.");
    }else {
        console.log("Scalene Traingle.");
    }
}

const x = prompt('Enter x-axis ');
const y = prompt('Enter y-axis ');
const z = prompt('Enter z-axis ');

checktriangle(x, y, z);

/************************************************************************************/
// Program using switch case to find the grade of the student based on marks obtained.
function findGrade(grade){

    switch(Math.trunc(grade/10)){
        case 10:
        case 9:
            console.log("S grade obtained.");
            break;

        case 8:
            console.log("A grade obtained.");
            break;

        case 7:
            console.log("B grade obtained.");
            break;

        case 6:
            console.log("C grade obtained.");
            break;

        case 5:
            console.log("D grade obtained.");
            break;

        case 4:
            console.log("E grade obtained.");
            break;

        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Student has failed.");
            break;
        default:
            console.log("Invalid marks.");
            break;          
    }
}
const grade = prompt('Enter your Grade ');
findGrade(grade);

/************************************************************************************/
// Program to find the sum of the multiples of 3 & 5 under 1000.
function findSum(num){
    if(num > 1000){
        console.log('Invalid Input!.Please enter number under 1000.');
    }else{
        let sum = 0;
        for(let i=0; i<=1000; i++){
            if((i%3 === 0 || i%5 === 0)){
                sum = sum + i; 
            }
        }
        console.log(`Sum of the multiples of 3 and 5 under 1000 is : ${sum}`);
    }
}

const num = prompt('Enter the Number ');
findSum(num);

/************************************************************************************/
//Program to find the factorial of all prime numbers between a given range.
function findPrime(num, range){
    let flag;
    console.log(`Prime numbers between ${num} and ${range} are: `);
    for(let i=num; i <=range; i++){
        if(i === 1 || i === 0)
            continue;

        flag = 1;

        for(j=2; j<=i/2; ++j){
            if(i % j === 0){
                flag = 0;
                break;
            }
        }
        if(flag !== undefined && flag === 1){
            console.log(i);
        }    
    }
}
const num1 = prompt('Enter the number : ');
const range = prompt('Enter the range: ');

findPrime(num1,range);