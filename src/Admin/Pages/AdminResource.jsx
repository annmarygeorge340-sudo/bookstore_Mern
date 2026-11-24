import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
function AdminResource() {
  return (
    <>
    <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        {/* 1section */}
       <div className='col-span-1'>
        <AdminSidebar/>
       </div>
       {/* 2nd section */}
       <div className='col-span-4'>
        admin collections

       </div>
       </div>
       <Footer/>
      

    </>
  )
}

export default AdminResource
