// const country = ["Poland", "Austria", "Germany", "America", "Brazil"];

// country.push("Coasta Rica")
// country.reverse()
// country.pop()
// country.shift()
// country[2] = "Coasta Rica"

// const average = (85 + 90 + 88 + 83 + 75 + 91)/6)

// if (average > 85) {
//     console.log("honor roll!")
// } else { console.log("No honpor roll for you!")}


// console.log(average)

// let a = 300
// let b = 400


// let triangle = Math.sqrt{,(a*a) + (b*b)}

// console.log(triangle)

let loginButton = document.getElementById('login-button')
let userName = document.querySelector("#username").value

const login = (event) => {  

    event.preventDefault()
    let userName = document.querySelector("#username").value
    let passWord = document.getElementById("password").value
    let text = document.getElementById('text')
    text.innerText=`welcome ${userName}`

    // alert(`You are logged in ${userName}`) 
if (userName.length = 0 || pass) {

}

}
loginButton.addEventListener('click', login)

