import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashList = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(authData)

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded  overflow-auto w-auto ">

      <div className="bg-gray-700 py-2 px-5 mb-2 flex justify-between rounded sticky top-0 ">
        <h2 className="w-1/5 text-center  ">Employee Name</h2>
        <h2 className="w-1/5 text-center ">New Task</h2>
        <h2 className="w-1/5 text-center ">Active Task</h2>
        <h2 className="w-1/5 text-center ">Completed</h2>
        <h2 className="w-1/5 text-center ">Failed</h2>
      </div>

      <div className="">
      {userData.map((data,idx) => {
        return (
          <div key={idx} className=" border-emerald-300 border-2 py-2 px-5 mb-2 flex justify-between rounded ">
            <h2 className="w-1/5 text-center ">{data.firstname}</h2>
            <h3 className="w-1/5 text-center text-blue-500 ">{data.taskSummary.newTask}</h3>
            <h5 className="w-1/5 text-center text-yellow-500">{data.taskSummary.active}</h5>
            <h3 className="w-1/5 text-center text-green-500">{data.taskSummary.completed}</h3>
            <h5 className="w-1/5 text-center text-red-500">{data.taskSummary.failed}</h5>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default AdminDashList;
