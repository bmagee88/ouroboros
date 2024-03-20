import React from "react";
import WorkButton from "../WorkButton";
import SelfCareButton from "../SelfCareButton";

const ActionsContainer = () => {
  return (
    <>
      <h2>Actions</h2>
      <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
        <WorkButton text={"work"} />
      </div>
      <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
        <SelfCareButton text={"self-care"} />
      </div>
    </>
  );
};

export default ActionsContainer;
