// Created by Rafael Trigo

//html

//js
let getkeyboard = document.addEventListener("keydown",get)
function get(event) {
  const key = event.key.toLowerCase(); // Obtém a tecla pressionada e a converte para minúscula
  getSound(key); // Chama a função getSound com a tecla pressionada
}
function getSound(keyboard){

let sound = new Audio(`sounds/${keyboard}.mp3`); // Cria um novo elemento de áudio
sound.play(); // Reproduz o som
}
