import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (<>
    <div className='h-[400px]  mt-10'>
      
    <div id='tasklist' className='pl-5 overflow-x-auto h-full flex items-center gap-5 justify-start flex-nowrap'>
      
      {data.tasks.map((elem, idx)=>{
       if(elem.active){
        return <AcceptTask key={idx} data={elem}/>
       }
       if(elem.newTask){
        return <NewTask key={idx} data={elem}/>
       }
       if(elem.completed){
        return <CompleteTask key={idx} data={elem}/>
       }
       if(elem.failed){
        return <FailedTask key={idx} data={elem}/>
       }
      })}
     </div>
    </div>
    </>
  )
}

export default Tasklist
