import React from "react";
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
    <div className=" w-full">
      <div className="flex flex-col h-screen justify-between">
        <div>
          <h1 className="text-6xl">
            Hello, I'm <br /> Jakaria Jishan
          </h1>
          <p className=" text-sm leading-7 my-5 text-[#777778]">
            I'm a software engineer. I create interactive web experiences using
            frontend technology. I am interested in user experience,
            accessibility, design systems, gaming, web3 and web animations.
          </p>
        </div>
        <div className="">
          {links.map((link) => {
            return (
              <div key={link.serial} className="my-2">
                <NavigateLink link={link} />
              </div>
            );
          })}
        </div>
        <div className="">
          <Profile/>
        </div>
      </div>
    </div>
  );
};
