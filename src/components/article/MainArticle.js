import React from 'react'
import { ArticleList } from './ArticleList'

const MainArticle = () => {
  return (
    <div className=" w-3/5">
      <div className="overflow-scroll no-scrollbar h-screen">
        <ArticleList />
      </div>
    </div>
  )
}

export default MainArticle