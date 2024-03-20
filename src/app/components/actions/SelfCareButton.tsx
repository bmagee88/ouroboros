import React, { useState } from "react";
import { checkFailingHealth, checkIfHealthImproved, getEvent, rollD } from "../../game/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  addLifeEvent,
  addRecord,
  resetCharacter,
  addStatusDnFh,
  rmStatusDnFh,
} from "../../state/character/charcterSlice";
import { RootState } from "../../state/store";
import { setGameState } from "../../state/game/gameSlice";
import { useBaseAction } from "../../hooks/actions/useBaseAction";

interface SelfCareButtonProps {
  text: string;
}

const SelfCareButton = ({ text }: SelfCareButtonProps) => {
  const dispatch = useDispatch();

  const { handleBaseAction, checkRestart, saveTurn, status, waiting, events } = useBaseAction();

  const handleClick = () => {
    handleBaseAction();

    const healthImproved = checkIfHealthImproved();
    if (healthImproved) {
      events.push("Improved Health!");
      dispatch(rmStatusDnFh());
    }

    // dispatch history changes
    saveTurn();

    checkRestart();
  };

  return (
    <button
      disabled={status.dn === 2 || waiting}
      onClick={handleClick}>
      {waiting ? "..." : text}
    </button>
  );
};

export default SelfCareButton;
