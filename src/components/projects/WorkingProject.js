import React from "react";
import { workingProjects } from "../../projects";
import RenderWorkingProject from "./RenderWorkingProject";

export const WorkingProject = () => {
  return (
    <div>
      <div className=" pb-10">
        <h5 className="text-[#A0A8A4] font-bold text-md md:pt-10 py-5 md:px-10 bg-[#151515] sticky top-0 z-50">
          Others✌️
        </h5>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-x-4 mx-3 md:mx-10 md:my-5">

        {workingProjects.map((workingProject) => {
            return <RenderWorkingProject workingProject={workingProject} />;
        })}
        </div>
      </div>
    </div>
  );
};
// 