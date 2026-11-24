import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img src="https://webartdevelopers.com/blog/wp-content/uploads/2018/10/CodePen-404-Page.gif" alt="page not found" />
     
<p>Oh Noo!</p>
<h1>Look Like You are Lost </h1>
<p>The page you are looking for is not Available..</p>
<Link to={'/'} className='bg-pink-600 text-white rounded mt-3 px-5 py-2'> HOME</Link>

    </div>
  )
}

export default PageNotFound
