const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

// store btn 
const myButtons = document.querySelectorAll('.btn');



function changeThemes(e){
    return (e.matches ?  changeToDark() : changeToLight())
    
}

function changeToDark(){

    myButtons.forEach(button => {

        button.classList.remove('btn-light'),
        button.classList.add('btn-dark')
      })
}

function changeToLight(){
    
    myButtons.forEach(button => {

        button.classList.remove('btn-dark'),
        button.classList.add('btn-light')
      })
}

isDarkMode.addEventListener("change", e => {

    changeThemes(e);
})

  onload = () => {

    return (isDarkMode.matches ?  changeToDark() : changeToLight())
}