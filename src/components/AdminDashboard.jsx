import React, { useContext } from "react";
import Header from "./Header";
import CreateTask from "./CreateTask";
import AllTask from "./AllTask";
import { AuthContext } from "../context/AuthProvider";

const AdminDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="w-full h-screen p-5">
      <div>
        <Header changeUser={props.changeUser} />
        <CreateTask setUserData={setUserData} userData={userData} />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;