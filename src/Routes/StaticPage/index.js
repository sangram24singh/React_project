import React from 'react'
import CommonPage from './CommonPage'
import Store from '../../Utility/ContextStore/contextAPI'
import Footer from '../../Components/Footer/Footer'

function StaticPage() {
  return (
    <>
    <Store>
      <CommonPage/>
      </Store>
      <Footer/>
    </>
  )
}

export default StaticPage
