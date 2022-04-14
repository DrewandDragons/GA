const submitButton = document.querySelector('#fetch')
const breedInput = document.querySelector('input')
const imageDiv = document.querySelector('div')


const getBreeds = async() => {

    const dogBreeds = await axios.get('https://dog.ceo/api/breeds/list/all')

    console.log(dogBreeds)
}

getBreeds()


submitButton.addEventListener('click', async () => {
    let breed = breedInput.value
    let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random)`)
console.log(response.data.message)
let dogPic = response.data.message
imageDiv.innerHTML = `<img src=${dogPic}>`

})
