import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'

import Home from './Components/Home/Home'
import FacultyList from './Components/Faculty/FacultyList'
import StudentList from './Components/Student/StudentList'

import Account from './Components/Account/Account'

const MainRouter= createBrowserRouter([
  {path:'login',Component:Login},
  {path:'signup',Component:Signup, children:[
    {path:'account',Component:Account},
  ]},
  {path:'dashboard',Component:Dashboard, children:[
    {path:'home',Component:Home},
    {path:'faculty',Component:FacultyList},
    {path:'student',Component:StudentList}
  ]},
  {path:'',Component:Login}
])


const App = () => {
  return (
    <>
      <RouterProvider router={MainRouter}/> 
    </>
  )
}

export default App
