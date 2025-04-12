import React from "react";
import AcceptTask from "./AcceptTask";
import NewTasklist from "./NewTasklist";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data, setUserData }) => {
  return (
    <div
      id="tasklist"
      className="h-[45%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16 scrollbar-hide"
    >
      {data.tasks.map((task, idx) => {
        if (task.newTask) {
          return <NewTasklist key={idx} data={task} setUserData={setUserData} />;
        } else if (task.active) {
          return <AcceptTask key={idx} data={task} setUserData={setUserData} />;
        } else if (task.completed) {
          return (
            <CompletedTask key={idx} data={task} setUserData={setUserData} />
          );
        } else if (task.failed) {
          return <FailedTask key={idx} data={task} setUserData={setUserData} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default TaskList;