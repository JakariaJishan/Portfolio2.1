import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";
import { Link } from "react-router-dom";

const RenderWorkingProject = ({ workingProject }) => {
  const { title, stacks, desc, liveLink, sourceCode } = workingProject;
  return (
      <div className="w-full mt-4 p-5 md:p-10 bg-[#1B1B1D]  transition ease-out hover:-translate-y-1 hover:scale-110  duration-300 hover:z-10 hover:border hover:border-[#616162]">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex flex-wrap gap-1.5 my-2 text-xs tracking-widest text-[#AFAFAF] uppercase">
          {stacks.map((item, index) => {
            return (
              <p>
                {item} {index !== stacks.length - 1 && <span>|</span>}
              </p>
            );
          })}
        </div>
        <p className="text-sm text-[#777778] my-5">{desc}</p>
        <div className="flex items-center gap-5 text-xs">
          {
            liveLink? <Link
            to={liveLink}
            target="_blank"
            className="flex items-center text-[#777778] hover:text-white gap-0.5"
          >
            <AiFillEye />
            Live
          </Link> : <p
            className="flex items-center text-[#777778]  gap-0.5"
          >
            <AiFillEye />
            Not Available
          </p>
          }
         
          <Link
            to={sourceCode}
            target="_blank"
            className="flex items-center gap-0.5 text-[#777778] hover:text-white"
          >
            <FaCodeBranch />
            Code
          </Link>
        </div>
      </div>
  );
};

export default RenderWorkingProject;
