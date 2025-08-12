import React, { useState } from 'react'
import axios from 'axios'

const Reg = () => {
  let [data,setData]=useState({"name":"","phno":"","email":"","gen":"","dob":"","photo":""})
  let [msg,setMsg]=useState("")
  
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  
  let fun1=(e)=>{
    setData({...data ,"photo":e.target.files[0]})
  }
  
  let reg=()=>{
    let fd=new FormData()
    for(let p in data){
      fd.append(p,data[p])
    }
    axios.post("https://result-portal-3.onrender.com/reg",fd).then((res)=>{
      if("msg" in res.data)
      {
        setMsg(res.data.msg)
        setData({"name":"","phno":"","email":"","gen":"","dob":"", "photo":""})
      }
      else
      {
        setMsg(res.data.err)
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  return (
    <div className="flex justify-center items-start py-8">
      <div className="card w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Student Registration</h1>
          <p className="text-gray-600">Please fill in all the required information</p>
        </div>
        
        {msg!==""&&(
          <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg">
            <p className="text-success text-sm font-medium">{msg}</p>
          </div>
        )}
        
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); reg(); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input 
                type='text' 
                id="name"
                placeholder='Enter your full name' 
                name='name' 
                onChange={fun} 
                value={data.name}
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth *
              </label>
              <input 
                type='date' 
                id="dob"
                name='dob' 
                onChange={fun} 
                value={data.dob}
                className="input-field"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Gender *
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input 
                  type='radio' 
                  name='gen' 
                  value="male" 
                  onChange={fun} 
                  checked={data.gen==="male"}
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  required
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="flex items-center">
                <input 
                  type='radio' 
                  name='gen' 
                  value="female" 
                  onChange={fun} 
                  checked={data.gen==="female"}
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  required
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input 
                type='email' 
                id="email"
                placeholder='Enter your email address' 
                name='email' 
                onChange={fun} 
                value={data.email}
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phno" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number *
              </label>
              <input 
                type='tel' 
                id="phno"
                placeholder='Enter your mobile number' 
                name='phno' 
                onChange={fun} 
                value={data.phno}
                className="input-field"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
              Profile Photo *
            </label>
            <input 
              type='file' 
              id="photo"
              name='photo' 
              onChange={fun1}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-colors"
              accept="image/*"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full btn-success py-3 text-base"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Reg