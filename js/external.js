console.log('Hello from external JavaScript')

//alert("Welcome to my Website!")

//let userFavoriteColor = prompt("What is your favorite color")
//console.log(userFavoriteColor)
//alert('Great, ' + userFavoriteColor + ' is my favorite color too!')

// Movie Rental
//You have rented some movies for your kids: The little mermaid (for 3 days),
//Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
//If price for a movie per day is $3, how much will you have to pay?



let dailyRentalRateDollars = 3

let littleMermaidDaysRented = prompt('How many days did you rent The Little Mermaid?')

let brotherBearDaysRented = prompt('How many days did you rent Brother Bear?')

let herculesDaysRented = prompt('How many days did you rent Hercules?')

// multiplied by 1 to convert string to a number
let totalRentalCost = ((1 * littleMermaidDaysRented) + (1 * brotherBearDaysRented) + (1 * herculesDaysRented)) * dailyRentalRateDollars;

alert('Total cost is $' + totalRentalCost)
// Contractor
//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
//they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
   // How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.



let googleHourlyRateDollars = 400
let amazonHourlyRateDollars = 380
let facebookHourlyRateDollars = 350

let googleHours = prompt('How many hours did you work at Google?')
let amazonHours = prompt('How many hours did you work at Amazon?')
let facebookHours = prompt('How many hours did you work at Facebook?')



totalPayment = (1 * googleHours) * googleHourlyRateDollars;
totalPayment += (1 * amazonHours) * amazonHourlyRateDollars;
totalPayment += (1* facebookHours) * facebookHourlyRateDollars;

alert(totalPayment)
// Student Enrollment
//A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.



    let classIsNotFull = confirm('Is the class full')
    let classScheduleDoesNotConflict = confirm('Does the class conflict with your current schedule?')

    let studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;




// Product Offer
//A product offer can be applied only if people buy more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
  //  Use the following code to follow the instructions below:



let numberOfItems = confirm('Are you buying more than 2 items?') // number
let offerIsValid = true // boolean
let isPremiumMember = confirm('Are you a premium member?')

let productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

alert(productDiscountApplied)