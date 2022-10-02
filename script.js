console.log("hello, world!")

// store btn 
const myButtons = document.getElementsByClassName("btn");

function changeToDark(){
    myButtons.classList.remove('btn-light')
    myButtons.classList.add('btn-dark')
}

function changeToLight(){
    myButtons.classList.remove('btn-dark')
    myButtons.classList.add('btn-light')
}