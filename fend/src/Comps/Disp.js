import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Disp = () => {
  let [data,setData]=useState([])
  let [f,setF]=useState(true)
  let obj=useContext(Ct)
  let navigate=useNavigate()
  
  useEffect(()=>{
    if(obj.store.token==="")
    {
      navigate('/login')
    }
  },[obj.store.token, navigate])

  useEffect(()=>{
    axios.get("https://result-portal-3.onrender.com/getstd",{"headers":{"Authorization":obj.store.token}}).then((res)=>{
      setData(res.data)
    })
  },[f, obj.store.token])

  let upd=(edtobj)=>{
    obj.updstore(edtobj)
    navigate('/edit')
  }

  let del=(hno)=>{
    if(window.confirm('Are you sure you want to delete this student?')) {
      axios.delete(`https://result-portal-3.onrender.com/del/${hno}`,{"headers":{"Authorization":obj.store.token}}).then(()=>{
        setF(!f)
      })
    }
  }

  return (
    <div className="max-w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Student Records</h1>
        <p className="text-gray-600">Manage and view all registered students</p>
      </div>
      
      {data.length > 0 ? (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hall Ticket</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telugu</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hindi</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">English</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Maths</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Science</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Social</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((std, ind) => (
                  <tr key={std._id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{ind + 1}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-primary">{std._id}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{std.name}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{std.email}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">{std.gen}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{std.phno}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{std.tel}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{std.hin}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{std.eng}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{std.math}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{std.sc}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{std.ss}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          className="btn-warning px-3 py-1 text-xs"
                          onClick={() => upd({ std })}
                        >
                          Edit
                        </button>
                        <button 
                          className="btn-error px-3 py-1 text-xs"
                          onClick={() => del(std._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="card text-center py-12">
          <div className="text-gray-500">
            <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-lg font-medium">No students found</p>
            <p className="text-sm">No student records are available at the moment.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Disp