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
  $("img").attr('src', options[3]);

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
      $("img").attr('src', options[3]);
      return zerar;
    }
  }

  //Função que faz o jogo iniciar, a cada chamada é uma rodada a mais
  function jogar() {
    //Tranformar a string em uma int()
    var num = parseInt($('#played').html(), 10);
    //Contador de rodadas
    $('#played').html(++num);

    //Gerar um número aleatório e setar a imagem
    var num1 = String(Math.random() * 3).charAt(0);
    var num2 = String(Math.random() * 3).charAt(0);
    $("#img1").attr('src', options[num1]);
    $("#img2").attr('src', options[num2]);

    //Regras básicas do Pedra, Papel e Tesoura
    if (num1 == 0 && num2 == 2 || num1 == 1 && num2 == 0 || num1 == 2 && num2 == 1) {
      $('#jogo').text("Você venceu!");
      console.log("Jogador venceu!");
    }
    if (num2 == 0 && num1 == 2 || num2 == 1 && num1 == 0 || num2 == 2 && num1 == 1) {
      $('#jogo').text("Bot Jubileu venceu!");
      console.log("Bot Jubileu venceu!");
    }
    if (num1 == num2) {
      $('#jogo').text("Deu empate!");
      console.log("Empatou!");
    }
  }

  function changeTheme() {
    if (theme == 1) {
      console.log("theme 0 set");
      theme = 0;
      $('#style').attr("href", "semantic.css");
      $("#zerar").removeClass("inverted");
    }
    else if (theme == 0) {
      console.log("theme 1 set");
      theme = 1;
      $('#style').attr("href", "semantic-dark.css");
      $("#zerar").addClass("inverted");
    }
  }

  //Eventos
  $("#play").click(function () {
    jogar();
  });
  $("#zerar").click(function () {
    if (zerar() == null) {
    }
    else {
      $('#content').fadeOut();
      setTimeout(zerar, 500);
      $('#content').fadeIn(2000);
    }
  })
  $("#theme").click(function () {
    $('#content').fadeOut();
    setTimeout(changeTheme, 500);
    $('#content').fadeIn(2000);
  })
  console.log("Jogo iniciado!");

});
