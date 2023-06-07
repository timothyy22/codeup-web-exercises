// let userNumber = prompt('Pick a number 1 through 50')
//
// for (let i = userNumber; i < 1 || i > 50; i ) {
//     userNumber;
//     if (userNumber < 1 || userNumber > 50) {
//         continue
//     }else {
//         console.log(userNumber)
//     }
// }

// for (let i = prompt('Pick a number 1 through 50');i < 1 || i > 50; i) {
//     i = prompt('Pick a number 1 through 50')
//     if (i > 1 || i < 50) {
//         break
//     } console.log(i)
// }

// function numberOneThroughFifty() {
//    return parseInt(prompt('Pick an odd number 1 through 50'))
// }
//
// function promptUntilOdd() {
//     do {
//         const userNumber= numberOneThroughFifty();
//         if(userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0){
//             console.log( 'number to skip is: ${userNumber}`)
//             for (let i = 1; 1<= 50; i++) {
//                 if(i === userNumber) {
//                     console.log(`yikes skipping ${i}`);
//                     continue;
//                 }
//                 if (1 % 2) {
//                     console.log(`here's an odd number: ${i}`)
//                 }
//             }
//             break;
//         }
//         console.log(`invalid input`);
//     }while (true)
// }

let userNumber
do {
    userNumber = prompt("Please enter an odd number between 1-50?");
    if(userNumber <= 0 || userNumber >= 51 || userNumber % 2 === 0) {
        alert("Number entered is outside the acceptable range or an even number. Please try again.");
    }
    else
        break;
} while (userNumber <= 0 || userNumber >= 51 || userNumber % 2 === 0);
for (let i = 1; i <= 50; i += 2) {
    if(i == userNumber) {
        console.log(`Yikes! Skipping over: ${userNumber}`);
        continue;
    }
    console.log(`There is an odd number: ${i}.`);
}