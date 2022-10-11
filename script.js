window.addEventListener("DOMContentLoaded", (event) => {

    let submit = document.getElementById('submit')
    let name = document.getElementById('username')


    submit.addEventListener('click', function () {
        alert('Bonjour '+ username.value+' vous êtes connecté !')
        console.log(username.value)
    })
})
