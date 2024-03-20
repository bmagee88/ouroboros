import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useState } from "react";
import { checkFailingHealth, getEvent, rollD } from "../../game/utils";
import { setGameState } from "../../state/game/gameSlice";
import {
  addLifeEvent,
  addRecord,
  addStatusDnFh,
  resetCharacter,
} from "../../state/character/charcterSlice";
import { setIsWorking } from "../../state/action/actionSlice";

export const useBaseAction = () => {
  const dispatch = useDispatch();
  const gameOptions = useSelector((state: RootState) => state.game);
  //   const [waiting, setWaiting] = useState(false);
  const waiting = useSelector((state: RootState) => state.action.isWorking);
  const status = useSelector((state: RootState) => state.character.status);

  const firstDie = rollD(gameOptions.firstDiceNumSides);
  const secondDie = rollD(gameOptions.secondDiceNumSides);

  // determine event
  const { events, hasLifeEvent, youDied } = getEvent(
    firstDie,
    secondDie,
    status.dn,
    gameOptions.maxDn
  );

  const handleBaseAction = () => {
    dispatch(setIsWorking(true));
    // setWaiting(true);
    setTimeout(() => {
      dispatch(setIsWorking(false));
      //   setWaiting(false);
    }, 500);

    if (hasLifeEvent) {
      dispatch(addLifeEvent());
    }

    //mod dn and fh
    const isFailing = checkFailingHealth(firstDie + secondDie, status.dn);
    if (isFailing) {
      dispatch(addStatusDnFh());
    }

    if (youDied) {
      dispatch(setGameState(false));
    }
  };

  const checkRestart = () => {
    if (events.includes("death")) {
      prompt(`you died.  press any key to continue..`);
      dispatch(resetCharacter());
    }
  };

  const saveTurn = () => {
    dispatch(
      addRecord({
        status: { age: status.age },
        turnAction: { firstDie: firstDie, secondDie: secondDie, sum: firstDie + secondDie },
        result: { events: events },
      })
    );
  };

  return { handleBaseAction, checkRestart, saveTurn, status, waiting, events, firstDie, secondDie };
};
