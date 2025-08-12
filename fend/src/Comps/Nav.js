import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
  let obj=useContext(Ct)
  return (
     <nav className="bg-white shadow-medium border-b border-gray-100">
       <div className="container-custom">
         <div className="flex items-center justify-between h-16">
           <div className="flex items-center space-x-8">
             <Link to="/" className="text-primary font-semibold text-lg hover:text-primary/80 transition-colors">
               Result Portal
             </Link>
             <div className="hidden md:flex items-center space-x-6">
               <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
                 Home
               </Link>
               <Link to="/reg" className="text-gray-700 hover:text-primary transition-colors font-medium">
                 Registration
               </Link>
               <Link to="/hal" className="text-gray-700 hover:text-primary transition-colors font-medium">
                 Get Hall Ticket
               </Link>
             </div>
           </div>
           
           <div className="flex items-center space-x-4">
             {obj.store.token===""&& (
               <Link to="/login" className="btn-primary">
                 Login
               </Link>
             )}
             {obj.store.token!==""&& (
               <>
                 <Link to="/disp" className="text-gray-700 hover:text-primary transition-colors font-medium">
                   Students Data
                 </Link>
                 <Link to="/logout" className="text-gray-700 hover:text-error transition-colors font-medium">
                   Logout
                 </Link>
                 <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg font-medium">
                   Admin: {obj.store.name}
                 </div>
               </>
             )}
           </div>
         </div>
         
         {/* Mobile menu */}
         <div className="md:hidden py-4 border-t border-gray-100">
           <div className="flex flex-col space-y-3">
             <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
               Home
             </Link>
             <Link to="/reg" className="text-gray-700 hover:text-primary transition-colors font-medium">
               Registration
             </Link>
             <Link to="/hal" className="text-gray-700 hover:text-primary transition-colors font-medium">
               Get Hall Ticket
             </Link>
           </div>
         </div>
       </div>
    </nav>
    )
}
export default Nav