import React from "react";
import { workingProjects } from "../../projects";
import RenderWorkingProject from "./RenderWorkingProject";

export const WorkingProject = () => {
  return (
    <div>
      <div className=" ">
        <h5 className="text-[#A0A8A4] font-bold text-md pt-10 pb-5 px-10 bg-[#151515] sticky top-0 z-50">
          Others
        </h5>
        <div className="[&>*:nth-child(even)]:mt-4 grid grid-cols-2 gap-x-4 mx-10 mt-5  ">

        {workingProjects.map((workingProject) => {
            return <RenderWorkingProject workingProject={workingProject} />;
        })}
        </div>
      </div>
    </div>
  );
};
