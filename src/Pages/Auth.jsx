import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, Links } from 'react-router-dom'

function Auth({insideRegister}) {
const [togglePasswordType,setTogglePasswordType] = useState(false)

  return (
   
     <div className='w-full min-h-screen flex justify-center items-center  bg-[url(/landingimg.png)] bg-cover bg-center text-white'>
<div className='p-10'>
  <h1 className='font-bold text-3xl text-center'>BOOKSTORE</h1>
  <div style={{width:'400px'}} className='bg-black text-white  p-5 flex justify-center items-center flex-col my-5'>
    <div style={{width:'80px',height:'80px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
      <FaUser className='text-3xl'/>
    </div>
    <h1 className='text-2xl'>{insideRegister? "Register":"login"}</h1>
<form>
{/* username */}
{
  insideRegister &&
  <input type="text" placeholder='username' className='bg-white text-black p-2 my-5 w-full rounded' />
}
{/* Email */}
<input type="e-mail" placeholder='E-mail' className='bg-white text-black p-2 mb-5 w-full rounded' />

{/* Password */}
<div className='flex items-center'>
  <input type={togglePasswordType ? "text":"password"} placeholder='Password' className='bg-white text-black p-2 mb-5 w-full rounded' />
 
  {
    togglePasswordType?
 <FaEyeSlash onClick={()=>setTogglePasswordType(!togglePasswordType)} className='text-gray-500 cursor-pointer' style={{marginLeft:'-25px',marginTop:'-20px'}}/>
    :
<FaEye onClick={()=>setTogglePasswordType(!togglePasswordType)} className='text-gray-500 cursor-pointer' style={{marginLeft:'-25px',marginTop:'-20px'}}/>
  }
</div>
{/* FORGOT PASSWORD */}
<div className='flex justify-between mb-5' >
  <p className='text-xs text-orange-200 me-2'>Never Share Your Password with others</p>
{
  !insideRegister &&
  <button className='text-xs underline'>Forgot Password</button>
}
</div>

{/* login register function */}
<div className='my-5 text-center'>
{
  insideRegister?
  <button className='bg-green-800 w-full p-2 rounded'>Register</button>
  :
  <button className='bg-green-800 w-full p-2 rounded'>Login</button>
}
</div>
{/* Google authentication */}
{
  !insideRegister && 
  <div className='text-center'>
    <p>------------------------Or-------------------------</p>
    <div className='flex justify-center items-center w-fukk mt-2'>Google Authentication</div>
  </div>
}
{/* new /alredy user */}
<div className='text-center'>
  {
insideRegister?
 <p className='text-blue-500'>Existing User ? <Link to={'/login'} className='ms-4 underline'>Login</Link></p>
:
<p className='text-blue-500'>New User ? <Link to={'/register'} className='ms-4 underline'>Register</Link></p>
 }

</div>


</form>
 </div>
</div>
     </div>
  
  )
}

export default Auth
