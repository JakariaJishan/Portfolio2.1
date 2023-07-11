import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";
import { Link } from "react-router-dom";

const RenderFeature = ({ featuredProject }) => {
  const { title, stacks, desc, liveLink, sourceCode } = featuredProject;
  return (
    <div className="mx-3 md:mx-10 my-2">
      <div className="p-5 mt-4 md:p-10 bg-[#1B1B1D] transition ease-out hover:-translate-y-1 hover:scale-110  duration-300 hover:z-10 hover:border hover:border-[#616162]">
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
          <Link
            to={liveLink}
            target="_blank"
            className="flex items-center text-[#777778] hover:text-white gap-0.5"
          >
            <AiFillEye />
            Live
          </Link>
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
    </div>
  );
};

export default RenderFeature;
