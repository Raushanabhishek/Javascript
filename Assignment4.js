// for taking input from user.
const prompt = require("prompt-sync")({sigint: true});
/*****************************************************************************/
//Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.
const matchsticks = (num) => {
    if(num === 0){
        return 0;
    }else if(num < 0 || typeof num !== "number"){
        return 'Please enter non negative Integer only.';
    }else{
        let noOfMatch = 0;
        noOfMatch = (num *5)+1;
        return noOfMatch;
    }
}

const num = prompt('Enter the Step : ');
console.log(matchsticks(parseInt(num)));