// Program to check Leap year or not.
const prompt = require("prompt-sync")({sigint: true});

//1. Perform the following operations to provide the implementation for a Rectangle class. The operations are:
class Rectangle{
    length;
    width;

    constructor(length, width){
        this.length = length;
        this.width = width;
    }
    area(){
        let areaR = this.length * this.width;
        console.log(`The Area of ${this.length} & ${this.width} is ${areaR}.`);
    }
}

class Square extends Rectangle {
    constructor(length){
        super();
        this.length = length;
        this.width = length;
    }
}

const side = prompt('Enter the Side :: ');
const squreObj = new Square(side);
squreObj.area();

/*****************************************************************************************/
//2. Write a javascript function find_largest to return the nth largest number in an array-
const arr = [3,45,6,7,23,5,7,8];
function find_largest(nth){
    arr.sort((a,b) => a < b ? 1 : a > b ? -1 : 0);

    console.log(`${nth} largest no is ${arr[nth-1]}`);
}
const n = prompt('Enter the nth number :: ');
find_largest(n);

/*****************************************************************************************/
//3. Write a JavaScript program which accept a number as input in the function parameter and insert dashes (-) between each two even numbers.

const dashInsertedArray = (num)=> {
    let str = num.toString();
    let result = [str[0]];
    for(let i=1; i< str.length; i++){
        if(str[i-1] % 2 == 0 && str[i] % 2 == 0 ){
            result.push('-' , str[i]);
        }else{
            result.push(str[i]);
        }
    }
    return result;
}
const num = prompt('Enter the number ');
console.log(`The Result is ${dashInsertedArray(num).join('')}`);
