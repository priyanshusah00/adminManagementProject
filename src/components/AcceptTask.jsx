import React from "react";

const AcceptTask = ({ data, setUserData }) => {
  const handleMarkAsCompleted = () => {
    alert("Task Completed");
    setUserData((prevData) =>
      prevData.map((employee) => {
        if (employee.tasks.some((task) => task.taskTitle === data.taskTitle)) {
          return {
            ...employee,
            tasks: employee.tasks.map((task) =>
              task.taskTitle === data.taskTitle
                ? { ...task, active: false, completed: true } // Update task state
                : task
            ),
          };
        }
        return employee;
      })
    );
  };

  const handleMarkAsFailed = () => {
    alert("Task Failed");
    setUserData((prevData) =>
      prevData.map((employee) => {
        if (employee.tasks.some((task) => task.taskTitle === data.taskTitle)) {
          return {
            ...employee,
            tasks: employee.tasks.map((task) =>
              task.taskTitle === data.taskTitle
                ? { ...task, active: false, failed: true } // Update task state
                : task
            ),
          };
        }
        return employee;
      })
    );
  };

  return (
    <div className="transition-all duration-300 ease-in-out transform hover:scale-102 hover:bg-red-500 flex-shrink-0 h-full w-[350px] p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-6 ">
        <button
          onClick={handleMarkAsCompleted}
          className="bg-green-500 rounded font-medium py-1 px-2 text-xs"
        >
          Mark as Completed
        </button>
        <button
          onClick={handleMarkAsFailed}
          className="bg-red-600 rounded font-medium py-1 px-2 text-xs"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;