(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // const person = {}
    // person.firstName = Timothy
    // person.lastName = Singletary

    const person = {
        firstName: 'Timothy',
        lastName: 'Singletary',
        sayHello() {
            return `hello from ${this.firstName} ${this.lastName}!`
        }
    }

    console.log(person.sayHello())
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(
        function (shopper, index, shoppers) {
            if (shopper.amount < 200) {
                console.log( `${shopper.name} your subtotal is ${shopper.amount} \n you will not receive a discount \n your total is $${shopper.amount}`)
            }else {
                console.log( `${shopper.name} your subtotal is ${shopper.amount} \n your discount is 12% \n your total is ${shopper.amount * .88}`)
            }
        }
    )





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {title: 'butter', author: {firstName: 'timothy', lastName: 'singletary'}},
        {title: 'hunger games', author: {firstName: 'isabella', lastName: 'hernandez'}},
        {title: 'game of thrones', author: {firstName: 'talee', lastName: 'hill'}},
        {title: 'vampire diaries', author: {firstName: 'tiff', lastName: 'martinez'}},
        {title: 'I will teach you to be rich', author: {firstName: 'perry', lastName: 'buds'}}
    ]


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

   books.forEach((books, index) => {
        console.log(`Book Number ${index + 1}`);
        console.log(`Title ${books.title}`);
        console.log(`Author: ${books.author.firstName} ${books.author.lastName}`)
       if (index < books.length - 1) {
           console.log(`---`)
       }
})




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
const timothy = {
    muscles: 'Big',
    hair: 'curly',
    smile: 'contagious',
    height: `obviously like 6'5`
}

console.log(timothy.muscles)
console.log(timothy.hair)
console.log(timothy.smile)
console.log(timothy.height)