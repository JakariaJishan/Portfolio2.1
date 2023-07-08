import React from "react";
import { BsArrowUpRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
import { Link } from "react-router-dom";
export const Profile = () => {
  return (
    <div className="flex items-center gap-5">
      <img
        src="https://ca.slack-edge.com/T47CT8XPG-U047GPUDEQN-88e4bb441b9d-512"
        alt="profile image"
        className="w-12 h-12 rounded-full"
      />
      <div className="flex justify-center items-center text-xs gap-3">
        <div>
          <Link
            to="https://github.com/JakariaJishan"
            target="_blank"
            className="flex items-center gap-1 group text-gray-400 hover:text-white"
          >
            <BsGithub />
            Github
            <BsArrowUpRight className="transition ease-out duration-300 group-hover:-translate-y-1 text-md " />
          </Link>
        </div>
        <div>
          <Link
            to="https://www.linkedin.com/in/jakariajishan/"
            target="_blank"
            className="flex items-center gap-1 group text-gray-400 hover:text-white"
          >
            <BsLinkedin />
            Linkedin
            <BsArrowUpRight className="transition ease-out duration-300 group-hover:-translate-y-1 text-md " />
          </Link>
        </div>
        <div>
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:no-reply@example.com";
              e.preventDefault();
            }}
            target="_blank"
            className="flex items-center gap-1 group text-gray-400 hover:text-white"
          >
            <SiMaildotru />
            Mail
            <BsArrowUpRight className="transition ease-out duration-300 group-hover:-translate-y-1 text-md " />
          </Link>
        </div>
      </div>
    </div>
  );
};
