import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Comps/Home'
import Login from './Comps/Login'
import Hal from './Comps/Hal'
import Reg from './Comps/Reg'
import Disp from './Comps/Disp'
import Logout from './Comps/Logout'
import Nav from './Comps/Nav'
import Ct from './Comps/Ct'
import Edit from './Comps/Edit'

const App = () => {

  let [store,setStore]=useState({"token":"","name":""})
  let updstore=(obj)=>{
    setStore({...store,...obj}) 
  }
  let obj={"store":store,"updstore":updstore}

  return (
     <BrowserRouter>
     <Ct.Provider value={obj}>
     <div className="min-h-screen bg-gray-50">
       <Nav/>
       <main className="container-custom py-8">
         <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/reg' element={<Reg/>}/>
              <Route path='/hal' element={<Hal/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/disp' element={<Disp/>}/>
              <Route path='/edit' element={<Edit/>}/>
              <Route path='/logout' element={<Logout/>}/>
         </Routes>
       </main>
     </div>
     </Ct.Provider>
     </BrowserRouter>
  )
}

export default App