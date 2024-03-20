import React from "react";
import { useDispatch } from "react-redux";
import { useBaseAction } from "../../hooks/actions/useBaseAction";
import { checkIfEducated } from "../../game/utils";
import { addOneEducationLv } from "../../state/character/charcterSlice";

interface SelfCareButtonProps {
  text: string;
}

const EducateButton = ({ text }: SelfCareButtonProps) => {
  const dispatch = useDispatch();

  const { handleBaseAction, checkRestart, saveTurn, status, waiting, events } = useBaseAction();

  const handleClick = () => {
    handleBaseAction();

    const educated = checkIfEducated();
    if (educated) {
      events.push("learning up!");
      dispatch(addOneEducationLv());
    }

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

export default EducateButton;
