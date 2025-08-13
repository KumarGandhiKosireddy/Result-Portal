import { useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Ct from './Ct'

const Login = () => {
  let [data,setData]=useState({"_id":"","pwd":""})
  let obj=useContext(Ct)
  let navigate=useNavigate()
  let [msg,setMsg]=useState("")

  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})  
  }

  let login=()=>{
    axios.post("https://result-portal-s9sp.onrender.com/login",data).then((res)=>{
      if(res.data.token!==undefined)
      {
        obj.updstore(res.data)
        navigate('/disp')
        setData({"_id":"","pwd":""})
      }
      else{
        setMsg(res.data.msg)
        setData({"_id":"","pwd":""})
      }
    })
  }
  
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="card w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        
        {msg!==""&&(
          <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
            <p className="text-error text-sm font-medium">Check The Credentials</p>
          </div>
        )}
        
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); login(); }}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input 
              type='email' 
              id="email"
              value={data._id} 
              name='_id' 
              placeholder='Enter your email' 
              onChange={fun}
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input 
              type='password' 
              id="password"
              value={data.pwd} 
              name='pwd' 
              placeholder='Enter your password' 
              onChange={fun}
              className="input-field"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full btn-primary py-3 text-base"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
