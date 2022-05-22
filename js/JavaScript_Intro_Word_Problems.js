// You have rented some movies for your kids: The little mermaid (for 3 days),
// //     Brother Bear (for 5 days, they love it),
// //     and Hercules (1 day, you don't know yet if they're going to like it).
// //     If price for a movie per day is $3, how much will you have to pay?
//
// var totalPay =0;
// var littleMermaid =3;
// var brotherBear =5;
// var hercules =1;
// totalPay = (littleMermaid + brotherBear + hercules) *3;
//
// console.log(totalPay)
//
// //     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// //     they pay you a different rate per hour.
// //     Google pays $400,
// //     Amazon $380,
// //     and Facebook $350.
// //     How much will you receive in payment for this week?
// //     You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
//
// var totalPay =0;
// var googleRateDollars =400;
// var amazonRateDollars =380;
// var facebookRateDollars =350;
// var hoursWorkedGoogle = 6;
// var hoursWorkedAmazon = 4;
// var hoursWorkedFacebook = 10;
//
// totalPay = (googleRateDollars * hoursWorkedGoogle) + (amazonRateDollars * hoursWorkedAmazon) + (facebookRateDollars * hoursWorkedFacebook);
//
// console.log(totalPay)
//
// // A student can be enrolled in a class only if the class is not full and the class
// // schedule does not conflict with her current schedule.
// //  var clasNotFull = true;
// // var classConflict = true;
// // var enrolled = classNotFull && classConflict;
//
// var classAt8am = false;
// var classSize = 100;
// var currentClassSize = 75;
// var canRegister = (currentClassSize < classSize) && !classAt8am;
//
// console.log(canRegister);
//
// //     A product offer can be applied only if a person buys more than 2 items,
// //     and the offer has not expired. Premium members do not need to buy a specific
// //     amount of products.
//
// var hasPremium = true;
// var cartSize = 8;
// var offerValid = true;
//
// var canDiscount = offerValid && (cartSize > 2 || hasPremium);
//
// var premiumMember = true;
// var offerValid = true;
// var moreThanTwo => && offerValid == true;
//
// //     Use the following code to follow the instructions below:
//
//
// //     var username = 'codeup';
// // var password = 'notastrongpassword';
//
// // Create a variable that holds a boolean value for each of the following conditions:
//
// //     the password must be at least 5 characters
// var atLeastFivePassword = password.length >= 5;
// var password.length >= 5;
//
// // the password must not include the username
// var usernameNotInPassword = password.indexOf(username) === -1;
// var usernameNotInPassword = ! password.includes(username;
//
// // the username must be no more than 20 characters
// var userNameNotMoreThan20 = username.length <= 20;
// var username.length <= 20;
//
// // neither the username or password can start or end with whitespace
// var whitespace = username.trim() && password.trim();
// var noWhitespace = username.trim() === username && password.trim() === password;
// username.trim();
// password.trim();
//
// console.log(password);
// console.log(username);
// console.log(password.length);
//
// var username = 'codeup';
// var password = 'notastrongpassword';
//
// // the password must be at least 5 characters
// var passwordMinLength = 5;
// var passwordHasMinLength = password.length >= passwordMinLength;
//
// // the password must not include the username
// var noUsernameInPassword = password.indexOf(username) === -1;
//
// // the username must be no more than 20 characters
// var usernameMaxLength = 20;
// var usernameUnderMaxLength = username.length <= usernameMaxLength;
//
// // neither the username or password can start or end with whitespace
// var passwordIsTrim = password.trim() === password;
// var usernameIsTrim = username.trim() === username;
// var passwordAndUsernameIsTrim = passwordIsTrim && usernameIsTrim;
//
// var passwordAndUsernameIsValid = passwordHasMinLength && noUsernameInPassword && usernameUnderMaxLength && passwordAndUsernameIsTrim;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
