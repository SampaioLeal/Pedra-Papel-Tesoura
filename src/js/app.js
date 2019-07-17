//Initializing...
console.log("| --> Iniciando Pedra, Papel e Tesoura! Por: Sampaio Leal |");

//Iniciando configurações da aplicação!
var tema = 0;
var imagens = [
  "img/pedra.png",
  "img/papel.png",
  "img/tesoura.png",
  "img/proibido.png"
];

//Setando as imagens
document.querySelector("#pedra").setAttribute('src', imagens[0]);
document.querySelector("#papel").setAttribute('src', imagens[1]);
document.querySelector("#tesoura").setAttribute('src', imagens[2]);
document.querySelector("#bot").setAttribute('src', imagens[3]);

console.log("| --> Jogo carregado!                                     |");
console.log("|---------------------------------------------------------|");

function jogar(usrCh) {
  //Variáveis
  var vezesJogadas = parseInt(document.querySelector("#played").innerHTML, 10);
  var botCh = String(Math.random() * 3).charAt(0);
  var vitorias = parseInt(document.querySelector("#vitorias").innerHTML, 10);
  var derrotas = parseInt(document.querySelector("#derrotas").innerHTML, 10);
  var empates = parseInt(document.querySelector("#empates").innerHTML, 10);

  document.querySelector("#played").innerHTML = ++vezesJogadas;
  document.querySelector("#bot").setAttribute('src', imagens[botCh]);

  //Regras básicas do Pedra, Papel e Tesoura
  if (usrCh == 0 && botCh == 2 || usrCh == 1 && botCh == 0 || usrCh == 2 && botCh == 1) {
    document.querySelector("#vitorias").innerHTML = ++vitorias;
    console.log("| --> Jogador venceu! (User", vitorias, "-", derrotas, "Bot)");
  }
  if (botCh == 0 && usrCh == 2 || botCh == 1 && usrCh == 0 || botCh == 2 && usrCh == 1) {
    document.querySelector("#derrotas").innerHTML = ++derrotas;
    console.log("| --> Bot Jubileu venceu! (User", vitorias, "-", derrotas, "Bot)");
  }
  if (usrCh == botCh) {
    document.querySelector("#empates").innerHTML = ++empates;
    console.log("| --> Empatou!");
  }
}

//Função que faz o jogo zerar
function zerar() {
  document.querySelector("#played").innerHTML = 1;
  console.log("| --> Pontuação zerada!");
  document.querySelector("#bot").setAttribute('src', imagens[3]);
  
  var score = document.querySelectorAll(".score");
  for (i = 0; i < 3; i++) {
    score[i].innerHTML = "0";
  }
}

//Eventos
document.querySelector("#btn1").onclick = function () {
  jogar(0);
};
document.querySelector("#btn2").onclick = function () {
  jogar(1);
};
document.querySelector("#btn3").onclick = function () {
  jogar(2);
};
document.querySelector("#zerar").onclick = function () {
  zerar();
};