// Cambiar color de fondo
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const KeyDiv = document.getElementById("Key");
const KeyDiv1 = document.getElementById("Key1");
const texto = document.getElementById("texto");
const texto1 = document.getElementById("texto1");

function ChangerColor(event) {
    return (event.target.style.backgroundColor = "black");
}

div1.addEventListener("click", ChangerColor);
div2.addEventListener("click", ChangerColor);
div3.addEventListener("click", ChangerColor);
div4.addEventListener("click", ChangerColor);

// ejercicio 4 parte 2
function ChangeColor(event) {
    console.log(event.key);
    let color ="";
    if(event.key === "a" || event.key === "A") {
        color= "pink";
    } else if(event.key === "s" || event.key === "S") {
        color="orange";
    } else if(event.key === "d" || event.key === "D") {
        color="skyblue";
}
if (color != "") {
    KeyDiv.style.backgroundColor= color; 
    texto1.textContent = 'se asigno el color ${color} con la letra ${event.key}'
} else {
    texto1.textContent = 'la letra ${event.key} no tiene un color'

}
}

document.addEventListener("keydown",ChangeColor);

function ChangeColor2(event) {
    console.log(event.key1);
    let color ="";
    if(event.key1 === "w" || event.key === "W") {
        color= "gray";
    } else if(event.key === "e" || event.key === "E") {
        color="purple";
    } else if(event.key === "q" || event.key === "Q") {
        color="brown";
}
if (color != "") {
    KeyDiv1.style.backgroundColor= color; 
    texto.textContent = 'se asigno el color ${color} con la letra ${event.key}'
} else {
    texto.textContent = 'la letra ${event.key} no tiene un color'

}
}

document.addEventListener("keydown",ChangeColor2);