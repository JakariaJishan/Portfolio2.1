import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import MainArticle from "./MainArticle";

const Article = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainArticle />
    </div>
  );
};

export default Article;
