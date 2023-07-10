import React from 'react'
import FeaturedProject from './FeaturedProject'
import { WorkingProject } from './WorkingProject'

const Projects = () => {
  return (
    <div className='md:overflow-scroll no-scrollbar md:h-screen'>
       <FeaturedProject/>
       <WorkingProject/>
    </div>
  )
}

export default Projects