import React from 'react'
import {  Route, Routes } from 'react-router-dom'

// import { HomePage } from '../pages/user/home'
import { Contact, HomePage, Products } from '../pages'
import { Navbar } from '../pages/user/home/components'

const Router:React.FC = () => {
  return (
    <>
        <Navbar/>
       <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>} />
       </Routes>
    </>
  )
}

export default Router
