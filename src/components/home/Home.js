import React from "react";
import MainBar from "../mainHome/MainBar";
import { Sidebar } from "../sidebar/Sidebar";

const Home = () => {
  return (
    <div className="md:flex gap-5">
        <Sidebar />
        <MainBar />
    </div>
  );
};

export default Home;
