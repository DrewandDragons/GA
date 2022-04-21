// let partySize = document.querySelector

const classApi = `https://www.dnd5eapi.co/api/classes/`
async function get5E() {
    const response = await fetch(classApi);
    const data = await response.json();
    console.log(data)
}
get5E();

// on click of the button, a "card" is created on the canvas, their sheet is rolled, and presented in their "card" roll the characters - collect name, make rules that wont let them do more than 1 of each class,  rand so we can have them all rolled as you as we begin in the MCDM 4d6dl x 6 filling starting with STR 
// clikc listener, event target value, would equal classes, give all of the items in the html a value of the class name

let classes = 'paladin'

const barbApi = `https://www.dnd5eapi.co/api/classes/${classes}/`
async function getBarb() {
    
    const response = await fetch(barbApi);
    const barbData = await response.json();
    console.log(barbData)
}
getBarb();

//Dice Rolling Functions 

// (x)d(y) 2d6, 1d20, etc. 
//make a function that rolls one die | 1d6 by generating a random number between 1 and y
function d(y) {
    
   return Math.floor(Math.random() * y) +1;
}
//make a function that rolls mutiple dice | 2d6 | By  calling d(y) X times and putting the ruslts in an array and returning the results

function XdY(x,y) {

    let results = [];

    do {
        results.push(d(y));
    } while(results.length < x)

    return results
}

// List of objects to be used in dicePool { Y: X}
const poolTest = { 6: 2, 8: 2, 10: 7, 20: 1}; // [6,2]

const newCharacter = { 6: 4}*6;

const newCharStr = { 6: 4};
const newCharDex = { 6: 4};
const newCharCon = { 6: 4};
const newCharInt = { 6: 4};
const newCharWis = { 6: 4};
const newCharCha = { 6: 4};

const barbHit = { 12: 1};
const 

//make a function that allows us to roll a pool of dice | 2d6 + 5d10 |

function dicePool(obj){
    //make results objects rather than array?
    let results = {};

    // call XdY for each entry in the object paramater pass through

    for( let [y,x] of Object.entries(obj)) {

        results[y] = XdY(x,y);
    };
    return results;
        // return results or object
}


//I wnat to code that when I hover over a conatier, it reveals its content.
 let monk = document.querySelector("#monk")



// function characterCreation(obj)


//make an event listner that will have the contents of a specific clases cards contents dispalay, so that it goes to the top and does not push down the bottome of the frame
// would like another animation on hover as well - increased z index, so that it is even higher up, and a darker foreground iamges apeas behind it?


// // Party Number buttons
// const memberOne = document.querySelector("#ch-one")
// const memberTwo = document.querySelector("#ch-two")
// const memberThree = document.querySelector("#ch-three")
// const memberFour = document.querySelector("#ch-four")
// const memberFive = document.querySelector("#ch-five")
// // 5e class buttons
// const barbarian = document.querySelector("#barbarian-button")
// const bard = document.querySelector("#bard-button")
// const cleric = document.querySelector("#cleric-button")
// const druid = document.querySelector("#druid-button")
// const fighter = document.querySelector("#fighter-button")
// const monk = document.querySelector("#monk-button")
// const paladin = document.querySelector("#paladin-button")
// const ranger = document.querySelector("#ranger-button")
// const rogue = document.querySelector("#rogue-button")
// const sorcerer = document.querySelector("#sorcerer-button")
// const warlock = document.querySelector("#warlock-button")
// const wizard = document.querySelector("#wizard-button")


// barbarian.addEventListener('click', rollChar){
//     function rollChar() {

//     }
// }




// CLASS CODE

// const submitButton = document.querySelector('#fetch')
// const breedInput = document.querySelector('input')
// const imageDiv = document.querySelector('div')
// const getBreeds = async() => {

//     const dogBreeds = await axios.get('https://dog.ceo/api/breeds/list/all')

//     console.log(dogBreeds)
// }

// getBreeds()


// submitButton.addEventListener('click', async () => {
//     let breed = breedInput.value
//     let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random)`)
// console.log(response.data.message)
// let dogPic = response.data.message
// imageDiv.innerHTML = `<img src=${dogPic}>`

// })
