import React from "react";
import SkillsList from "./SkillsList";

const MainSkill = () => {
  return (
    <div className=" w-3/5">
      <div className="overflow-scroll no-scrollbar h-screen">
        <SkillsList />
      </div>
    </div>
  );
};

export default MainSkill;
