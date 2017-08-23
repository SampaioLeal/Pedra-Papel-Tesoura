$(document).ready(function () {

  console.log("Iniciando Pedra, Papel e Tesoura! Por: Sampaio Leal");

  //Iniciando configurações da aplicação!

  //Definindo as variáveis globais
  var options = [
    "img/pedra.png",
    "img/papel.png",
    "img/tesoura.png",
    "img/proibido.png"
  ];
  var theme = 0;

  //Setando a imagem inicial
  $("#bot").attr('src', options[3]);
  $("#pedra").attr('src', options[0]);
  $("#papel").attr('src', options[1]);
  $("#tesoura").attr('src', options[2]);

  function getScore() {
  }

  //Função que faz o jogo zerar
  function zerar() {
    if ($("#played").html() == "0") {
      return null;
    }
    else {
      $("#played").html(0);
      $("#jogo").html("");
      console.log("Pontuação zerada!");
      //Setar a imagem padrão
      $("#bot").attr('src', options[3]);
      return zerar;
    }
  }

  //Função que faz o jogo iniciar, a cada chamada é uma rodada a mais
  function jogar(choice) {
    //Tranformar a string em uma int()
    var num = parseInt($('#played').html(), 10);
    //Contador de rodadas
    $('#played').html(++num);

    //Gerar um número aleatório e setar a imagem
    var botChoice = String(Math.random() * 3).charAt(0);
    $("#bot").attr('src', options[botChoice]);

    //Regras básicas do Pedra, Papel e Tesoura
    if (choice == 0 && botChoice == 2 || choice == 1 && botChoice == 0 || choice == 2 && botChoice == 1) {
      $('#jogo').text("Você venceu!");
      console.log("Jogador venceu!");
    }
    if (botChoice == 0 && choice == 2 || botChoice == 1 && choice == 0 || botChoice == 2 && choice == 1) {
      $('#jogo').text("Bot Jubileu venceu!");
      console.log("Bot Jubileu venceu!");
    }
    if (choice == botChoice) {
      $('#jogo').text("Deu empate!");
      console.log("Empatou!");
    }
  }

  function changeTheme() {
    if (theme == 1) {
      console.log("theme 0 set");
      theme = 0;
      $('#theme1').remove();
      $("#zerar").removeClass("inverted");
    }
    else if (theme == 0) {
      console.log("theme 1 set");
      theme = 1;
      $('head').append("<link id='theme1' rel='stylesheet' href='css/semantic-dark.css'>");
      $("#zerar").addClass("inverted");
    }
  }

  //Eventos
  $("#btn1").click(function () {
    jogar(0);
  });
  $("#btn2").click(function () {
    jogar(1);
  });
  $("#btn3").click(function () {
    jogar(2);
  });
  $("#zerar").click(function () {
    if (zerar() == null) {
    }
    else {
      $('#content').fadeOut();
      setTimeout(zerar, 1000);
      $('#content').fadeIn(2000);
    }
  })
  $("#theme").click(function () {
    $('#content').fadeOut();
    setTimeout(changeTheme, 1000);
    $('#content').fadeIn(2000);
  })
  console.log("Jogo iniciado!");

});
