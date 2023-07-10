import React from "react";
import SkillsList from "./SkillsList";

const MainSkill = () => {
  return (
    <div className="w-full md:w-3/5">
      <div className="md:overflow-scroll no-scrollbar md:h-screen pb-10">
        <SkillsList />
      </div>
    </div>
  );
};

export default MainSkill;
