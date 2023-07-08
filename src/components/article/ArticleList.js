import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
export const ArticleList = () => {
  return (
    <div className="mx-10 my-2">
      <h5 className="text-[#A0A8A4] font-bold text-md pt-10 pb-5  bg-[#151515] sticky top-0 z-50">
        Articles
      </h5>
      <Link to='https://medium.com/@jakariajishan006/my-journey-with-software-development-eb08b2022036' className=" grid grid-cols-2 mt-5" target='_blank'>
        <div className="p-10  bg-[#1B1B1D] transition ease-out hover:-translate-y-1 hover:scale-110  duration-300 hover:z-10">
          <h5 className="text-xs text-[#BEBEBE] tracking-widest">
            Software Development, Software Engineering, Computer Science,
            Porgramming
          </h5>
          <div className="my-3 flex items-center text-xs  gap-2 text-[#777778]">
            <SlCalender />
            <p className=" mr-2">10 March, 2023</p>
            <AiOutlineClockCircle />
            <p className="">2 min read</p>
          </div>
          <h2 className="text-xl font-semibold mt-10">My journey with software development</h2>
        </div>
        <div></div>
      </Link>
    </div>
  );
};
