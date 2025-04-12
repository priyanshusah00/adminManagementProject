import React from "react";

const NewTasklist = ({ data, setUserData }) => {
  const handleAcceptTask = () => {
    alert("Task Accepted!");
    setUserData((prevData) =>
      prevData.map((employee) => {
        if (employee.tasks.includes(data)) {
          return {
            ...employee,
            tasks: employee.tasks.map((task) =>
              task === data
                ? { ...task, newTask: false, active: true } 
                : task
            ),
          };
        }
        return employee;
      })
    );
  };

  return (
    <div className="transition-all duration-300 ease-in-out transform hover:scale-102 hover:bg-green-500 flex-shrink-0 h-full w-[350px] p-5 bg-green-400 rounded-xl ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-6">
        <button
          onClick={handleAcceptTask}
          className="bg-blue-500 rounded font-medium py-1 px-2 text-xs"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTasklist;