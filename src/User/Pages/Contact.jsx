import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
    <Header/>
  <div className='md:px-20 my-5 p-5'>
<h1 className='text-center font-bold text-3xl'>Contact</h1>
<p className='text-justify'>At our Bookstore, we believe that books are more than just pages filled with words; they are a gateway to knowledge, imagination, inspiration, and endless possibilities. Our goal is to create a wonderful reading experience by bringing together a wide collection of books for every kind of reader. Whether you are searching for the latest bestsellers, inspiring stories, educational materials, fiction, novels, or timeless classics, we are always happy to help you find the perfect book. Your satisfaction and love for reading mean everything to us. If you have any questions regarding our books, orders, availability, pricing, or services, please don't hesitate to get in touch with us. We also welcome your valuable feedback and suggestions, as they help us improve and serve you better. Our friendly team is always ready to assist you and make your shopping experience simple, comfortable, and enjoyable. Stay connected with us and let us help you discover your next favourite book. Because every great journey begins with a book!❤️</p>
</div>
{/* Grid-address,number,email */}
<div className='md:grid grid-cols-3 items-center mt-5 p-5 md:px-40 md:mt-0'>
    {/*location  */}
   <div className='flex items-center'>
      <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
        <FaLocationPin/>
         </div>
       <p className='ms-5'>123  Main Street,Apt 4B, Anytown,CA 91234</p>
   </div>

    {/*E-mail*/}
   <div className='flex items-center'>
      <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
        <FaEnvelope/>
         </div>
       <p className='ms-5'>contact@bookstore.com</p>
   </div>

    {/*email  */}
   <div className='flex items-center'>
      <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
        < FaPhone/>
         </div>
       <p className='ms-5'>+908 367 890</p>
   </div>
    </div>
{/* message and map */}
<div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40'>
{/* message */}
<div className='bg-gray-200 text-center p-5'>
  <h1 className='font-semi-bold text-2xl'>Send Us Message!</h1>
<form>
  <div className='mb-5 mt-5'>
    <input type="text" placeholder='Name' className='bg-white w-full p-2' />
  </div>
   <div className='mb-5 mt-10'>
    <input type="email" placeholder='E-mail' className='bg-white w-full p-2' />
  </div>
   <div className='mb-5 mt-5'>
    <textarea type="text" placeholder='Message' className='bg-white w-full p-2' />
  </div>
   <div className='my-5'>
   <button className='bg-gray-800 text-white w-full p-2 rounded flex justify-center items-center'>Submit <FaPaperPlane className='m-1'/></button>
  </div>
</form>
</div>


{/* map */}

<div className='w-full my-5'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.975217565075!2d76.3400676747941!3d10.01890359008765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Software%20Training%20institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1795065790680!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>
  <Footer/>
    </>
  )
}

export default Contact
