import React from "react";
import { useDispatch } from "react-redux";
import { useBaseAction } from "../../hooks/actions/useBaseAction";
import { checkIfFoundNewJob } from "../../game/utils";
import { setProfession } from "../../state/character/charcterSlice";

interface JobHuntButtonProps {
  text: string;
}

const JobHuntButton = ({ text }: JobHuntButtonProps) => {
  const dispatch = useDispatch();

  const { handleBaseAction, checkRestart, saveTurn, status, waiting, events } = useBaseAction();

  const handleClick = () => {
    handleBaseAction();

    const { foundNewJob, newJob } = checkIfFoundNewJob();
    if (foundNewJob) {
      events.push("found new job!");
      dispatch(setProfession(newJob));
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

export default JobHuntButton;
