// function sayHello(){
//     console.log('whats up gang')
// }
//
//     sayHello();
//
//
// function saybye(userUsername){
//     console.log('adios ' + userUsername)
// }
//
// saybye('timothy')

// function isOdd(number){
//    return number % 2 === 1
// }
// console.log(isOdd(3))


// function isEven(number){
//     return number % 2 === 0
// }
// console.log(isEven(220023925))

// function identity(){
//     return identity()
// }
// console.log(identity(timothy))

// function isFive(number){
//     if (number === 5)
//         console.log(true)
// }else{
//     console.log()
// }

// let x = 0
//
// while (x < 10){
//     console.log('Timothy')
//     x++
// }

// let userWantsTime = confirm('do you want to see the time and date?')
//
// do {
//     confirm('do you want to see the time and date?')
//     alert(Date().toLocaleString())
//
// } while (userWantsTime === true);
//
// console.log(userWantsTime)

// let willContinue;
// do {
//     alert(Date().toLocaleString())
//     let willContinue = confirm('do you want to see the time and date?')
//     if (!willContinue)
//         break;
// }while (true)


for (let i = 2; i <= 100; i += 2){
    console.log(i)
}

for (let i = 20; i >= 1; i--){
    console.log(i)
}


function isSumNegativeOrPositive(x, y, z) {
    let sumOfThree = x + y + z
    if (sumOfThree > 0) {
        console.log(`The sign is +`)
    } else {
        console.log(`The sign is -`)
    }
}
isSumNegativeOrPositive(2, 5, 3,)