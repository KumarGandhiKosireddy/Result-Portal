import React, {useState } from 'react'
import axios from 'axios'

const Home = () => {
  let [hno,setHno]=useState("")
  let [data,setData]=useState({})

  let fun=(e)=>{
      setHno(e.target.value)
  }
  
  let getres=()=> {
    axios.get(`https://result-portal-3.onrender.com/res/${hno}`).then((res)=>{
        setData(res.data)
        setHno("")
    })
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Student Result Portal</h1>
        <p className="text-gray-600">Enter your Hall Ticket Number to view your results</p>
      </div>
      
      <div className="card mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type='text' 
            placeholder='Enter Hall Ticket No' 
            onChange={fun} 
            value={hno}
            className="input-field flex-1"
          />
          <button 
            onClick={getres}
            className="btn-primary px-8 whitespace-nowrap"
          >
            Get Result
          </button>
        </div>
      </div>
      
      {!data && Object.keys(data).length === 0 && hno && (
        <div className="card bg-error/10 border border-error/20">
          <p className="text-error text-center font-medium">No result found for this Hall Ticket Number</p>
        </div>
      )}
      
      {data && "_id" in data && (
        <div className="card">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Result Details</h2>
            <p className="text-gray-600">Hall Ticket: {data._id}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <img 
                src={`http://localhost:5000/pic/${data.photo}`} 
                alt="Student"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
              />
              <h3 className="text-lg font-semibold text-gray-900">{data.name}</h3>
            </div>
            
            <div className="lg:col-span-2 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                  <p className="text-gray-900">{data.dob.slice(0,10)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-900">{data.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Telugu</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.tel}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Hindi</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.hin}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">English</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.eng}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mathematics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.math}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Science</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.sc}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Social Studies</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.ss}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <label className="text-sm font-medium text-gray-500">Total Marks</label>
              <p className="text-2xl font-bold text-primary">{data.tel+data.hin+data.eng+data.math+data.sc+data.ss}</p>
            </div>
            <div className="bg-success/10 p-4 rounded-lg">
              <label className="text-sm font-medium text-gray-500">Percentage</label>
              <p className="text-2xl font-bold text-success">{Math.floor((data.tel+data.hin+data.eng+data.math+data.sc+data.ss)/600*100)}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home