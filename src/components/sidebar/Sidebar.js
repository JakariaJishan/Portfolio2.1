import React from "react";
import { LiaDownloadSolid } from 'react-icons/lia';
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
    <div className=" w-2/5">
      <div className="flex flex-col h-screen py-10">
        <div className="flex-auto">
          <h1 className="text-6xl">
            Hello, I'm <br /> Jakaria Jishan
          </h1>
          <p className=" text-sm leading-7 my-5 text-[#777778]">
            I'm a software engineer. I create interactive web experiences using
            frontend technology. I am interested in user experience,
            accessibility, design systems, gaming, web3 and web animations.
          </p>
        </div>
        <div className="flex-auto">
          {links.map((link) => {
            return (
              <div key={link.serial} className="my-2">
                <NavigateLink link={link} />
              </div>
            );
          })}
        </div>
        <div className="flex-auto my-10">
          <Profile/>
        </div>
        <button class="transition ease-out bg-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-[118px] px-3 py-2 rounded-full text-xs flex items-center gap-2">
          Download CV
          <LiaDownloadSolid className="animate-ping"/>
        </button>
      </div>
    </div>
  );
};
