import React, { useState } from "react";
import { checkFailingHealth, getEvent, rollD } from "../../game/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  addLifeEvent,
  addRecord,
  resetCharacter,
  addStatusDnFh,
  modWealth,
  modWealthWithProfession,
} from "../../state/character/charcterSlice";
import { RootState } from "../../state/store";
import { setGameState } from "../../state/game/gameSlice";
import { useBaseAction } from "../../hooks/actions/useBaseAction";

interface WorkButtonProps {
  text: string;
}

const WorkButton = ({ text }: WorkButtonProps) => {
  const dispatch = useDispatch();

  const { handleBaseAction, checkRestart, saveTurn, waiting } = useBaseAction();

  const handleClick = () => {
    handleBaseAction();

    dispatch(modWealthWithProfession());

    saveTurn();
    checkRestart();
  };

  return (
    <button
      disabled={waiting}
      onClick={handleClick}>
      {waiting ? "..." : text}
    </button>
  );
};

export default WorkButton;
