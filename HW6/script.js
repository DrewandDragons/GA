const name = document.getElementById('pc-name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

if (password.value.length < 10) {
    messages.push('No less than 10 characters')
}
if (password.value.length > 20) {
    messages.push('No more than 19 characters')
}

if (password.value === 'password') {
    messages.push('Your password cannot be password!')
}

 if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
if (password.value != 'drewanddragons') {
        messages.push('You know not of what you speak!')
        
    } else {
        messages.push('Welcome good sir!')
    }

})