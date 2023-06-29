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


function sumIsEqual (x, y ,z) {
    if (typeof x == 'number') {
        if (x + y === z) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}




console.log(sumIsEqual(1, 2, 3)) // returns true
    console.log(sumIsEqual(2, 2, 4)) // returns true
    console.log(sumIsEqual(10, 2, 12)) // returns true
    console.log(sumIsEqual(10, false, 12)) // returns false
    console.log(sumIsEqual('10', '2', 12) )// returns false
    console.log(sumIsEqual('fred', 'bob,', 'hello')) // returns false




    //================================= WARM UP

//Write a function, returnUserObject, that takes in three String arguments: a username, password, and email. The function should return a user object with username, password and email properties.

function returnUserObject(username, password, email) {
    return {
            username: username,
            password: password,
            email: email,
        }

}


console.log(returnUserObject('jreich', 'password123', 'jreich@email.com')) // returns...

// {
//     username: 'jreich',
//         password: 'password123',
//     email: 'jreich@email.com'
// }
//
// Assume all inputs are non-empty strings. The order of the properties does not matter.


function returnProduct (nums) {
    let product = 1;
    for (let num of nums) {
        product *= num;
    }
    return product
}
// let product = 1

// // nums.forEach((num) => {
// //     product *= num;
// // })
//
// for (let i = 0; i < nums.length; i+= 1) {
//     product *= nums[i]
//     return
// }
//


//
//
// function returnProduct (num) {
//     let i = 0
//     while (i > 3, i++)
// }
console.log(returnProduct([3,3,3]))


const salesData = [
    {
        month: 'January',
        totalItemsSold: 0
    },
    {
        month: 'February',
        totalItemsSold: 5
    },
    {
        month: 'March',
        totalItemsSold: 2
    },
    {
        month: 'April',
        totalItemsSold: 10
    },
    {
        month: 'May',
        totalItemsSold: 30
    }
];


// function returnTotalSales (salesData) {
//     let totalSales = 0;
//     for (let num of salesData) {
//         totalSales = totalSales + num.totalItemsSold;
//     }
//     return totalSales
// }

let sum = 0
function returnTotalSales (salesData) {
    let sum = 0
    for (let i = 0; i < salesData.length; i += 1) {
        sum += salesData[i].totalItemsSold
    }
    return sum;
}

console.log(returnTotalSales(salesData));



function returnAvgSales (salesData) {
    let sum = 0
    for (let i = 0; i < salesData.length; i +=1) {
        sum += salesData[i].totalItemsSold / salesData.length
    }
    return sum;
}

console.log(returnAvgSales(salesData));



// ================================= WARM UP
//
// Create a function, returnAdmins, that takes in an array of user objects
// and returns an array of only the admin user objects. Assume the array
// has at least one user object and all elements have an isAdmin property.
//
//     Example:


const users = [

    {
        username: 'fred123',
        password: 'letmein',
        email: 'fred123@email.com',
        isAdmin: true
    },
    {
        username: 'cindy123',
        password: 'hello123',
        email: 'cindy123@email.com',
        isAdmin: false
    },
    {
        username: 'kathy123',
        password: 'letmein',
        email: 'kathy123@email.com',
        isAdmin: true
    },
    {
        username: 'kyle123',
        password: 'letmein',
        email: 'kyle123@email.com',
        isAdmin: false
    }
]

function returnAdmins(users) {
    const admin = []
    for (let i = 0; i < users.length; i +=1) {
        if (users[i].isAdmin === true) {
            admin.push(users[i])
        }
    }
    return admin
}


console.log(returnAdmins(users));


/*


[

    {
        username: 'fred123',
        password: 'letmein',
        email: 'fred123@email.com',
        isAdmin: true
    },
    {
        username: 'kathy123',
        password: 'letmein',
        email: 'kathy123@email.com',
        isAdmin: true
    }
]

*/