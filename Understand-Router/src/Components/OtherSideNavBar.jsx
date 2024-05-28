import React from 'react'
import { Outlet } from 'react-router-dom'

const OtherSideNavBar = () => {
  return (
    <div style={{width:'90%',height:'100vh',background:'white',padding:'1%'}}>
    <h1 style={{width:'100%',background:'grey',padding:'10px'}}>iGenie Operations</h1>
    <div style={{width:'100%',height:'85vh',background:'#90eee4',border:'1px solid black'}}>
     <Outlet/>
    </div>
      </div>
  )
}

export default OtherSideNavBar
