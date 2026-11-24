import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UplodeBooks() {
  return (
    <div className='bg-gray-200 p-10 my-20  mx-50'>
     <h1 className='text-center text-2xl font-medium'>   Uplode Book Details</h1>
{/* grid */}
<div className='md:grid grid-cols-2 mt-10 w-full'>
    {/* 1st sec div */}
    <div className='px-5'>
<div className='mb-3'> 
    <input type="text" placeholder='book Title' className='w-full p-2 bg-white rounded' />
</div>

<div className='mb-3'> 
    <input type="text" placeholder='Author' className='w-full p-2 bg-white rounded' />
</div>

<div className='mb-3'> 
    <input type="text" placeholder='Book Cover img url' className='w-full p-2 bg-white rounded' />
</div>

<div className='mb-3'> 
    <input type="text" placeholder='total Pages' className='w-full p-2 bg-white rounded' />
</div>

<div className='mb-3'> 
    <input type="text" placeholder='Orginal Price' className='w-full p-2 bg-white rounded' />
</div>

<div className='mb-3'> 
    <input type="text" placeholder='Discount Price' className='w-full p-2 bg-white rounded' />
</div>

<div className='mb-3'> 
    <textarea type="text" rows={'5'} placeholder='Abstract' className='w-full p-2 bg-white rounded' />
</div>
    </div>
    {/* 2nd div */}
    <div className='px-5'>
<div className='mb-3'> 
    <input type="text" placeholder='publisher' className='w-full p-2 bg-white rounded' />
</div>

<div className='mb-3'> 
    <input type="text" placeholder='ISBN' className='w-full p-2 bg-white rounded' />
</div>

<div className='mb-3'> 
    <input type="text" placeholder='Language' className='w-full p-2 bg-white rounded' />
</div>

<div className='mb-3'> 
    <input type="text" placeholder='Category' className='w-full p-2 bg-white rounded' />
</div>

{/* uplode book img */}
<div className='my-10 flex justify-center items-center'>
    <label htmlFor="BookImages" >
        <input type="file" id='BookImages' hidden />
        <img width={'250px'} height={'250'} src="https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-icon-upload-clipart-blue-button-vector-file-png-image_15952470.png" alt="no img" />
    </label>
</div>
{/* preview uploaded img */}
<div className='flex justify-center items-center'>
    <img width={'70px'} height={'70px'} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrQ_TltvUBo-9Iz1wyO_BNT72Np0EBz5pk_NY4TkTIlFVPs1aQ3N5gqPnf6Gioq0waRkQJJKMo5zuVeHIt25qjPgxeQBi3O4w9aFqZPegG" alt="bookcard" />
<label htmlFor="bookuplode">
    <input type="file" id='bookuplode' hidden/>
    <FaPlus className='text-2xl ms-3 '/>
</label>
</div>
    </div>
</div>
{/* reset and add books */}
<div className='flex md:justify-end mt-10 px-5 justify-center'>
    <button className='bg-taupe-600 text-white px-3 py-2 rounded hover:bg-gray-400 hover:text-gray-800'>RESET</button>
    <button className='bg-indigo-600 text-white px-3 py-2 rounded hover:bg-sky-300 hover:text-blue-800 ms-5'>ADD BOOK DETAILS</button>
</div>
     
    </div>
  )
}

export default UplodeBooks
