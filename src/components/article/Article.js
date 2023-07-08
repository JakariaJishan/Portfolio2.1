import React from "react";
import MainBar from "../mainHome/MainBar";
import { Sidebar } from "../sidebar/Sidebar";

const Article = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainBar />
    </div>
  );
};

export default Article;
