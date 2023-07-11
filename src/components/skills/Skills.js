import React from 'react';
import { Sidebar } from "../sidebar/Sidebar";
import MainSkill from './MainSkill';

const Skills = () => {
  return (
    <div className="md:flex gap-5">
    <Sidebar />
    <MainSkill />
</div>
  )
}

export default Skills