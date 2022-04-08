
//console.log('Hello from external JavaScript');
//alert("Welcome to my Website!");

//let favoriteColor = prompt('What is your favorite color?');

//alert( favoriteColor + ' is my favorite color too!');


//--- Movie Rentals ---

var moviePricePerDayDollars = parseFloat(prompt('Enter rental rate per day in dollars'));
var littleMermaidDaysRented = parseFloat(prompt('Enter how many days the Little Mermaid was rented.'));
var brotherBearDaysRented = parseFloat(prompt('Enter how many days Brother Bear was rented'));
var herculesDaysRented = parseFloat(prompt('Enter how many days Hercules was rented'));

var totalPrice =(littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * moviePricePerDayDollars;

alert('Total rental price is:' + totalPrice);

// ============================= Contractor

var googleHourlyRateDollars = parseFloat(prompt("What is your Google hourly rate?"));
var amazonHourlyRateDollars = parseFloat(prompt("What is your Amazon hourly rate?"));
var facebookHourlyRateDollars = parseFloat(prompt("What is your Facebook hourly rate?"));

var googleHours = parseFloat(prompt("How many hours this week at Google?"));
var amazonHours = parseFloat(prompt("How many hours this week at Amazon?"));
var facebookHours = parseFloat(prompt("How many hours this week at Facebook?"));

var totalPayment = googleHours * googleHourlyRateDollars +
    amazonHours * amazonHourlyRateDollars +
       facebookHours * facebookHourlyRateDollars;
alert("Total payment is $" + totalPayment.toFixed(2));

// ============================= Student Enrollment

var classIsNotFull = confirm("Confirm that the class is not full"); // boolean
var classSchedulesCheck = confirm("Confirm that the schedules check"); // boolean

var studentEnrolled = classIsNotFull && classSchedulesCheck;
alert("Student enrollment status: " + studentEnrolled);

// ============================= Product Offer

var discountBreakPoint = 2;
var numberOfItems = prompt("How many items were bought?");
var offerIsNotExpired = confirm("Confirm offer has not expired.");
var isPremiumMember = confirm("Customer is a premium member");

var productDiscountIsApplied = offerIsNotExpired && (isPremiumMember || numberOfItems >= discountBreakPoint);
alert("Product discount applied: " + productDiscountIsApplied);

// Marcus Munoz