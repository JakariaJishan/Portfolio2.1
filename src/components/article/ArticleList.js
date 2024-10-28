import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { articles } from "../../articles";
export const ArticleList = () => {
  return (
    <div className=" md:mx-10">
      <h5 className="text-[#A0A8A4] font-bold text-md md:pt-10 py-5  bg-[#151515] sticky top-0 z-50">
        Articles
      </h5>
      <div  className=" grid grid-cols-1 md:grid-cols-2 mt-5 mx-3 gap-5" >
          {articles.map((article) => (
              <Link
                  key={article.id}
                  to={article.link}
                  target="_blank"
                  className="p-5 md:p-10 bg-[#1B1B1D] transition ease-out hover:-translate-y-1 hover:scale-110 duration-300 hover:z-10 hover:border hover:border-[#616162]"
              >
                  <h5 className="text-xs text-[#BEBEBE] tracking-widest">{article.tags}</h5>
                  <div className="my-3 flex items-center text-xs gap-2 text-[#777778]">
                      <SlCalender />
                      <p className="mr-2">{article.date}</p>
                      <AiOutlineClockCircle />
                      <p>{article.readTime}</p>
                  </div>
                  <h2 className="text-xl font-semibold mt-10">{article.title}</h2>
              </Link>
          ))}
      </div>
    </div>
  );
};
