import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faTrash,
  faBalanceScale,
  faHandPaper,
  faHandScissors,
  faHandRock,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [wins, setWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [loses, setLoses] = useState(0);
  const [botChoice, setBotChoice] = useState(null);

  function jogar(usrCh) {
    //Variáveis
    var botCh = String(Math.random() * 3).charAt(0);
    setBotChoice(botCh);

    //Regras básicas do Pedra, Papel e Tesoura
    if (
      (usrCh == 0 && botCh == 2) ||
      (usrCh == 1 && botCh == 0) ||
      (usrCh == 2 && botCh == 1)
    ) {
      setWins(wins + 1);
    }
    if (
      (botCh == 0 && usrCh == 2) ||
      (botCh == 1 && usrCh == 0) ||
      (botCh == 2 && usrCh == 1)
    ) {
      setLoses(loses + 1);
    }
    if (usrCh == botCh) {
      setDraws(draws + 1);
    }
  }

  function renderBotChoice() {
    if (botChoice == 0) {
      return <FontAwesomeIcon icon={faHandRock} />;
    } else if (botChoice == 1) {
      return <FontAwesomeIcon icon={faHandPaper} />;
    } else if (botChoice == 2) {
      return <FontAwesomeIcon icon={faHandScissors} />;
    }
  }

  return (
    <Body>
      <Title>Pedra, Papel e Tesoura</Title>

      <Scoreboard>
        <Box>
          <FontAwesomeIcon icon={faBirthdayCake} />
          {wins}
        </Box>
        <Box>
          <FontAwesomeIcon icon={faBalanceScale} />
          {draws}
        </Box>
        <Box>
          <FontAwesomeIcon icon={faTrash} />
          {loses}
        </Box>
      </Scoreboard>

      <Game>
        <Box>
          <h2>Você</h2>

          <Button
            onClick={() => {
              jogar(0);
            }}
          >
            <FontAwesomeIcon icon={faHandRock} />
          </Button>
          <Button
            onClick={() => {
              jogar(1);
            }}
          >
            <FontAwesomeIcon icon={faHandPaper} />
          </Button>
          <Button
            onClick={() => {
              jogar(2);
            }}
          >
            <FontAwesomeIcon className="loses" icon={faHandScissors} />
          </Button>
        </Box>

        <Box>
          <h2>Máquina</h2>
          <BotChoice>{renderBotChoice()}</BotChoice>
        </Box>
      </Game>
    </Body>
  );
}

export default App;

const Body = styled.div`
  height: 100vh;
  width: 100%;

  background: #113449;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 20px;
`;

const Box = styled.div`
  background: linear-gradient(145deg, #0f2f42, #12384e);
  box-shadow: 11px 11px 22px #0e2b3d, -11px -11px 22px #143d55;
  border-radius: 15px;

  padding: 20px;

  font-size: 30px;

  svg {
    margin-right: 20px;
  }

  h2 {
    text-align: center;
    font-size: 25px;
  }
`;

const Button = styled.div`
  background: #113449;
  box-shadow: inset 11px 11px 22px #0e2b3d, inset -11px -11px 22px #143d55;
  border-radius: 15px;
  padding: 20px;

  margin: 10px;
  cursor: pointer;
  font-size: 30px;

  svg {
    margin: 0;
  }
`;
const BotChoice = styled.div`
  background: #113449;
  box-shadow: inset 11px 11px 22px #0e2b3d, inset -11px -11px 22px #143d55;
  border-radius: 15px;
  padding: 20px;

  margin: 95px 10px;
  font-size: 30px;

  svg {
    margin: 0;
  }
`;

const Scoreboard = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;

  margin-bottom: 50px;
`;

const Game = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 170px;
`;
