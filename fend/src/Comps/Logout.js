import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  
  useEffect(()=>{
    // Clear the store immediately
    obj.updstore({"token":"","name":""})
    // Navigate after a brief delay to ensure state is cleared
    const timer = setTimeout(() => {
      navigate('/login')
    }, 3000)   
    
    return () => clearTimeout(timer)
  },[]) // Include dependencies as they are stable references
  
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="card w-full max-w-md text-center">
        <div className="mb-6">
          <svg className="mx-auto h-16 w-16 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Logging Out</h2>
          <p className="text-gray-600">You are being redirected to the login page...</p>
        </div>
        
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    </div>
  )
}

export default Logout