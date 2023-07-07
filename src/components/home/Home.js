import React from "react";
import MainBar from "../mainHome/MainBar";
import { Sidebar } from "../sidebar/Sidebar";

const Home = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <div className="flex">
        <Sidebar />
        <MainBar />
      </div>
    </div>
  );
};

export default Home;
