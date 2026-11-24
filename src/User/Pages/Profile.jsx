import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import UplodeBooks from '../Components/UploadBooks'
import Edit from '../Components/Edit'
import UploadStatus from '../Components/UploadStatus'
import PurchaseHistory from '../Components/PurchaseHistory'






function Profile() {
  const [currentTab,setCurrentTab]=useState(1)
  return (
    <>
    <Header/>
 <div style={{height:'200px'}} className='bg-black'></div>
<div style={{height:'230px',width:'230px',borderRadius:'50%',marginLeft:'75px',marginTop:'-130px'}} className='bg-white p-4'>
<img style={{height:'200px',width:'200px',borderRadius:'50%',}} src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="no img" />
</div>
 <div className='flex justify-between px-20 mt-5 '>
  <div className='flex items-center items-center'>
    <h1 className='font-bold md:text-3xl text-2xl'>USERNAME</h1>
    <FaCircleCheck className='text-blue-500 ms-3'/>
  </div>
  <Edit/>
 </div>
 <p className='text-xl font-bold px-20'> Bio</p>
 <p className='text-justify md:px-20 px-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt autem consequuntur nesciunt magni, placeat ab temporibus iure inventore consectetur quibusdam fuga. Exercitationem a pariatur odio. Voluptas praesentium nesciunt blanditiis corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque numquam quae eos, tempora hic autem provident reprehenderit. Sunt harum et dignissimos temporibus recusandae quidem vel architecto ratione exercitationem provident.</p>
  <div className='flex justify-center items-center my-8 font-bold text-lg'>
        <p onClick={()=>setCurrentTab(1)} className={currentTab==1 ?'p-4 border-gray-300 border-l border-t border-r cursor-pointer rounded-xl':'p-4 border-gray-300 border-b cursor-pointer rounded'}>Upload Book</p>
        <p onClick={()=>setCurrentTab(2)} className={currentTab==2 ?'p-4 border-gray-300 border-l border-t border-r cursor-pointer rounded-xl':'p-4 border-gray-300 border-b cursor-pointer rounded'}>Upload Book Status</p>
        <p onClick={()=>setCurrentTab(3)} className={currentTab==3 ?'p-4 border-gray-300 border-l border-t border-r cursor-pointer rounded-xl':'p-4 border-gray-300 border-b cursor-pointer rounded'}>Purchase History</p>
      </div>
      {currentTab==1 && <div> <UplodeBooks/> </div>}
      {currentTab==2 && <div><UploadStatus/></div>}
      {currentTab==3 && <div><PurchaseHistory/></div>}
<Footer/>
    </>
  )
}

export default Profile
