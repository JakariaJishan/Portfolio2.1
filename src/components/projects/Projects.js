import React from 'react'
import FeaturedProject from './FeaturedProject'
import { WorkingProject } from './WorkingProject'

const Projects = () => {
  return (
    <div className='overflow-scroll no-scrollbar h-screen'>
       <FeaturedProject/>
       <WorkingProject/>
    </div>
  )
}

export default Projects