import React from "react";
import { featuredProjects } from "../../projects";
import RenderFeature from "./RenderFeature";

const FeaturedProject = () => {
  return (
    <div className="">
        <h5 className="text-[#A0A8A4] font-bold text-md pt-10 pb-5 px-10 bg-[#151515] sticky top-0 z-50">Featured</h5>
      {featuredProjects.map((featuredProject) => {
        return <RenderFeature featuredProject={featuredProject} />;
      })}
    </div>
  );
};

export default FeaturedProject;
