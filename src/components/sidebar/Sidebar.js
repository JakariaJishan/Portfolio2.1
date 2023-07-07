import React from "react";
import NavigateLink from "./NavigateLink";

export const Sidebar = () => {
  const links = [
    {
      serial: "01",
      linkName: "Work",
      path:'/'
    },
    {
      serial: "02",
      linkName: "Articles",
      path:'/articles'
    },
    {
      serial: "03",
      linkName: "Contact",
      path:'/contact'
    },
  ];
  return (
    <div className=" w-full">
      <h1 className="text-6xl">
        Hello, I'm <br /> Jakaria Jishan
      </h1>
      <p className="leading-7 my-5 text-[#777778]">
        I'm a software engineer. I create interactive web experiences using
        frontend technology. I am interested in user experience, accessibility,
        design systems, gaming, web3 and web animations.
      </p>
      {links.map((link) => {
        return (
          <div key={link.serial} className="">
            <NavigateLink link={link} />
          </div>
        );
      })}
    </div>
  );
};
