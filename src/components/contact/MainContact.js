import React from 'react'
import { ContactPage } from './ContactPage'

const MainContact = () => {
  return (
    <div className=" md:w-3/5">
      <div className="md:overflow-scroll no-scrollbar md:h-screen pb-10">
        <ContactPage />
      </div>
    </div>
  )
}

export default MainContact