import React from 'react'
import Addnewbook from './components/Addnewbook'
import Home from './components/Home'
import Cashbook from './components/Cashbook';
import { Route, Routes } from "react-router-dom";
import Cashin from "./components/Cashin";
import Cashout from "./components/Cashout";

const App = () => {
  return (
    <div className='container mt-5'>
      <h1 className='text-success text-center'>CASH BOOK.</h1>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/newBook' element={<Addnewbook />} />
        </Route>
          <Route path='/Cashbook/:Bookname' element={<Cashbook />} />
        <Route path='/Cashin' element={<Cashin />} />
        <Route path='/Cashout' element={<Cashout />} />
      </Routes>
    </div>
  )
}

export default App