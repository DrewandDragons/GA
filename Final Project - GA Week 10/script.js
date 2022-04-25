
async function getClasses(url) {
    
    const response = await fetch(url);
    const classesData = await response.json();
    return classesData

}

document.querySelectorAll('.classes').forEach(item => {
    item.addEventListener('mouseover', event => {
        
        // let filler = document.getElementById('filler') this was for the left side far of the canvas dispaly
        let clazz = item.dataset.characterClass
        const classesApi = `https://www.dnd5eapi.co/api/classes/${clazz}/`
        // let classRibbon = document.querySelector(`[data-character-class="${clazz}"] .classes`)
        // let ribbon = document.querySelector(`[data-character-class="${clazz}"] .starting-stats`)

        
    
        getClasses(classesApi).then( results => {
            // // Objects
            const hitDie = results.hit_die
            const proficiencies = results.proficiencies.map(prof => prof.name).join(',  ')
            const savingThrows = results.saving_throws.map(sav => sav.name).join(', ')
            // //above goes to console

            // hitEle is the hit die number, we add a "d" before the numeric value it comes back with from the API
            const hitEle = document.querySelector(`[data-character-class="${clazz}"] [data-pcHitDie]`)
            hitEle.textContent = 'd' + results.hit_die;

            // saveEle is the saving throw the class is proficient in, we have to parse it out of the array to display it in the h3 element 
            const saveEle = document.querySelector(`[data-character-class="${clazz}"] [data-pcSaves]`)
            const saveList = results.saving_throws
              .map(save => save.name)
              .join(', ');
            saveEle.textContent = saveList;

        
            //shows us the proficiencies 
            // const profEle = document.querySelector('[data-pcProfs]')
            const profEle = document.querySelector(`[data-character-class="${clazz}"] [data-pcProfs]`)
            profEle.textContent = proficiencies;
            
            // above goes to h3 elements
            
            // Results / Calls 
            console.log(results)
            console.log(hitDie)
            console.log(proficiencies)
            console.log(savingThrows)
            console.log(clazz)
            // let data-character-hit-die = results.hit_die;
        })

        // PC Card stuff here
    })

    item.addEventListener('mouseleave', event => {
        let clazz = item.dataset.characterClass
        const classesApi = `https://www.dnd5eapi.co/api/classes/${clazz}/`
        let classRibbon =  document.querySelector(`[data-character-class="${clazz}"]`)
        let ribbon = document.querySelector(`[data-character-class="${clazz}"] .starting-stats`)

        classRibbon.style.borderColor = 'black'  
        ribbon.style.display = 'none'
    })

    //trying to get text to show when they get to 4fr size... though now I think that wont work on smaller screeen
})

// attampt to make an event listner for each button, where it will then toggle the contents for its indiviudal card - it would be populated by the hover function  



// async function bigReveal(event){
//     let 
// }


document.querySelectorAll(".char-button").forEach(item => {
    item.addEventListener("click", bigReveal => {

    let clazz = item.value
    let ribbon = document.querySelector(`[data-character-class="${clazz}"] .starting-stats`)
    let classRibbon =  document.querySelector(`[data-character-class="${clazz}"]`)

    // ribbon.style.transform = scale(1.5)
    // ribbon.style.display = 'flex';
    if (ribbon.style.display === 'none') {
        ribbon.style.display = 'flex';
        classRibbon.style.borderColor = 'white'
    } else {  
        ribbon.style.display = 'none' 
        classRibbon.style.borderColor = 'black'     
    }

    })



})


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

