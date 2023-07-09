import React from 'react'
import { ContactPage } from './ContactPage'

const MainContact = () => {
  return (
    <div className=" w-3/5">
      <div className="overflow-scroll no-scrollbar h-screen">
        <ContactPage />
      </div>
    </div>
  )
}

export default MainContact