//Define a function named `isAString` that takes in a value and returns true if the input is a string,
// or false if the input is not a string.

function isAString(input){
    return typeof input === 'string';
}

//Define a function named `isNotANumber` that takes in a value and returns true if the input is not a number, or false if the input is a number.
// This function should consider that numeric strings are not numbers.
function isNotANumber(input) {
    if (typeof input !== 'number') {
        return true;
    } else {
        return false;
    }
}


//Define a function named `canBeANumber` that takes in a value and returns true if the input is a number or a numeric string,
// or false if the input is not a string or if it cannot be parsed to a number.
function canBeANumber(input){
    return !isNaN(parseFloat(input));
}

//Define a function named `multiplyByTen` that takes in a value, multiplies it by ten, and returns the result.
// If the input is not a number and is not a numeric string, it returns false.

function multiplyByTen(input){
    if (!canBeANumber(input)){
        return false;
    } else {
        return input * 10;
    }
}

//Write a function named `randomNumber` that takes in an input and returns a random number
// between zero and the value of the input.

function randomNumber(input){
    return (math.random() * input)
}

//Write a function that takes in a string and returns the length of the string.
// If the input is not a string, it should be converted to a string and still return the length of the string.

function stringLength(string){
    return string.toString().length;
}

//Write a function that takes in two strings. The second string should be a single character.
// The function should return the index of the second input in the first input.
// If the second input is more than one character or is not in the first input at all, it should return false.

function indexOfCharacter(input1, input2){
    if (input2.length > 1 || input1.indexOf(input2) === -1){
        return false;
    }

    return input1.indexOf(input2);

}

// TODO: Write an arrow function named "highFive" which accepts a string and alerts the user's input, asking for a high five.
// Example: highFive("Go") returns "Go, high five!"

const highFive = string => alert(`${string}, high five`)
highFive("Go");