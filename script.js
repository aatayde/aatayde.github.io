console.log("hello, world!")
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
// const theButton = document.getElementById("btn-1")

// store btn 
const myButtons = document.querySelectorAll(".btn");

function changeToDark(){
    myButtons.classList.remove('btn-light')
    myButtons.classList.add('btn-dark')
}

function changeToLight(){
    myButtons.classList.remove('btn-dark')
    myButtons.classList.add('btn-light')
}

function changeThemes(e){
    return (e.matches ? changeToDark() : changeToLight())
}

isDarkMode.addEventListener("change", e => {
    myButtons.forEach(button => {
        changeThemes(e)
      })
})

