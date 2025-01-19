import React from 'react'
import EmployeeHeader from '../DashboardComp/EmployeeHeader'
import EmpTaskListNum from '../DashboardComp/EmpTaskListNum'
import Tasklist from '../TaskList/TaskList'



export const EmployeeDashboard = ({ changeUser, data }) => {
  return (
    <div className='px-8 py-8 bg-black h-full'>
      <div>
        <EmployeeHeader changeUser={changeUser} data={data} />
      </div>
      <div>
        <EmpTaskListNum data={data} />
      </div>
      <div>
        <Tasklist data={data} />
      </div>
    </div>
  );
};
