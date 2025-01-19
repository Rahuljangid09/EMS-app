import React, { useContext } from "react";
import EmployeeHeader from "../DashboardComp/EmployeeHeader";
import AdminDashList from "../DashboardComp/AdminDashList";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";



const Admindashboard = (props) => {

  const [userData,setUserData]=useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [asignTo, setAsignTo] = useState("")
  const [category, setCategory] = useState("")

  const [newTask, setNewTask] = useState({})

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('task created')

    setNewTask({taskTitle,taskDate,taskDescription,category,active:false,failed:false,completed:false,newTask:true})
    // console.log(setNewTask)
    const data=userData
    console.log(data);

    data.forEach(function(elem){
      if(asignTo==elem.firstname){
        elem.tasks.push(newTask)
        elem.taskSummary.newTask= elem.taskSummary.newTask + 1
      }
    })
    setUserData(data)
    localStorage.setItem("employees", JSON.stringify(data));

    setAsignTo('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')
  }
  return (
    <>
    <div className="p-5 h-full w-screen bg-black">
      <EmployeeHeader changeUser={props.changeUser}/>

      <div className=" mt-7  py-3 px-8 rounded-xl bg-[#222222] ">
      <form onSubmit={(e) => handleSubmit(e)} className="flex justify-between items-start">

          <div className="w-1/2">
            <div>
              <h2 className="text-sm mb-0.5">Task Title</h2>
              <input value={taskTitle}
              onChange={(e)=>setTaskTitle(e.target.value)}
              className="w-4/5 py-1 px-2 border-[1px] border-white text-sm bg-black rounded mb-4" type="text" placeholder="Make a UI Design" />
            </div>
            <div>
              <h2 className="text-sm mb-0.5">Date</h2>
              <input value={taskDate}
              onChange={(e)=>setTaskDate(e.target.value)}
              className="w-4/5 py-1 px-2 border-[1px] border-white text-sm bg-black rounded mb-4" type="date"  />
            </div>
            <div>
              <h2 className="text-sm mb-0.5">Asign To</h2>
              <input value={asignTo}
              onChange={(e)=>setAsignTo(e.target.value)}
              className="w-4/5 py-1 px-2 border-[1px] border-white text-sm bg-black rounded mb-4" type="text" placeholder="Employee Name" />
            </div>
            <div>
              <h2 className="text-sm mb-0.5" >Category</h2>
              <input value={category}
              onChange={(e)=>setCategory(e.target.value)}
              className="w-4/5 py-1 px-2 border-[1px] border-white text-sm bg-black rounded mb-4" type="text" placeholder="design,dev,etc" />
            </div>
          </div>

          <div className="w-1/2">
            <div>
              <h2 className="text-sm mb-0.5">Description</h2>
              <textarea value={taskDescription}
              onChange={(e)=>setTaskDescription(e.target.value)}
              className="w-4/5 py-1 px-2 border-[1px] border-white text-sm bg-black rounded mb-4" cols="40" rows="8"></textarea>
            </div>
            <button className="w-4/5 py-2 px-2  text-sm bg-green-500 rounded " >Create Task</button>
          </div>
        </form>
      </div>

     <AdminDashList/> 


    </div>
    
   </>
  );
};

export default Admindashboard;
