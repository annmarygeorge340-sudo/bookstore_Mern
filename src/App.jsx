import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './User/Pages/Home'
import Contact from './User/Pages/Contact'
import Books from './User/Pages/Books'
import Auth from './pages/Auth'
import Profile from './User/Pages/Profile'
import View from './User/Pages/View'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import AdminResource from './Admin/Pages/AdminResource'
import AdminSettings from './Admin/Pages/AdminSettings'
import { useState } from 'react'
import PreLoader from './components/PreLoader'

function App() {
  const [isLoading,setLoading] = useState(true)
  setTimeout(()=>{
setLoading(false)
  },5000)

  return (
    <>
    <Routes>
      <Route path='/' element={isLoading? <PreLoader/> : <Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/books' element={<Books/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth insideRegister/>} />
      <Route path='/profile/:id' element={<Profile/>} />
      <Route path='/view/:id' element={<View/>} />

      <Route path='/admin' element={<AdminDashboard/>} />
      <Route path='/admin/resource' element={<AdminResource/>} />
      <Route path='/admin/settings' element={<AdminSettings/>} />
    </Routes>
    </>
  )
}

export default App