import React from 'react'
import { Link } from 'react-router-dom'

const SideNavBar = () => {
  return (
    <div style={{width:'10%',height:'100vh',background:'royalblue',padding:'1%'}}>
    <Link to='/dashboard/home' style={{color:'white',display:'block'}}>Home</Link>
    <Link to='/dashboard/faculty' style={{color:'white',display:'block'}}>Faculty</Link>
    <Link to='/dashboard/student' style={{color:'white',display:'block'}}>Student</Link>
    <Link to='/login' style={{color:'white',display:'block'}}>Logout</Link>
    </div>
  )
}

export default SideNavBar
