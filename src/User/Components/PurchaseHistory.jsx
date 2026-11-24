import React from 'react'

function PurchaseHistory() {
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
<img width={'150px'} height={'150px'} src="https://static.vecteezy.com/system/resources/thumbnails/023/630/157/small/web-button-icon-purchase-button-png.png" alt="purchased" />
    </div>
</div>

{/* 2nd section */}
<div className='px-5 mt-5 '>
    <img className='w-full' src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrQ_TltvUBo-9Iz1wyO_BNT72Np0EBz5pk_NY4TkTIlFVPs1aQ3N5gqPnf6Gioq0waRkQJJKMo5zuVeHIt25qjPgxeQBi3O4w9aFqZPegG" alt="no img" />

</div>

</div>
   </div>
    </div>
  )
}

export default PurchaseHistory
