import React from "react";
import { handleClick } from "./handlers";

const StartButton = () => {
  return <button onClick={() => handleClick()}></button>;
};

export default StartButton;
