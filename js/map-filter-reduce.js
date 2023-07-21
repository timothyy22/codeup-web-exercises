const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLang = users.filter(user => user.languages.length >= 3)
console.log(threeLang)

const emailArr = users.map( user => user.email)
console.log(emailArr)

const totalYears = users.reduce((accumulator, user, index) => {
    accumulator += parseFloat(user.yearsOfExperience)
    if (users.length - 1 === index) {
        accumulator = accumulator / users.length
    }
    return accumulator
}, 0)
console.log(totalYears)

const longestEmail = users.reduce((accumulator, user, index) => {
    const emailLength = user.email.length
    const accLength = accumulator.length
    if ( emailLength > accLength) {
        accumulator = user.email
    }
    return accumulator
}, '')
console.log(longestEmail)

const usersString = users.reduce((accumulator, user, index) => {
    if (index === users.length - 1) {
        accumulator += `and ${user.name}.`
    }else {
        accumulator += `${user.name}, `
    }
    return accumulator
}, 'Your instructors are: ')
console.log(usersString)