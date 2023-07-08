import React from "react";

const SkillsList = () => {
  //     - Front-end development: ReactJS | ReduxJS | NextJS | JQuery | WordPress
  // - Back-end development: NodeJS | ExpressJS | Ruby on Rails
  // - Test: Rspec | Jest |
  // - Databases: Postgres | MongoDB | MySql
  // - Styling: Styled-components | SASS | CSS-in-JS | Bootstrap | Tailwind
  // - Product management: UI design | UX Design | Prototyping | Wireframing
  // - Tools & Methods: Git, GitHub, Heroku, Netlify, RSpec, TDD, Chrome Dev Tools.
  // - Professional: Remote Pair-Programming, TeamWork, Mentoring.

  return (
    <div className="">
      <h5 className="text-[#A0A8A4] font-bold text-md pt-10 pb-5 px-10 bg-[#151515] sticky top-0 z-50">
        Skills
      </h5>
      <div className="mx-10 leading-10 bg-[#1B1B1D]">
        <div className="p-10 text-[#777778]">
          - Front-end development: ReactJS | ReduxJS | NextJS | JQuery |
          WordPress <br />
          - Back-end development: NodeJS | ExpressJS | Ruby on Rails <br /> -
          Test: Rspec | Jest | <br /> - Databases: Postgres | MongoDB | MySql{" "}
          <br /> - Styling: Styled-components | SASS | CSS-in-JS | Bootstrap |
          Tailwind <br /> - Tools & Methods: Git, GitHub, Heroku, Netlify,
          RSpec, TDD, Chrome Dev Tools. <br /> - Professional: Remote
          Pair-Programming, TeamWork, Mentoring.
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
