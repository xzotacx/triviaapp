import React, { useEffect } from "react";
//Styles
import {
  ScoreItemContainerStyled,
  ScoreItemStyled,
  ScoreTableStyled,
  Top3Styled,
  PlayAgain,
  ButtonContainerStyled,
} from "./styles";
//Assets
import Star1 from "../../assets/images/star1.svg";
import Star2 from "../../assets/images/star2.svg";
import Star3 from "../../assets/images/star3.svg";
//Helpers
import { ascendentSort } from "../../helpers";
import { useState } from "react";
import { useHistory } from "react-router";

const storage = window.localStorage;

function ScoreTable({ data, onClick }) {
  const [players, setPlayers] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const _players = ascendentSort(data);
    setPlayers(_players);
    return () => {};
  }, [data]);

  return (
    <>
      <ScoreTableStyled>
        <ButtonContainerStyled>
          <PlayAgain onClick={onClick}>Play Again</PlayAgain>
          <PlayAgain
            onClick={() => {
              window.localStorage.removeItem("uuid");
              window.localStorage.removeItem("name");
              history.push("/");
            }}
          >
            Log Out
          </PlayAgain>
        </ButtonContainerStyled>
        <h1>Scores</h1>
        <ScoreItemContainerStyled>
          {players.map((player, index) => (
            <ScoreItemStyled
              key={player.uuid}
              own={player.uuid === storage.getItem("uuid") ? true : false}
            >
              {index === 0 ? <Top3Styled src={Star3} /> : null}
              {index === 1 ? <Top3Styled src={Star2} /> : null}
              {index === 2 ? <Top3Styled src={Star1} /> : null}
              <h2>{player.name}</h2>
              <h3>Max Score: {player.maxScore}</h3>
            </ScoreItemStyled>
          ))}
        </ScoreItemContainerStyled>
      </ScoreTableStyled>
    </>
  );
}

export default ScoreTable;
