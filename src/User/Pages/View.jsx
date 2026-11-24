import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {
  const [modal,setModal]= useState(false)
  return (
    <>
    <Header/>
      <div className='md:m-10 m-5'>
        <div className='border shadow border-gray-200 p-5'>
          <div className='md:grid grid-cols-4 gap-x-10'>
            {/* image */}
            <div className='col-span-1'>
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrQ_TltvUBo-9Iz1wyO_BNT72Np0EBz5pk_NY4TkTIlFVPs1aQ3N5gqPnf6Gioq0waRkQJJKMo5zuVeHIt25qjPgxeQBi3O4w9aFqZPegG" alt="view book" />
            </div>
<div className='col-span-3'>
  <div className='flex justify-between'>
    
    <h3 className='font-bold text-4xl'>Title</h3>
    <button onClick={()=>setModal(true)} className='text-gray-400'><FaEye/></button>
    </div>
    <h2 className='text-blue-700 font-bold mt-2 text-xl'>Author</h2>
    <div className='md:grid grid-cols-3 my-10 gap-10'>
      <p className='font-bold'>Publisher:</p>
     <p className='font-bold'>Language:</p>
    <p className='font-bold'>N0.of.Pages:</p>
     <p className='font-bold'>Category:</p>
       <p className='font-bold'>ISBN:</p>
       <p className='font-bold'>Orginal Price:</p>
       <p className='font-bold'>Seller:</p>
      </div>
<div className='my-4 md:my-10 '>
<h4 className='font-bold text-2xl'>Abstract:</h4>
</div>
<div className='flex justify-end'>
  <Link to={'/books'} className='bg-cyan-700  text-white p-3 font-bold flex items-center rounded'> <FaBackward className='me-2'/>Back</Link>
  <button className='bg-lime-500 text-white font-bold ms-3 p-3 rounded'>Buy $567</button>
</div>
</div>
          </div>
        </div>
        {/* modal */}
        { modal &&
          <div onClick={()=>setModal(false)} className='relative z-10 overflow-y-auto '>
          <div className='bg-gray-500/75 fixed inset-0'>
          <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-white rounded w-100 md:w-250'>
              {/* modal title */}
              <div className='bg-black text-white p-3 '>
                Book Images
              </div>
              {/* modal body */}
              <div className='p-5 relative'>
                <p className='flex items-center text-blue-500'> <FaCamera className='me-3'/> Camera Clicks of the Books</p>
                <div className='flex flex-wrap my-5'>
                  {/* duplicate img */}
                  <img className='md:w-75 w-25 md:me-2 mb-3 md:mt-0' src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrQ_TltvUBo-9Iz1wyO_BNT72Np0EBz5pk_NY4TkTIlFVPs1aQ3N5gqPnf6Gioq0waRkQJJKMo5zuVeHIt25qjPgxeQBi3O4w9aFqZPegG" alt="no img" />
                   
                </div>
              </div>
              </div>
          </div>
          </div>
          </div>
        }

      </div>
<Footer/>
    </>
  )
}

export default View
