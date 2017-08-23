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
    $("#score").fadeIn('slow');
  
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
        $('.score').html("0");
        return zerar;
      }
    }
  
    //Função que faz o jogo iniciar, a cada chamada é uma rodada a mais
    function jogar(choice) {
      var playedTimes = parseInt($('#played').html(), 10);
      $('#played').html(++playedTimes);
  
      //Gerar um número aleatório e setar a imagem
      var botChoice = String(Math.random() * 3).charAt(0);
      $("#bot").attr('src', options[botChoice]);
  
      //Regras básicas do Pedra, Papel e Tesoura
      if (choice == 0 && botChoice == 2 || choice == 1 && botChoice == 0 || choice == 2 && botChoice == 1) {
        $('#jogo').text("Você venceu!");
        var vitorias = parseInt($('#vitorias').html(), 10);
        $('#vitorias').html(++vitorias);
        console.log("Jogador venceu!");
      }
      if (botChoice == 0 && choice == 2 || botChoice == 1 && choice == 0 || botChoice == 2 && choice == 1) {
        $('#jogo').text("Bot Jubileu venceu!");
        var derrotas = parseInt($('#derrotas').html(), 10);
        $('#derrotas').html(++derrotas);
        console.log("Bot Jubileu venceu!");
      }
      if (choice == botChoice) {
        $('#jogo').text("Deu empate!");
        var empates = parseInt($('#empates').html(), 10);
        $('#empates').html(++empates);
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
        setTimeout(zerar, 10000);
        $('#content').fadeIn(2000);
      }
    })
    $("#theme").click(function () {
      $('#content').fadeOut();
      setTimeout(changeTheme, 500);
      $('#content').fadeIn(3000);
    })
    console.log("Jogo iniciado!");
  
  });
  