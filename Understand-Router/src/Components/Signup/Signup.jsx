import React from 'react'
import {Outlet, useNavigate,Link} from 'react-router-dom'

const Signup = () => {
 
  return (
    
  <div style={{width:'100%',height:'100vh',background:'lightpink'}}>
    <h1>Signup to go in Dashboard</h1>

    <Link to='account' style={{color:'black',display:'button'}}>Signup</Link> 
    <Outlet></Outlet>
  </div>
  )
}

export default Signup
