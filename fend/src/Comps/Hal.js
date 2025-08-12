import React, { useState } from 'react'
import axios from 'axios'

const Hal = () => {
  let[opt,setOpt]=useState("")
  let [val,setVal]=useState("")
  let [data,setData]=useState("")
  
  let fun=(e)=>setOpt(e.target.value)
  let fun1=(e)=>setVal(e.target.value)
  
  let gethal=()=>{
    axios.get(`https://result-portal-3.onrender.com/hal/${opt}/${val}`).then((res)=>{
      setData(res.data)
      setOpt("")
      setVal("")
    })
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Get Hall Ticket</h1>
        <p className="text-gray-600">Enter your details to retrieve your hall ticket</p>
      </div>
      
      {data!==""&&data.length===0&&(
        <div className="card bg-error/10 border border-error/20 mb-6">
          <p className="text-error text-center font-medium">No hall ticket found with the provided details</p>
        </div>
      )}
      
      <div className="card">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Search by *
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="opt" 
                  value="phno" 
                  onChange={fun} 
                  checked={opt === "phno"}
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  required
                />
                <span className="ml-2 text-gray-700">Mobile Number</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="opt" 
                  value="email" 
                  onChange={fun} 
                  checked={opt === "email"}
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  required
                />
                <span className="ml-2 text-gray-700">Email Address</span>
              </label>
            </div>
          </div>
          
          <div>
            <label htmlFor="searchValue" className="block text-sm font-medium text-gray-700 mb-2">
              {opt === "phno" ? "Mobile Number" : opt === "email" ? "Email Address" : "Search Value"} *
            </label>
            <input 
              type={opt === "email" ? "email" : "tel"}
              id="searchValue"
              placeholder={opt === "phno" ? 'Enter your mobile number' : opt === "email" ? 'Enter your email address' : 'Enter mobile or email'}
              onChange={fun1} 
              value={val}
              className="input-field"
              required
            />
          </div>
          
          <button 
            onClick={gethal}
            disabled={!opt || !val}
            className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Get Hall Ticket
          </button>
        </div>
      </div>
      
      {data!==""&&data.length>0&&(
        <div className="mt-8">
          <div className="card text-center">
            <div className="mb-6">
              <img 
                src={`http://localhost:5000/pic/${data[0].photo}`}
                alt="Student"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
              />
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Hall Ticket Number</label>
                <p className="text-xl font-bold text-primary">{data[0]._id}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">Student Name</label>
                <p className="text-xl font-semibold text-gray-900">{data[0].name}</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-success/10 rounded-lg">
              <p className="text-success font-medium">Hall ticket retrieved successfully!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hal