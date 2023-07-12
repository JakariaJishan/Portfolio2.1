import React from "react";
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from "react-router-dom";
import NavigateLink from "./NavigateLink";
import { Profile } from "./Profile";
export const Sidebar = () => {
  const links = [
    {
      serial: "01",
      linkName: "Work",
      path: "/",
    },
    {
      serial: "02",
      linkName: "Skills",
      path: "/skills",
    },
    {
      serial: "03",
      linkName: "Articles",
      path: "/articles",
    },
    {
      serial: "03",
      linkName: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className=" md:w-2/5 ">
      <div className="md:flex flex-col py-5 md:py-10">
        <div className="flex-auto">
          <h1 className="text-6xl">
            Hello, I'm <br /> Jakaria Jishan
          </h1>
          <p className="text-md md:text-sm leading-7 my-5 text-[#777778]">
          <span className="text-white">Full-stack Software Developer</span> looking to specialize in an exemplary and innovative approach to coding. As a software developer at <span className="text-white">Microverse</span>, an online training school, I code for over 8 hours a day, work with tight deadlines, and quickly learn new languages. I also <span className="text-white">collaborate remotely with developers</span> from all around the world every day. Over the last several months, I have completed <span className="text-white">dozens of projects</span>, each accompanied by its code, syntax, scope, and function.I have developed more than 17 different projects using technologies such as <span className="text-white">React, Redux, Ruby on Rails, and PostgreSQL</span>. I have a solid knowledge of Data Structure and Algorithms. 
          </p>
        </div>
        <div className="flex-auto">
          {links.map((link) => {
            return (
              <div key={link.serial} className="block my-2">
                <NavigateLink link={link} />
              </div>
            );
          })}
        </div>
        <div className="flex-auto my-8 md:my-10">
          <Profile/>
        </div>
        <Link to='https://docs.google.com/document/d/1FDWRWy_XXgcHEvMMS_2acLhKqcXYyo3P4FEDUsVoXS0/edit?usp=sharing' target="_blank" class="transition ease-out bg-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-24 px-4 py-2 rounded-full text-xs flex items-center gap-2 uppercase">
          Resume
          <BsArrowUpRight className="transition ease-out duration-300 group-hover:-translate-y-1 text-md animate-ping" />        </Link>
      </div>
    </div>
  );
};
