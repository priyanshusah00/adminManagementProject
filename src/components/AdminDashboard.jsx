import React from "react";
import Header from "./Header";
import CreateTask from "./CreateTask";
import AllTask from "./AllTask";

const adminDashboard = (props) => {
  return (
    <div className="w-full h-screen p-5">
      <div>
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default adminDashboard;
