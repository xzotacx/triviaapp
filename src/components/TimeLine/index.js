import React, { useContext, useEffect } from "react";
import SelectedContext from "../../context/answerContext";

import { ScoreVarTimeStyled, StarScoreStyled } from "./styles";

import Star1 from "../../assets/images/star1.svg";
import Star2 from "../../assets/images/star2.svg";
import Star3 from "../../assets/images/star3.svg";

function TimeLine({ time }) {
  const { SelectedAnswerContext } = SelectedContext;
  const selected = useContext(SelectedAnswerContext);

  useEffect(() => {
    console.log(selected);
    return () => {};
  }, [selected]);
  return (
    <ScoreVarTimeStyled time={time} selected={selected}>
      <StarScoreStyled left={30} src={Star1} />
      <StarScoreStyled left={63} src={Star2} />
      <StarScoreStyled left={97} src={Star3} />
    </ScoreVarTimeStyled>
  );
}

export default TimeLine;
