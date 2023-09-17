//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

function checkIfGreaterThan25(num){
    return num >= 25;
}

function checkIfDivisibleBy5(num)
{
    if(num % 5 === 0)
    {
        return true;
    }
    return false;
}

const greaterThanOrEqual25 = numbers.filter(checkIfGreaterThan25);
const divisibleBy5 = numbers.filter(checkIfDivisibleBy5);

 console.log(greaterThanOrEqual25);
 console.log(divisibleBy5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/


function eachNumbersSquared(num)
{
    return num **2;
}
function eachNumberMultipliedByTwo(num)
{
    return num * 2;
}

const squaredNumbers = numbers.map(eachNumbersSquared);
const multipliedByTwo = numbers.map(eachNumberMultipliedByTwo);

console.log(squaredNumbers);
console.log(multipliedByTwo);


/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

function filterNumbersGreaterThanOrEqualTo20(num)
{
    return num < 20;
}

function squareEachNumber(num)
{
    return num **2;
}
function multiplyEachNUmberBy3(num)
{
    return num * 3;
}

function filterNumbersDivisibleBy5(num)
{
    if(num % 5 === 0)
    {
        return false;
    }
    return true;
}


const q5 = numbers.filter(filterNumbersGreaterThanOrEqualTo20).map(squareEachNumber);
const q6 = numbers.filter(filterNumbersDivisibleBy5).map(multiplyEachNUmberBy3);

console.log(q5);
console.log(q6);
