import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { HomePage } from '../pages/user/home'
import ApiCallDemo from '../pages/user/apicall/ApiCallDemo'
import { Contact, HomePage } from '../pages'

const Router:React.FC = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/api/test" element={<ApiCallDemo />}/>
       </Routes>
    </BrowserRouter>
  )
}

export default Router
