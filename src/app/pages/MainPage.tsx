import React, { useEffect } from "react";
import CharacterDisplay from "../components/displays/CharacterDisplay/CharacterDisplay";
import HistoryDisplay from "../components/displays/HistoryDisplay/HistoryDisplay";
import ActionsContainer from "../components/actions/ActionsContainer/ActionsContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { setName } from "../state/character/charcterSlice";
import DragonDisplay from "../components/displays/DragonDisplay/DragonDisplay";

const MainPage = () => {
  const gameIsActive = useSelector((state: RootState) => state.game.isActive);
  const dispatch = useDispatch();
  if (!gameIsActive) {
    const name = prompt("What is this life's name?");
    if (name) {
      dispatch(setName(name));
    }
  }

  useEffect(() => {}, [gameIsActive]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          minHeight: "100vh",
        }}>
        <DragonDisplay />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginRight: "1rem",
            }}>
            <div>
              <CharacterDisplay />
            </div>
            <div>
              <HistoryDisplay />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ActionsContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
