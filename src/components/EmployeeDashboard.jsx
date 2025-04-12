import React, { useContext } from "react";
import Header from "./Header";
import TaskListNumbers from "./TaskListNumbers";
import TaskList from "./TaskList";
import { AuthContext } from "../context/AuthProvider";

const EmployeeDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="p-5 bg-[#1C1C1C] min-h-screen">
      <Header changeUser={props.changeUser} data={props.data} />

      <div className="mt-5">
        <TaskListNumbers data={props.data} />
      </div>

      <div className="mt-5">
        <TaskList data={props.data} setUserData={setUserData} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
