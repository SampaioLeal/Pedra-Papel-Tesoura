$(document).ready(function () {

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
  $("#bot").attr('src', imagens[3]);
  $("#pedra").attr('src', imagens[0]);
  $("#papel").attr('src', imagens[1]);
  $("#tesoura").attr('src', imagens[2]);
  $("#score").fadeIn('slow');

  console.log("Jogo iniciado!");

  function jogar(escolhaUsuario) {
    var vezesJogadas = parseInt($('#played').html(), 10);
    $('#played').html(++vezesJogadas);

    //Gerar um número aleatório e setar a imagem
    var escolhaMaquina = String(Math.random() * 3).charAt(0);
    $("#bot").attr('src', imagens[escolhaMaquina]);

    //Regras básicas do Pedra, Papel e Tesoura
    if (escolhaUsuario == 0 && escolhaMaquina == 2 || escolhaUsuario == 1 && escolhaMaquina == 0 || escolhaUsuario == 2 && escolhaMaquina == 1) {
      $('#jogo').text("Você venceu!");
      var vitorias = parseInt($('#vitorias').html(), 10);
      $('#vitorias').html(++vitorias);
      console.log("Jogador venceu!");
    }
    if (escolhaMaquina == 0 && escolhaUsuario == 2 || escolhaMaquina == 1 && escolhaUsuario == 0 || escolhaMaquina == 2 && escolhaUsuario == 1) {
      $('#jogo').text("Bot Jubileu venceu!");
      var derrotas = parseInt($('#derrotas').html(), 10);
      $('#derrotas').html(++derrotas);
      console.log("Bot Jubileu venceu!");
    }
    if (escolhaUsuario == escolhaMaquina) {
      $('#jogo').text("Deu empate!");
      var empates = parseInt($('#empates').html(), 10);
      $('#empates').html(++empates);
      console.log("Empatou!");
    }
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
      $("#bot").attr('src', imagens[3]);
      $('.score').html("0");
      return zerar;
    }
  }

  function mudarTema() {
    if (tema == 1) {
      console.log("tema 0 set");
      tema = 0;
      $('#tema1').remove();
      $("#zerar").removeClass("inverted");
    }
    else if (tema == 0) {
      console.log("tema 1 set");
      tema = 1;
      $('head').append("<link id='tema1' rel='stylesheet' href='css/semantic-dark.css'>");
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
      setTimeout(zerar, 1000);
    }
  });
  $("#tema").click(function () {
    setTimeout(mudarTema, 1000);
  });
});
