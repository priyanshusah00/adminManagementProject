import React from 'react'
import Header from './Header'
import TaskListNumbers from './TaskListNumbers'
import TaskList from './TaskList'

const employeeDashboard = (props) => {
  return (
    <div className='p-5 bg-[#1C1C1C] h-screen '>

      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data}/>

    </div>
  )
}

export default employeeDashboard