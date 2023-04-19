import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

export default function PageLayout({children}) {
  return (
    <div className="bg-gray-100 w-screen overflow-hidden">
      <Header/>
      <div className="">
        {children}
      </div>
      <Footer/>
    </div>
  )
}
