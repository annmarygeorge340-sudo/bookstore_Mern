import React from 'react'

function UploadStatus() {
  return (
    <div className='p-30 my-15 shadow rounded'>
   {/*duplicate book status  */}
   <div className='bg-gray-100 rounded p-5 mt-4'>
<div className='md:grid grid-cols-[3fr_1fr]'>
    {/* 1st section */}
<div className='px-4'>
    <h1 className='text-2xl'>Title</h1>
    <h1 className='text-xl '>Author</h1>
    <h1 className='text-lg text-blue-500'>$Price</h1>
    <h1 className='font-bold mt-5'>Abstract:</h1>
    <div className='flex mt-10'>
<img width={'100px'} height={'100px'} src="https://t4.ftcdn.net/jpg/15/42/78/73/360_F_1542787314_EJF9wn3UH9Nd8BvShQ6VSKKYgaSQByuS.png" alt="pending" />
<img width={'120px'} height={'120px'}  src="https://png.pngtree.com/png-vector/20250801/ourmid/pngtree-distressed-red-sold-out-stamp-with-stars-png-image_16958308.webp" alt="sold" />
<img width={'120px'} height={'120px'}  src="https://png.pngtree.com/png-clipart/20250712/original/pngtree-approved-stamp-green-vector-png-image_21312252.png" alt="approved" />
    </div>
</div>

{/* 2nd section */}
<div className='px-5 mt-5 '>
    <img className='w-full' src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrQ_TltvUBo-9Iz1wyO_BNT72Np0EBz5pk_NY4TkTIlFVPs1aQ3N5gqPnf6Gioq0waRkQJJKMo5zuVeHIt25qjPgxeQBi3O4w9aFqZPegG" alt="no img" />

<div className='flex justify-end'>
    <button className='bg-red-600 text-white font-bold px-3 py-2 rounded mt-5'>DELETE</button>
    </div>
</div>

</div>
   </div>
    </div>
  )
}

export default UploadStatus
