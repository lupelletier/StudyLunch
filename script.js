window.addEventListener("DOMContentLoaded", (event) => {

    let submit = document.getElementById('submit')
    let name = document.getElementById('username')
    let form = document.getElementById('username-2')
    let send = document.getElementById('submit-2')

    submit.addEventListener('click', function () {
        alert('Bonjour '+ username.value+' vous êtes connecté !')
        console.log(username.value)
    })
    send.addEventListener('click', function () {
        alert('Bonjour '+ form.value+' vous êtes connecté !')
        console.log(form.value)
    })
})
