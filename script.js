console.log("hello, world!")
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
// const theButton = document.getElementById("btn-1")

// store btn 
const myButtons = document.querySelectorAll('.btn');

function changeThemes(e){
    return (e.matches ?  changeToDark() : changeToLight())
    
}
function changeToDark(){

    console.log("Dark mode selected")

    myButtons.forEach(button => {

        button.classList.remove('btn-light')
        button.classList.add('btn-dark')
      })
}

function changeToLight(){

    console.log("Light mode selected")
    
    myButtons.forEach(button => {

        button.classList.remove('btn-dark'),
        button.classList.add('btn-light')
      })
}



isDarkMode.addEventListener("change", e => {
    changeThemes(e);
    console.log("Changing Themes")
})

