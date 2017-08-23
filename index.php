<html>

<head>
    <title>Pedra Papel e Tesoura</title>
    <link id="style" rel="stylesheet" href="css/semantic.css">
</head>

<body>

    <div id="content" class="ui conatiner">
        <center>
        <br>
            <h1>Pedra, Papel e Tesoura</h1>
            <button id="theme" class="ui inverted blue button">Mudar Tema</button>
        </center>
        <br><br><br><br>
        <div class="ui two column centered grid">
            <div class="four wide column">
                <center>
                    <h1>Você</h1>
                </center>
                <div class="ui raised segment">
                    <center>
                        <img id="img1" width="100px" height="100px"><br>
                    </center>
                </div>
            </div>
            <div class="four wide column">
                <center>
                    <h1>Máquina</h2>
                </center>
                <div class="ui raised segment">
                    <center>
                        <img id="img2" width="100px" height="100px"><br>
                    </center>
                </div>
            </div>
        </div>

        <br>
        <center>
            <div id="play" class="ui labeled button" tabindex="0">
                <div class="ui blue button">
                    Jogar!
                </div>
                <a class="ui basic blue left pointing label"><span id="played">0</span></a>
            </div>
            <h1 id="jogo"></h1>
            <div id="score"></div>
            <button id="zerar" class="ui button">
                    Zerar
                  </button>
        </center>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/semantic.js"></script>
    <script src="js/app.js"></script>
</body>

</html>