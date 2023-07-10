import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
export const ArticleList = () => {
  return (
    <div className=" md:mx-10">
      <h5 className="text-[#A0A8A4] font-bold text-md md:pt-10 py-5  bg-[#151515] sticky top-0 z-50">
        Articles
      </h5>
      <div  className=" grid grid-cols-1 md:grid-cols-2 mt-4 mx-3" >
        <Link to='https://medium.com/@jakariajishan006/my-journey-with-software-development-eb08b2022036' target="_blank" className="p-5 md:p-10  bg-[#1B1B1D] transition ease-out hover:-translate-y-1 hover:scale-110  duration-300 hover:z-10 hover:border hover:border-[#616162]">
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
        </Link>
        <div></div>
      </div>
    </div>
  );
};
