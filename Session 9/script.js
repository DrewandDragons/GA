let container = document.getElementById('container')
let title = document.querySelector('#title')
let text = document.getElementById('text')

let userName = 'Deacker'
let secretText = document.getElementById('secret-text')
secretText.innerText = "this is secret text"




title.style.color = "green"
container.style.backgroundColor = "yellow"
text.style.fontSize = "100px"


const logIn = () => {
    alert('you are logged in')
}

function addToCart () {
    alert('Put it back sucker!')
}

let logOutButon = documnet.getElementById('logout-button')
logOutButon.addEventListener('click', ()=>{secretText.innerText = "logged out"})



let loginButton = document.getElementById('login-button')
loginButton.addEventListener('click', logIn)

let addButton = document.querySelector('#add-button')
addButton.addEventListener('click', addToCart)






























































// const students = [
// {paid: "yes",
// first: "Tom",
//  last: "Brady",
// ssn: "555-55-5555",
// dob: "07/10/1989",
// },
// {paid: "no",
// first: 
// last: 
// title: "Drew Brees",
// ssn: "555-55-5555",
// dob: "07/10/1958",
// },
// {paid: "yes",
// first: "Peyton",
// last: "Manning",
// ssn: "555-55-5555",
// dob: "07/10/1963",
// },
// {paid: "yes",
// first: "Russel",
// last: "Wilson",
// ssn: "555-55-5555",
// dob: "07/10/1952",
// },
// let student5 = {paid: "no",
//                 title: "Barbra Strisand",
//                 ssn: "555-55-5555",
//                 dob: "07/10/1985",
// },
// let student6 = {paid: "yes",
//                 title: "Katy Perry",
//                 ssn: "555-55-5555",
//                 dob: "07/10/1956",
// },
// let student7 = {paid: "no",
//                 title: "Bo Burnham",
//                 ssn: "555-55-5555",
//                 dob: "07/10/1990",
// },
// {paid: "yes",
//                 title: "Morgan Freeman",
//                 ssn: "555-55-5555",
//                 dob: "07/10/1958",
// },
// {paid: "no",
// first: "Jim",
// last: "Jeffries",
// ssn: "555-55-5555",
// dob: "07/10/1926",
// },
// ]

// for (let i=0; i <students.length; i++) {
//     if (students[i].paid == true)
//     console.log(`${students[i].first} ${students[i].last}`)
// }