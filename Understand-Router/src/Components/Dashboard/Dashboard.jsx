import React from 'react'
import SideNavBar from '../SideNavBar'
import OtherSideNavBar from '../OtherSideNavBar'

const Dashboard = () => {
  return (
    <div style={{width:'100%',height:'100vh',background:'lightgreen',display:'flex',flexDirection:'row'}}>
      
      <SideNavBar/>
      <OtherSideNavBar/>
  
  </div>
  )
}

export default Dashboard
