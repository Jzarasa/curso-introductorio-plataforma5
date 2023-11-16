const button = document.querySelector(".button");

function randomNum (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let paddingUno = 20;
let paddingDos = 30;
let aumentando = true;
button.addEventListener('click', () => {
    let rgb = `rgb(${randomNum(0, 255)} ${randomNum(0, 255)} ${randomNum(0, 255)} / .6`;
    document.body.style.backgroundColor = rgb;
    button.style.color = rgb;
    if (aumentando) {
        if (paddingUno + paddingDos <= 80){
            paddingUno += 5
            paddingDos += 5
        }   else aumentando = false
    }   else if (paddingUno >= 20 && paddingDos >= 30) {
            paddingUno -= 5
            paddingDos -= 5
        }   else aumentando = true
        button.style.padding = `${paddingUno}px ${paddingDos}px`   
})

