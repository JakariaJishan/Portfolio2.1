import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigateLink = ({ link }) => {
  const location = useLocation();
  const isActive = location.pathname === link.path;
  return (
    <div className="inline-block group">
      <Link
        to={link.path}
        className={`${
          isActive ? "text-white" : "text-[#777778]"
        } group-hover:text-white`}
      >
        <div className="flex items-center text-sm">
          <p>{link.serial}</p>
          <hr
            className={` transition-width ease-out mx-2 w-14 hover:w-28 group-hover:w-28 group-hover:bg-white  ${
              isActive ? "bg-white w-28" : "bg-[#777778]"
            } border-0 h-px duration-300 `}
          />
          <p>{link.linkName}</p>
        </div>
      </Link>
    </div>
  );
};

export default NavigateLink;
