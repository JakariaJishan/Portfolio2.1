import React from "react";

const SkillsList = () => {
  return (
    <div className="">
      <h5 className="text-[#A0A8A4] font-bold text-md md:pt-10 py-5 md:px-10 bg-[#151515] sticky top-0 z-50">
        Skills💪
      </h5>
      <div className="md:mx-10 leading-10 bg-[#1B1B1D]">
        <div className="p-5 md:p-10 text-[#eee]">
          <span className="bg-purple-800 text-white">
            - Front-end development:
          </span>{" "}
          ReactJS | ReduxJS | NextJS | JQuery | WordPress
          <br />
          <span className="bg-orange-500 text-white">
            - Back-end development:
          </span>{" "}
          NodeJS | ExpressJS | Ruby on Rails <br />{" "}
          <span className="bg-red-700 text-white">- Test:</span> Rspec | Jest |{" "}
          <br /> <span className="bg-lime-600 text-white">- Databases:</span>{" "}
          Postgres | MongoDB | MySql <br />{" "}
          <span className="bg-teal-500 text-white">- Styling:</span>
          Styled-components | SASS | CSS-in-JS | Bootstrap | Tailwind <br />
          <span className="bg-indigo-400 text-white"> -Tools & Methods:</span> Git, GitHub, Heroku, Netlify, RSpec, TDD, Chrome Dev
          Tools. <br /> <span className="bg-fuchsia-700 text-white">- Professional:</span> Remote Pair-Programming, TeamWork,
          Mentoring.
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
