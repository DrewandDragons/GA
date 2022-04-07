let declare = document.getElementById("declare")
let mike = document.getElementById("mike")
let twss = document.getElementById("twss")
let snip = document.getElementById("snip")

let second = documnet.getElementById("second")


const makeRed = () => {declare.style.color = "red"}
const makeBlue = () => {declare.style.color = "blue"}

twss.addEventListener('click', makeRed)
snip.addEventListener('click', makeBlue)


const makeTextDisappear = () => second.classList.add("hidden")
const makeTextAppear = () => second.classList.remove("hidden")


disappear.addEventListener('click', makeTextDisappear)
appear.addEventListener('click', makeTextAppear)

//This is he code that Kevin did to make the header change from blue to red upon clicking one of 2 buttons. 
// let words = document.querySelector("#headline")
// let clickHere = document.querySelector("#button1")
// let noClick = document.querySelector("#button2")

// const redText = () => {
//     words.style.color = "red"
// }

// const blueText = () => {
//     words.style.color = "blue"
// }

// clickHere.addEventListener('click', redText)

// noClick.addEventListener('click', blueText)