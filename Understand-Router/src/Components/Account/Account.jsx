import React from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
    const navigate = useNavigate()

    const loginHandler = ()=>{
        navigate('/dashboard')}

  return (
    <div style={{width:'100%',height:'100vh',background:'lightblue'}}>
     
 <input type='text' required:true></input>
 <input type='password' required:true></input>
<button onClick={loginHandler}>Login</button>
     
 </div>
  )
}

export default Account

// import React from 'react'

// const Account = () => {
//   return (
//     <div>
//       <h1> dsfiugr</h1>
//     </div>
//   )
// }

// export default Account



