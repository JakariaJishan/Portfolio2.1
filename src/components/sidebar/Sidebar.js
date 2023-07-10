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
    <div className=" md:w-2/5">
      <div className="md:flex flex-col md:h-screen py-5 md:py-10">
        <div className="flex-auto">
          <h1 className="text-5xl md:text-6xl">
            Hello, I'm <br /> Jakaria Jishan
          </h1>
          <p className="text-md md:text-sm leading-7 my-5 text-[#777778]">
            I'm a software engineer. I create interactive web experiences using
            frontend technology. I am interested in user experience,
            accessibility, design systems, gaming, web3 and web animations.
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
        <Link to='https://docs.google.com/document/d/1wl3t5yFbxMvN99lc-tGVj9LW5AarmTf5azPkyd_5Gqg/edit?usp=sharing' target="_blank" class="transition ease-out bg-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-24 px-4 py-2 rounded-full text-xs flex items-center gap-2 uppercase">
          Resume
          <BsArrowUpRight className="transition ease-out duration-300 group-hover:-translate-y-1 text-md animate-ping" />        </Link>
      </div>
    </div>
  );
};
