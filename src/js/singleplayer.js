function playSingle() {
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