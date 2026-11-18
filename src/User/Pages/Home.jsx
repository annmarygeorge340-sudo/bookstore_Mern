import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header/>
  {/* Hearo section */}
  
<div style={{height:'600px'}} className='flex flex-col justify-center items-center bg-[url(/landingimg.png)] bg-cover text-white'>
<div style={{height:'600px',backgroundColor:'rgba(0,0,0,0.6)'}} className='w-full flex flex-col justify-center items-center'>
  <h1 className='text-6xl font-bold'>Wonderful Gifts</h1>
  <p>Gift your family and friends a book</p>
  <div className='m-9 flex items-center'>
    <input type="text" placeholder='search a book' className='bg-white text-black rounded-3xl w-100 p-2' />
    <FaSearch className='text-gray-500 cursor-pointer' style={{marginLeft:"-40px"}}/>
  </div>
</div>
</div>
{/* NEW ARRIVALS */}
<section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
  <h1 className='text-3Xl font-bold'>NEW ARRIVALS</h1>
  <h1 className='text-4xl my-2'>Explore our Latest Collection</h1>
  <div className='md:grid grid-cols-4 w-full my-10'>
    {/* duplicate according to the books */}
    <div className='shadow rounded p-3 m-4 md:my-0'>
      <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChJtCURe3WEjbQR3L2ypFhXh8e608MtFtvuUBCaMMU5ahUbRbNunHLx0&s=10" alt="book img" />
      <div className='flex flex-col justify-center items-center'>
      <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
      <h3 className='text-lg font-bold'>Title</h3>
      <p className='font bold text-red-500'>$850</p>
    </div>
    </div>
  </div>
  <div className='my-10'>
    <Link to={'/books'} className='bg-black p-3 text-white rounded'>Explore More..</Link>
  </div>
 </section>
{/* AUTHORS */}
<section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40 my-5'>
<div className='text-center'>
  <h2 className='font-bold text-4xl'>FEATURED AUTHOR</h2>
  <h3 className='text-3xl'>Captivates with every word</h3>
  <p className='text-justify my-5 text-xl'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
  <p className='text-justify text-xl'>Our Author Features include:</p>
  <p className='text-justify my-4 text-xl'>✨<span className='font-bold'> Author Profiles : </span>Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>

   <p className='text-justify my-4 text-xl'>✨<span className='font-bold'>📖 Published Works : </span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>

   <p className='text-justify my-4 text-xl'>✨<span className='font-bold'>🎤 Interviews & Insights :</span>
 Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
  </div>
<div className='p-5 '>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeY-sOkjP_mBo6GkWK3rUB9FfHcSWRVm7hnakx2s37Bzot35JCK8c0sqg&s=10" alt="author" />
</div>
</section>

{/* TESTIMOTHINALS */}
<section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
  <h1 className='text-4Xl font-bold'>TESTIMONIALS</h1>
  <h1 className='text-3xl my-2'>See What Others are Saying</h1>
  <div className='flex flex-col justify-center items-center my-5'>
    <img width={'200px'} height={'200px'} style={{borderRadius:'20%'}} src="https://img.magnific.com/free-photo/portrait-young-pretty-woman-sitting-table-trench-coat-working-laptop-co-working-office-wearing-glasses-smiling-happy-positive-workplace_285396-65.jpg?semt=ais_hybrid&w=740&q=80" alt="person img" />
    <h3 className='my-5 text-xl'>Leora Gurcez</h3>
    <p className='text-justify text-xl'>This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>
    </div>
 </section>

    <Footer/>
    </>
  )
}

export default Home
