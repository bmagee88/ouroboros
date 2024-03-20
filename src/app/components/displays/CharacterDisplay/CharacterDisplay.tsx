import React from "react";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
import "./character-display.style.scss";

const CharacterDisplay = () => {
  const character = useSelector((state: RootState) => state.character);
  const gameMaxDn = useSelector((state: RootState) => state.game.maxDn);
  return (
    <>
      <h2>Character</h2>
      <div style={{ padding: "1rem", border: "3px solid black", borderRadius: "15px" }}>
        <div className='name'>{character.name}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <span className='stat-label'>age: </span>
            {character.status.age}
          </div>
          <div>
            <span className='stat-label'>education: </span>
            {character.status.educationLv}
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <span className='stat-label'>income: </span>
            {character.status.profession.income}
          </div>
          <div>
            <span className='stat-label'>wealth: </span>
            {character.status.wealth}
          </div>
        </div>
        <div>
          <div>
            <span className='stat-label'>Life Events: </span>
            {character.status.le}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <span className='stat-label'>dn: </span>
            {character.status.dn}/{gameMaxDn}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <span className='stat-label'>fh: &nbsp;</span>
          <span className='fh-list'>{character.status.fh.join(", ")}</span>
        </div>
      </div>
    </>
  );
};

export default CharacterDisplay;
