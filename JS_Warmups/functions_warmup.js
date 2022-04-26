//Write a javascript function that takes in a string, and returns the string in alphabetical order.
//EX: 'webmaster' -> 'abeemrstw'
// 'developer' -> deeeloprv

function alpha(str) {
    //let strArray = str.split('');
    //let alphabeticalOrder = strArray.sort();
    //let result = alphabeticalOrder.join(",")
    return str.split('').sort().join('');
}

console.log(alpha("fullstack"));
console.log(alpha("codeup"));
console.log(alpha("warmups"));
