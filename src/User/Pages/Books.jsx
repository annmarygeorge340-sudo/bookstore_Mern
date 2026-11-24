import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import Header from '../Components/Header'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
  const [toggle,setToggle] = useState(false)
  return (
    <>
    <Header/>
      <div className='flex flex-col justify-center items-center my-5'>
        <h1 className='font-bold text-3xl my-5'>All Books</h1>
        <div>
          <input type="text" className='border border-gray-300 w-100 p-2' placeholder='Search by Book title' />
          <button className='bg-cyan-800 text-white ms-5 p-2 rounded'>Search</button>
        </div>
      </div>

      {/* grid filter and book card */}
      <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10 '>
        <div className='col-span-1'>
<div className='flex justify-between'>
  <h1 className='font-bold text-2xl'>Filter</h1>
  <button onClick={()=>setToggle(!toggle)} className='text-2xl md:hidden'><FaBars/></button>
</div>
{/* filter category */}

<div className={toggle? 'block':'hidden md:block'}>
  <div className='mt-3'>
    <input name='filtering' type="radio" id='no-filter' />
    <label className='ms-2' htmlFor="no-filter">All</label>
    </div>
     {/* duplicate filter category */}
    <div>
    <div className='mt-3'>
    <input name='filtering' type="radio" id='no-filter2' />
    <label className='ms-2' htmlFor="no-filter2">Category</label>
    </div>
    </div>
   </div>
   {/* bpoook card */}
</div>

<div className='col-span-3'>
<div className='md:grid grid-cols-4 mt-5'>
  {/* duplicate according to the book */}
  <div className='shadow rounded  p-3 m-4'>
    <img width={'100%'} height={'300px'} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrQ_TltvUBo-9Iz1wyO_BNT72Np0EBz5pk_NY4TkTIlFVPs1aQ3N5gqPnf6Gioq0waRkQJJKMo5zuVeHIt25qjPgxeQBi3O4w9aFqZPegG" alt="bookcard" />
    <div className='flex flex-col justify-center items-center mt-4'>
      <h2 className='text-blue-700 font bold text-xl'>Author</h2>
      <h3 className='tex-lg mt-2'>Title</h3>
      <Link to={'/view/:id'} className='bg-cyan-600 text-white p-2 rounded mt-2 font-bold ' >View Book</Link>
    </div>

  </div>
</div>

</div>
</div>
<Footer/>
    </>
  )
}

export default Books
