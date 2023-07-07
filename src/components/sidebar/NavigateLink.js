import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavigateLink = ({ link }) => {
    const location = useLocation()
    const isActive = location.pathname === link.path
  return (
    <div>
      <NavLink
        to={link.path}
        className={`${isActive? 'text-white':'text-[#777778]'}`}
      >
        <div className="flex items-center">
          <p>{link.serial}</p>
          <hr className={`mx-2 w-14 ${isActive ? 'bg-white' : 'bg-[#777778]'} border-0 h-px`} />
          <p>{link.linkName}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NavigateLink;
