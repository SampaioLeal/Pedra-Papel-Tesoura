//Initializing...
console.log("Iniciando Pedra, Papel e Tesoura! Por: Sampaio Leal");

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

console.log("Jogo carregado!");

function jogar(usrCh) {
  //Mostra a rodada atual
  var vezesJogadas = parseInt(document.querySelector("#played").innerHTML, 10);
  document.querySelector("#played").innerHTML = ++vezesJogadas;

  //Gerar um número aleatório e seta a imagem
  var botCh = String(Math.random() * 3).charAt(0);
  document.querySelector("#bot").setAttribute('src', imagens[botCh]);

  //Regras básicas do Pedra, Papel e Tesoura
  if (usrCh == 0 && botCh == 2 || usrCh == 1 && botCh == 0 || usrCh == 2 && botCh == 1) {
    document.querySelector("#jogo").innerHTML = "Você venceu!";
    var vitorias = parseInt(document.querySelector("#vitorias").innerHTML, 10);
    document.querySelector("#vitorias").innerHTML = ++vitorias;
    console.log("Jogador venceu!");
  }
  if (botCh == 0 && usrCh == 2 || botCh == 1 && usrCh == 0 || botCh == 2 && usrCh == 1) {
    document.querySelector("#jogo").innerHTML = "Bot Jubileu venceu!";
    var derrotas = parseInt(document.querySelector("#derrotas").innerHTML, 10);
    document.querySelector("#derrotas").innerHTML = ++derrotas;
    console.log("Bot Jubileu venceu!");
  }
  if (usrCh == botCh) {
    document.querySelector("#jogo").innerHTML = "Deu empate!";
    var empates = parseInt(document.querySelector("#empates").innerHTML, 10);
    document.querySelector("#empates").innerHTML = ++empates;
    console.log("Empatou!");
  }
}
//Função que faz o jogo zerar
function zerar() {
  if (document.querySelector("#played").innerHTML == "1") {
    return null;
  }
  else {
    document.querySelector("#played").innerHTML = 1;
    document.querySelector("#jogo").innerHTML = "";
    console.log("Pontuação zerada!");
    //Setar a imagem padrão
    document.querySelector("#bot").setAttribute('src', imagens[3]);
    var score = document.querySelectorAll(".score");
    for(i = 0; i < 3; i++) {
      score[i].innerHTML = "0";
    }
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
  if (zerar() == null) {
  }
  else {
    setTimeout(zerar, 1000);
  }
};