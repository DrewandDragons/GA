let button = document.querySelector("#searchButton")

 async function getData(event) {

    event.preventDefault()
    let searchInput = document.querySelector("#inputBar").value
    let url = `https://pokeapi.co/api/v2/pokemon/${searchInput}`

console.log(url)
fetch(url)
    .then(res => {
        return res.json()
    })

    .then(res => {
        let pokemonHeading = document.querySelector("#pokemonName")
        let pokemonImage = document.querySelector("#pokemonPhoto")
        
        pokemonImage.
        pokemonHeading.innerText = `Pokemon: ${res.name.toUpperCase()}`
        console.log("success!", res);
    })
    .catch(err => {console.log("soemthing went wrong...", err);
    })
}

button.addEventListener('click' , getData)
// const inputBar = g

