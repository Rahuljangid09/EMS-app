import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data);
  return (
    
    <div>
      <div className='hover:shadow-lg hover:shadow-gray-700 hover:scale-105 transition-transform flex-shrink-0 h-[280px] w-[300px] p-5 bg-orange-500 rounded-xl'>
        <div className='flex items-center justify-between'>
          <h2 className='bg-red-700 px-2 py-1 text-sm rounded '>{data.category}</h2>
          <h3 className='text-sm'>{data.taskDate}</h3>
        </div>
        <h2 className='mt-5 font-bold text-2xl'>{data.title}</h2>
        <p className='mt-3 text-sm'>{data.description}</p>
        <div className='flex justify-between mt-5 space-x-2'>
            <button className='bg-green-500 py-1 px-2 text-sm hover:scale-105 transition-transform rounded hover:shadow-gray-500 hover:shadow-md'>Mark as completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm hover:scale-105 transition-transform rounded hover:shadow-gray-500 hover:shadow-md'>Mark as failed</button>
            
        </div>
      </div>
      
    </div>
    
  )
  
}

export default AcceptTask
