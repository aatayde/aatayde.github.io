const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

// store btn 
const myButtons = document.querySelectorAll('.btn');



function changeThemes(e){
    console.log("Dark Mode is: ", isDarkMode.matches)
    return (e.matches ?  changeToDark() : changeToLight())
    
}

function changeToDark(){

    console.log("Dark mode selected")

    myButtons.forEach(button => {

        button.classList.remove('btn-light'),
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

// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded by load event');
//     changeThemes(isDarkMode.matches)
//   });

  onload = () => {
    console.log("page is loaded by onload event")
    changeThemes(isDarkMode.matches)
}