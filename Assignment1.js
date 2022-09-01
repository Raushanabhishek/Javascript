// Program to check Leap year or not.
const prompt = require("prompt-sync")({sigint: true});
function isLeapYear(year){
    if((year % 4 === 0)&& (year % 100 !==0) || (year % 400 === 0)){
        console.log(`${year} is a leap yaer`);
    }else {
        console.log(`${year} is not a leap yaer`);
    }
}

// Enter the Year.
const year = prompt('Enter a year :');
isLeapYear(year);

/************************************************************************************/

// Program to convert temperatures from Celsius to Fahrenheit.
function calculateFahrenheit(cTemp){
    const fahrenheit = (cTemp * 1.8) + 32;
    console.log(`${cTemp} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);
}
//Enter Input
const celsius = prompt('Enter a temperatue (only numeric Value):');
calculateFahrenheit(celsius);

/************************************************************************************/

// Program to convert temperatures from Celsius to Fahrenheit.
function calculateCelcius(fTemp){
    const celcius = (fTemp - 32)/1.8;
    console.log(`${fTemp} degree fahrenheit is equal to ${celcius} degree celcius.`);
}
//Enter Input
const fahrenheit = prompt('Enter a temperatue (only numeric Value):');
calculateCelcius(fahrenheit);

/************************************************************************************/
// Program to find the factorial of a number.
 function factorial(number){
    if(number === 0){
        return 1;
    }
    return number * factorial(number-1);
 }
 const number = prompt('Enter number :');
 console.log(`Factorial of ${number} is ${factorial(number)}.`);