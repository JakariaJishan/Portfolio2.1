import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
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
    <div className=" md:w-6/12 ">
      <div className="md:flex flex-col p-5 md:p-10">
        <div className="flex-auto">
          <h1 className="text-6xl">
            Hello, I'm <br /> Jakaria Jishan
          </h1>
          <h2 className="text-2xl my-2 text-stone-300">
            Full-stack Software Developer
          </h2>
          <h3 className="text-xl mb-2 text-indigo-400">
            Building digital products, brands, and experience.
          </h3>
          <p className="text-md md:text-sm leading-7 my-5 text-[#777778]">
            Dynamic Software Engineer with 2 years of experience in web development. Proficient in HTML/CSS,
            JavaScript, React/Redux, Ruby on Rails, Postgresql and more. Seeking full-time or part-time remote opportunities.
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
          <Profile />
        </div>
        <Link
          to="https://www.dropbox.com/scl/fi/26fcepmvc0l2opwi5ypqa/resume-jakaria-personal-2.0.pdf?rlkey=rdy97tcs5z8jv98e6xigap86i&st=ptaiefhd&dl=0"
          target="_blank"
          class="transition ease-out bg-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-24 px-4 py-2 rounded-full text-xs flex items-center gap-2 uppercase"
        >
          Resume
          <BsArrowUpRight className="transition ease-out duration-300 group-hover:-translate-y-1 text-md animate-ping" />{" "}
        </Link>
      </div>
    </div>
  );
};
