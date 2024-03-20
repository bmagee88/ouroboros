import React from "react";
import WorkButton from "../WorkButton";
import SelfCareButton from "../SelfCareButton";
import EducateButton from "../EducateButton";
import JobHuntButton from "../JobHuntButton";

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
      <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
        <EducateButton text={"educate"} />
      </div>
      <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
        <JobHuntButton text={"job search"} />
      </div>
    </>
  );
};

export default ActionsContainer;
