// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

let bodyElement = document.querySelector('body')

function createHeader(Kata) {
    let createHeader = document.createElement('h2')
    createHeader.append(Kata)
    bodyElement.append(createHeader)
}
//================================
//Kata 0. Users with Green Eyes
// Filter the users array to show only the users with an eyeColor of green.

let usersWithGreenEyes = users.filter(user => user.eyeColor === "green")
printKata(0,usersWithGreenEyes)
console.log(usersWithGreenEyes)

//Kata 1. Display the numbers from 1 to 20.


// Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.

let usersWithisActivePropertyOfTrue = users.filter(user => user.isActive === true)
printKata(1,usersWithisActivePropertyOfTrue)
console.log(usersWithisActivePropertyOfTrue)

'Kata 2'

// Use the .map() method
// Map over the users array to show only the email addresses of the users.

let userEmails = users.map(user => user.email)
printKata(2,userEmails)
console.log(userEmails)

'Kata 3'

// Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION"

let companyName = users.some(user => user.company === "OVATION")
printKata(3,companyName)
console.log(companyName)

'Kata 4'

// Use the .find() method
// Find the first user in the array over the age of 38.

let userOverAge38 = users.find(user => user.age > 38)
printKata(4,userOverAge38)
console.log(userOverAge38)

'Kata 5'

// Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.

let activeUserOver38 = users.filter(user => user.isActive === true).find(user => user.age > 38)
printKata(5,activeUserOver38)
console.log(activeUserOver38)

'Kata 6'

// Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.

let userZenco = users.filter(user => user.company === "ZENCO").map(user => user.balance)
printKata(6,userZenco)
console.log(userZenco)

'Kata 7'

// Use the .filter() method with .includes() and the .map() method
// Show the age of every user with the "fugiat" tag.

let userAgeFugiat = users.filter(user => user.tags.includes("fugiat")).map(user => user.age)
printKata(7,userAgeFugiat)
console.log(userAgeFugiat)
