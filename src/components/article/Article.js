import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import MainArticle from "./MainArticle";

const Article = () => {
  return (
    <div className="md:flex gap-5">
      <Sidebar />
      <MainArticle />
    </div>
  );
};

export default Article;
