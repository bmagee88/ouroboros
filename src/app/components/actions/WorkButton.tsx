import React from "react";
import { useDispatch } from "react-redux";
import { modWealthWithProfession } from "../../state/character/charcterSlice";
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
