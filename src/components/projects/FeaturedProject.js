import React from "react";
import { featuredProjects } from "../../projects";
import RenderFeature from "./RenderFeature";

const FeaturedProject = () => {
  return (
    <div className="">
      <h5 className="text-[#A0A8A4] font-bold text-md md:pt-10 py-5 md:px-10 bg-[#151515] sticky top-0 z-50 ">
        Featured🔥
      </h5>
      <div className=" grid gap-x-4 mx-3 md:mx-10 my-5">
        {featuredProjects.map((featuredProject, index) => {
          return (
            <RenderFeature key={index} featuredProject={featuredProject} />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProject;
