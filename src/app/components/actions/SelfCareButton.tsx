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

interface SelfCareButtonProps {
  text: string;
}

const SelfCareButton = ({ text }: SelfCareButtonProps) => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.character.status);
  const gameOptions = useSelector((state: RootState) => state.game);
  const [waiting, setWaiting] = useState(false);

  const handleClick = () => {
    setWaiting(true);
    setTimeout(() => {
      setWaiting(false);
    }, 1000);

    // roll d8 and d10
    const firstDie = rollD(gameOptions.firstDiceNumSides);
    const secondDie = rollD(gameOptions.secondDiceNumSides);

    // determine event
    const { events, hasLifeEvent, youDied } = getEvent(
      firstDie,
      secondDie,
      status.dn,
      gameOptions.maxDn
    );

    if (youDied) {
      dispatch(setGameState(false));
    }

    if (hasLifeEvent) {
      dispatch(addLifeEvent());
    }

    //mod dn and fh
    const isFailing = checkFailingHealth(firstDie + secondDie, status.dn);
    if (isFailing) {
      dispatch(addStatusDnFh());
    }

    const healthImproved = checkIfHealthImproved();
    if (healthImproved) {
      events.push("Improved Health!");
      dispatch(rmStatusDnFh());
    }

    // dispatch history changes
    dispatch(
      addRecord({
        status: { age: status.age },
        turnAction: { firstDie: firstDie, secondDie: secondDie, sum: firstDie + secondDie },
        result: { events: events },
      })
    );

    if (events.includes("death")) {
      prompt(`you died.  press any key to continue..`);
      dispatch(resetCharacter());
    }
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
