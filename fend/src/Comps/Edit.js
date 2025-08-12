import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()

  useEffect(()=>{
    if(obj.store.token===""){
      navigate('/login')
    }
  },[obj.store.token, navigate])

  let [data,setData]=useState({"dob":"",...obj.store.std})

  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  let upd=()=>{
    axios.put("http://localhost:5000/upd",data,{"headers":{"Authorization":obj.store.token}}).then(()=>{
      navigate("/disp")
    })
  }
  
  return (
    <div className="flex justify-center items-start py-8">
      <div className="card w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Edit Student Record</h1>
          <p className="text-gray-600">Update student information and marks</p>
        </div>
        
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); upd(); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hallTicket" className="block text-sm font-medium text-gray-700 mb-2">
                Hall Ticket Number
              </label>
              <input 
                type="text" 
                id="hallTicket"
                value={data._id} 
                readOnly 
                className="input-field bg-gray-50 cursor-not-allowed"
              />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input 
                type="text" 
                id="name"
                placeholder="Enter full name" 
                value={data.name} 
                name="name" 
                onChange={fun}
                className="input-field"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="Enter email address" 
                value={data.email} 
                name="email" 
                onChange={fun}
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phno" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input 
                type="tel" 
                id="phno"
                placeholder="Enter phone number" 
                value={data.phno} 
                name="phno" 
                onChange={fun}
                className="input-field"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth *
              </label>
              <input 
                type="date" 
                id="dob"
                value={data.dob.slice(0, 10)} 
                name="dob" 
                onChange={fun}
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Gender *
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    value="male" 
                    onChange={fun} 
                    name="gen" 
                    checked={data.gen === "male"}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    required
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    value="female" 
                    onChange={fun} 
                    name="gen" 
                    checked={data.gen === "female"}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    required
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Marks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="tel" className="block text-sm font-medium text-gray-700 mb-2">
                  Telugu
                </label>
                <input 
                  type="number" 
                  id="tel"
                  placeholder="Enter marks" 
                  value={data.tel} 
                  name="tel" 
                  onChange={fun}
                  min="0"
                  max="100"
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="hin" className="block text-sm font-medium text-gray-700 mb-2">
                  Hindi
                </label>
                <input 
                  type="number" 
                  id="hin"
                  placeholder="Enter marks" 
                  value={data.hin} 
                  name="hin" 
                  onChange={fun}
                  min="0"
                  max="100"
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="eng" className="block text-sm font-medium text-gray-700 mb-2">
                  English
                </label>
                <input 
                  type="number" 
                  id="eng"
                  placeholder="Enter marks" 
                  value={data.eng} 
                  name="eng" 
                  onChange={fun}
                  min="0"
                  max="100"
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="math" className="block text-sm font-medium text-gray-700 mb-2">
                  Mathematics
                </label>
                <input 
                  type="number" 
                  id="math"
                  placeholder="Enter marks" 
                  value={data.math} 
                  name="math" 
                  onChange={fun}
                  min="0"
                  max="100"
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="sc" className="block text-sm font-medium text-gray-700 mb-2">
                  Science
                </label>
                <input 
                  type="number" 
                  id="sc"
                  placeholder="Enter marks" 
                  value={data.sc} 
                  name="sc" 
                  onChange={fun}
                  min="0"
                  max="100"
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="ss" className="block text-sm font-medium text-gray-700 mb-2">
                  Social Studies
                </label>
                <input 
                  type="number" 
                  id="ss"
                  placeholder="Enter marks" 
                  value={data.ss} 
                  name="ss" 
                  onChange={fun}
                  min="0"
                  max="100"
                  className="input-field"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button 
              type="button" 
              onClick={() => navigate('/disp')}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-primary px-8"
            >
              Update Record
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit