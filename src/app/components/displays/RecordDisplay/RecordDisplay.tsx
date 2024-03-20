import React from "react";
import { Turn } from "../../../state/character/charcterSlice";
import "./record-display.style.scss";

interface RecordDisplayProps {
  turnArr: Turn[];
}

const RecordDisplay = ({ turnArr }: RecordDisplayProps) => {
  const turn = turnArr[0];
  return (
    <>
      <div className='record-grid-item-1'>age: {turn.status.age}</div>

      {/* {" ~ "} */}
      <div className='record-grid-item-2'>
        {turn.turnAction.sum}
        {"="}
        {"["}
        {turn.turnAction.firstDie}
        {", "}
        {turn.turnAction.secondDie}
        {"]"}
      </div>

      {/* {turn.result.events.length !== 0 ? ", " : ""} */}
      <div className='record-grid-item-3'>
        {turn.result.events.map((lifeEvent) => {
          return <div>{lifeEvent}</div>;
        })}
      </div>
    </>
  );
};

export default RecordDisplay;
