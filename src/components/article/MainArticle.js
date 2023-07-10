import React from 'react'
import { ArticleList } from './ArticleList'

const MainArticle = () => {
  return (
    <div className=" md:w-3/5">
      <div className="md:overflow-scroll no-scrollbar h-screen">
        <ArticleList />
      </div>
    </div>
  )
}

export default MainArticle