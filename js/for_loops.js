// //1. FOR LOOP:
// // Create a function named showMultiplicationTable
// // that accepts a number and console.logs the multiplication table for that number
// // (just multiply by the numbers 1 through 10)
//
//
//     function showMultiplicationTable(number){
//         for(var i = 1;i <= 10;i++){
//             console.log(number + " x " + i + " = " + (number * i));
//         }
//     }
//
//     //ex.
//     showMultiplicationTable(8);
//     showMultiplicationTable(1);
//
// //2. Use a for loop and the code from the previous lessons to generate 10 random numbers
// //between 20 and 200 and output to the console whether each number is odd or even.
//
//     for(var i = 0; i < 10;i++) {
//         var randomNum = Math.floor((Math.random() * 180) + 20);
//         randomNum % 2 === 0 ? console.log(randomNum + " is even") : console.log(randomNum + " is odd")
//     }
//
//
// //3. Create a for loop that uses console.log to create the output shown below.
// // 1
// // 22
// // 333
// // 4444
// // 55555
// // 666666
// // 7777777
// // 88888888
// // 999999999
//
// for(var i = 1;i <= 9;i++) {
//     var printedNum = "";
//     for (var j = 0; j < i; j++) {
//         printedNum += i;
//     }
//     console.log(printedNum)
// }
//
// //4. Create a for loop that uses console.log to create the output shown below.
// // 100
// // 95
// // 90
// // 85
// // 80
// // 75
// // 70
// // 65
// // 60
// // 55
// // 50
// // 45
// // 40
// // 35
// // 30
// // 25
// // 20
// // 15
// // 10
// // 5
//
// var startingNum = 100;
// for(var i=0; i < 100; i += 5){
//     console.log(startingNum - i);
// }