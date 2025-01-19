import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>
      <div className='hover:shadow-lg hover:shadow-gray-700 hover:scale-105 transition-transform flex-shrink-0 h-[280px] w-[300px] p-5 bg-blue-500 rounded-xl'>
        <div className='flex items-center justify-between'>
          <h2 className='bg-red-700 px-2 py-1 text-sm rounded '>{data.category}</h2>
          <h3 className='text-sm'>{data.taskDate}</h3>
        </div>
        <h2 className='mt-5 font-semibold text-2xl'>{data.title}</h2>
        <p className='mt-3 text-sm'>{data.description}</p>
        <div className='mt-5 flex justify-start'>
            <button className='bg-blue-500 text-sm px-2 py-1 hover:scale-105 transition-transform rounded hover:shadow-gray-500 hover:shadow-md'>failed</button>
        </div>
      </div>
    </div>
  )
}

export default FailedTask
