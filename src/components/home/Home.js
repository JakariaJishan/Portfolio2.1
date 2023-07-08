import React from "react";
import MainBar from "../mainHome/MainBar";
import { Sidebar } from "../sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-screen">
        <Sidebar />
        <MainBar />
    </div>
  );
};

export default Home;
