import { useState } from "react";
import ApiConnect from "../services/apiFirebase";
import PlayerScore from "../DTO/playerScore";
const usePlayers = () => {
  const [player, setPlayer] = useState({});
  const [players, setPlayers] = useState({});
  const createPlayer = async (data) => {
    const player = { ...data, maxScore: 0, scores: [] };
    ApiConnect.post(player)
      .then(() => {
        setPlayer(player);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPlayerInfo = async (uuid) => {
    ApiConnect.getOne(uuid)
      .then((player) => {
        setPlayer(player);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updatePlayer = (uuid, data) => {
    ApiConnect.update(uuid, data)
      .then((writeResult) => {
        setPlayer((prevState) => ({ ...prevState, ...data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPlayersScores = async () => {
    ApiConnect.getAll()
      .then((players) => {
        setPlayers(players.map((player) => new PlayerScore(player)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    createPlayer,
    getPlayerInfo,
    getPlayersScores,
    updatePlayer,
    player,
    players,
  };
};

export default usePlayers;