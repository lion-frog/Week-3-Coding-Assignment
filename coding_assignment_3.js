//1) create an array called ages containing the following numbers
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a) subtract the value of the first element in the array from the value in the last element of the array 
let ageValue = ages[ages.length -1] - ages[0];

//1b) used the string: legnth to calculate the value 
console.log (ageValue);

//1c) Add a new age to your array and repeat the step above 
ages.push (8);
ageValue = ages[ages.length -1] - ages[0];
console.log (ageValue);

//1d) Use a loop to iterate through the array and calculate the average age
let sum = 3 + 9 + 23 + 64 + 2 + 8 + 28 + 93;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
//the ageAverage is equal to the Sum of the numbers, divided by the legnth of the string
ageAverage = sum / ages.length; 
console.log(ageAverage);

//2)Create an array called names that contains the following values...
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a) Use a loop to iterate through the array and calculate the average number of letters per name
let nameLength = 0;
for (let i = 0; i < names.length; i++) {
nameLength += names[i].length;
}
let lettersInName = nameLength / names.length;
console.log(nameLength);

//2b) Use a loop to iterate through the array again and concatenate all the names together, separated by spaces
let totalNames = '';
for (let i = 0; i < names.length; i++) {
    totalNames += names [i] + '';
}
console.log(totalNames);

//3) Access the last element of any array
let array = [1, 2, 3, 4, 5, 6];
let lastElement = array.slice (-1);
console.log(lastElement);

//4) Access the first element of any array?
let arrays = [2, 4, 6, 8];
let firstElement = arrays [0];
console.log(firstElement);

//5) Create a new array nameLengths. loop to iterate over the previously created names array. Add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

//6)  Write a loop to iterate over the nameLengths array. Calculate the sum of all the elements in the array
let totalNameLength = 0;
for (let i = 0; i < nameLengths.length; i++){
    totalNameLength += nameLengths[i];
}
console.log(totalNameLength);

//7) Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
function repetitiveWord (word, n) {
let repetitiveWord = '';
for (let i = 0; i < n; i++) {
    repetitiveWord += word; 
}
return repetitiveWord;
}
console.log(repetitiveWord ("Smile", 4));

//8) Write a function that takes two parameters, firstName and lastName, and returns a full name. 
let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
    // Template literals to add spacing between the names
console.log(fullName('Diego', 'Luevano'));

//9) Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function numberTotal (array) {
    let sum = 0;
    for   (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum > 100;
}
console.log(numberTotal([22, 43, 12, 24]));

//10) Write a function that takes an array of numbers and returns the average of all the elements in the array.
let numberAverage = [7, 11, 19, 23, 14, 22];
let sum41 = 0;
for (let i = 0; i < numberAverage.length; i++){
    sum41 += numberAverage[i];
}
average = sum41 / numberAverage.length;
console.log(average); 

  //11) Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
  function arrayAverage(array1, array2) {
    let numbers1 = 0;
    let numbers2 = 0;

    for (let i = 0; i < array1.length; i++){
        numbers1 += array1[i];
    }
    let average1 = numbers1 / array1.length;

    for (let i = 0; i < array2.length; i++){
        numbers2 += array2[i];
    }
    let average2 = numbers2 / array2.length;

    return average1 > average2;
}

let numbers1 = [5, 10, 7];
let numbers2 = [6, 2, 3];

console.log(arrayAverage(numbers1, numbers2));

  //12) Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
  let isHotOutside = true;
  let moneyInPocket = 12.50;

function willBuyDrink (isHotOutside, moneyInPocket) {
if (isHotOutside == true && moneyInPocket > 10.50) {
        return true; 
    } else {
    return false;
    }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13) Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
function audioLevels (volume, base) {
const idealVolume = volume >= base;
return idealVolume;
}
console.log(audioLevels (11, 8));
// This function has two arguments,  volume & base, and calculates to ensure that the base does not exceed tbe volume. The idealVolume is then returned, true or false based on the input.