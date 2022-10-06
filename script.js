console.log("hello, world!")
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
// const theButton = document.getElementById("btn-1")

// store btn 
const myButtons = document.querySelectorAll(".btn");

function changeToDark(){
    // myButtons.classList.remove('btn-light')
    // myButtons.classList.add('btn-dark')

    console.log("Dark Mode triggered")
    
    myButtons.forEach(button => {
        button.classList.remove('btn-light')
        button.classList.add('btn-dark')
      })
}

function changeToLight(){
    // myButtons.classList.remove('btn-dark')
    // myButtons.classList.add('btn-light')

    console.log("light Mode triggered")
    

    myButtons.forEach(button => {
        button.classList.remove('btn-light')
        button.classList.add('btn-dark')
      })
}

function changeThemes(e){
    return (e.matches ? changeToDark() : changeToLight())
    
}

isDarkMode.addEventListener("change", e => {
    changeThemes(e);
})

