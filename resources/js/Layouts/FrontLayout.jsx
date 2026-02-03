import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'


function FrontLayout({children}) {
  return (
   <>       

   <Header/>

            {children}


      <Footer/>
   </>
  )
}

export default FrontLayout