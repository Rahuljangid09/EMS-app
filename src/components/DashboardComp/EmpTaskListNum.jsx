import React from 'react'

const EmpTaskListNum = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      <div className="bg-red-400 h-32 rounded-xl px-6 py-5">
        <h2 className="font-semibold text-2xl">{data.taskSummary.newTask}</h2>
        <h3 className="font-semibold text-xl">New Task</h3>
      </div>
      <div className="bg-blue-400 h-32 rounded-xl px-6 py-5">
        <h2 className="font-semibold text-2xl">{data.taskSummary.completed}</h2>
        <h3 className="font-semibold text-xl">Completed</h3>
      </div>
      <div className="bg-green-400 h-32 rounded-xl px-6 py-5">
        <h2 className="font-semibold text-2xl">{data.taskSummary.active}</h2>
        <h3 className="font-semibold text-xl">Accepted</h3>
      </div>
      <div className="bg-yellow-400 h-32 rounded-xl px-6 py-5">
        <h2 className="font-semibold text-2xl">{data.taskSummary.failed}</h2>
        <h3 className="font-semibold text-xl">Failed</h3>
      </div>
    </div>
  );
};


export default EmpTaskListNum
