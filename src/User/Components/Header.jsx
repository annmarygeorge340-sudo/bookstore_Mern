import React, { useState } from 'react'
import {  FaBars, FaFacebook,  FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Header() {
const [toggle,settoggle] = useState(false)

  return (
    <>
    {/* header top part */}
<div className='grid grid-cols-3 p-3'>
    {/* LOGO */}

<div className='flex items-center'>
    <img width={'60px'} height={'60px'} src="https://images.vexels.com/media/users/3/271649/isolated/preview/3a1938ea55f27c31d53b585fcebdcd5e-open-book-cartoon-icon.png" alt="img not found" />
    <h1 className='text-2xl ms-3 font-bold md:hidden'>BookStore</h1>
</div>
    {/* TITTTLE */}
    <div className='md:flex justify-center items-center hidden'>
         <h1 className='text-4xl ms-3 font-bold '>BookStore</h1>
    </div>
    {/* LOGIN */}
<div className='md:flex items-center justify-end hidden'>
    <FaInstagram/>
    <FaTwitter className='mx-2'/>
    <FaFacebook/>
    <Link to={'/login'} className='flex items-center justify-center ms-5 border rounded px-3 py-3 hover:bg-black hover:text-white '><FaUser className='me-1'/>  Login</Link>
</div>

</div>

  {/*header navigation part  */}
<div className='bg-black p-3 text-white md:flex items-center justify-center'>
    <div className='flex justify-between  items-center text-2xl md:hidden'>
        <button onClick={()=>settoggle(!toggle)}><FaBars/></button>
        <Link to={'/login'} className='flex items-center justify-center ms-5 border rounded px-3 py-3 hover:bg-black hover:text-white '><FaUser className='me-1'/>  Login</Link>
    </div>
<ul className={toggle? 'flex flex-col':'md:flex hidden'}>
    <li><Link to={'/'} className='md:mx-4 '>HOME</Link></li>
    <li><Link to={'/books'}  className='md:mx-4 '>BOOKS</Link></li>
    <li><Link to={'/contact'}  className='md:mx-4 '>CONTACT</Link></li>
</ul>
</div>
    </>
  )
}

export default Header
