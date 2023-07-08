import React from "react";
import MainBar from "../mainHome/MainBar";
import { Sidebar } from "../sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex justify-between items-start gap-10 py-10">
        <Sidebar />
        <MainBar />
    </div>
  );
};

export default Home;
