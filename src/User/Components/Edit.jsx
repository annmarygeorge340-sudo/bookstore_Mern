import React, { useState } from 'react'
import { FaPen, FaUserEdit } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { useSearchParams } from 'react-router-dom'

function Edit() {
  const[offCanvas,setOffCanvas]=useState(false)
  return (
    <div>
        {/* Button */}
      <button onClick={()=>setOffCanvas(true)} className='bg-black text-white p-2 rounded font-bold flex items-center border hover:bg-white hover:text-black cursor-pointer justify-center '><FaUserEdit className='text-2xl me-2'/> Edit</button>
      {/* off Canvas */}
     { offCanvas &&
    <div>
        <div className='bg-gray-500/75 inset-0 fixed w-full h-full'></div>
        <div className='bg-white h-full z-50 w-90 fixed top-0 left-0'>
          {/* head */}
          <div className='flex justify-between mb-5 bg-black text-white p-3 text-2xl'>
            <h1>Update User Profile</h1>
            <FaX onClick={()=>setOffCanvas(false)}/>
          </div>
          {/* body */}
  <div className='flex justify-center item-center my-5 flex-col'>
    <label htmlFor="">
      <input type="file" id='userProfile' hidden/>
      <img style={{height:'100px',width:'100px',borderRadius:'50%'}} src="https://img.magnific.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="user" />
      <button style={{marginLeft:'60px',marginTop:'-25px'}} className='bg-black text-white px-2 py-2 rounded'><FaPen/></button>
    </label>
    {/* username */}
    <div className='mt-10 mb-3 w-full px-5'>
      <input type="text" placeholder='Username' className='w-full bg-gray-200 rounded p-2' />
    </div>
      {/* password */}
      <div className=' mb-3 w-full px-5'>
      <input type="text" placeholder='password' className='w-full bg-gray-200 rounded p-2' />
    </div>
      {/* new password */}
      <div className=' mb-3 w-full px-5'>
      <input type="text" placeholder='new password' className='w-full bg-gray-200 rounded p-2' />
    </div>
      {/* bio */}
      <div className='mb-3 w-full px-5'>
      <input type="text" placeholder='bio ' className='w-full bg-gray-200 rounded p-2' />
    </div>
    {/* reset & update */}
    <div className='flex justify-end mt-5 px-5 w-full'>
      <button className='bg-yellow-500 text-white px-5 py-2 font-bold rounded'>RESET</button>
      <button className='bg-green-500 text-white px-5 py-2 font-bold rounded ms-3'>UPDATE</button>
    </div>
  </div>
  </div>
    </div>
}
    </div>
  )
}

export default Edit
