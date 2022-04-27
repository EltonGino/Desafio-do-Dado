// Dado 1
let numeroRandomico1 = Math.floor(Math.random() * 6) + 1; 

let dadoRandomico1 = "dice" + numeroRandomico1 + ".png";

let imagemRandomica1 = "images/" + dadoRandomico1;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imagemRandomica1);

// Dado2
let numeroRandomico2 = Math.floor(Math.random() * 6) + 1;

let imagemRandomica2 = "images/dice" + numeroRandomico2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imagemRandomica2);

// Declarando o vencedor com if

if (numeroRandomico1 > numeroRandomico2) {
    document.querySelector("h1").innerHTML = "O jogador n°1 venceu 🚩";
}
else if (numeroRandomico1 < numeroRandomico2) {
    document.querySelector("h1").innerHTML = "O jogador n°2 venceu 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Empate";
}