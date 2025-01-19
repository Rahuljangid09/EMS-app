import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const submitHandler=(e)=>{
       e.preventDefault()
       console.log(Email)
       console.log(Password)
       handleLogin(Email,Password)
       
       setEmail('');
       setPassword('');
  }

  return (
    <div className='flex items-center justify-center bg-black h-screen w-screen'>
        <div className=' bg-[#1a1b1a] py-20 px-12 rounded-2xl'>
             <form onSubmit={(e)=>{
              submitHandler(e)
             }}
              className='flex flex-col items-center justify-center'>
                <input 
                value={Email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                className='text-center text-gray-500 text-xl px-2 py-2   bg-black rounded-full' type="email" placeholder='Enter you email' />
                <input
                 value={Password}
                 onChange={(e)=>{
                   setPassword(e.target.value)
                 }} 
                className='text-center px-2 py-2 text-xl  bg-black rounded-full mt-4' type="password" placeholder='Enter your password'/>
                <button className=' px-5 py-2 text-xl bg-emerald-600 mt-5 rounded-full '>Login</button>
             </form>
        </div>
     
    </div>
  )
}

export default Login
