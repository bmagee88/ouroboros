import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import RecordDisplay from "../RecordDisplay/RecordDisplay";
import "./history-display.scss";

const HistoryDisplay = () => {
  const character = useSelector((state: RootState) => state.character);
  return (
    <>
      <h2>History</h2>
      <div
        className='history-border history-padding'
        style={{
          display: "grid",
          flexDirection: "column",
          marginLeft: "0.5rem",
          rowGap: "0.25rem",

          // flexWrap: "wrap",
          // maxHeight: `75vh`,
        }}>
        {character.history.map((turn) => {
          return <RecordDisplay turnArr={[turn]} />;
        })}
      </div>
    </>
  );
};

export default HistoryDisplay;
