let display =document.getElementById("display");
let dark = document.getElementById("theme-toggle");

function appendToDisplay(value) {
    display.value+= value;

}

function clearDisplay() {
    display.value = "";
}

function calculateResult(){
    display.value = eval(display.value);
}

function deleteLast(){
    display.value =display.value.slice( 0 , -1);
}
function darkMode(){
    document.body.classList.toggle("dark-mode");
    let icon = dark.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
    dark.classList.toggle("active"); 
}
