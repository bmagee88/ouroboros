import React from "react";
import { checkIfHealthImproved } from "../../game/utils";
import { useDispatch } from "react-redux";
import { rmStatusDnFh } from "../../state/character/charcterSlice";
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
