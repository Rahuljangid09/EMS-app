import React, { useEffect } from 'react'
import { useState } from 'react'




const EmployeeHeader = (props) => {

  const [username, setUsername] = useState('')

  useEffect(() => {
    if (!props.data) {
      setUsername("admin");
    } else {
      setUsername(props.data.firstname);
    }
  }, [])
  
  const logOut=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h2 className='text-2xl font-medium'>Hello, <br /><span className='text-3xl font-semibold'>{username}👋</span></h2>
      <button onClick={logOut} className='bg-red-600 px-3 py-2 rounded-md hover:scale-105 transition-transform  hover:shadow-gray-500 hover:shadow-md'>LogOut</button>
    </div>
  )
}

export default EmployeeHeader

