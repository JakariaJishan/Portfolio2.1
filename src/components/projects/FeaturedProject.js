import React from "react";
import { featuredProjects } from "../../projects";
import RenderFeature from "./RenderFeature";

const FeaturedProject = () => {
  return (
    <div className="p-10 overflow-scroll no-scrollbar">
        <h5 className="text-[#A0A8A4] font-bold text-md mb-5 ">Featured</h5>
      {featuredProjects.map((featuredProject) => {
        return <RenderFeature featuredProject={featuredProject} />;
      })}
    </div>
  );
};

export default FeaturedProject;
