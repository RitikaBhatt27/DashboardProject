import React from "react";

const TodayTasks = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4">Today Tasks</h2>
      <div className="space-y-4">
        {/* Task 1 */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center space-x-4">
            <img
              src="a1.jpg"
              alt="Task Document for HCI"
              className="w-12 h-12 rounded-md"
            />
            <div>
              <p className="font-medium">Task Document for HCI</p>
              <p className="text-sm text-gray-500">UI/UX Design</p>
              <p className="text-sm text-gray-500">February 28</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="a3.jpg"
              alt="Check Icon"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="a5.jpg"
              alt="More Options"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>

        {/* Task 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="a2.jpg"
              alt="Task Analysis for IA"
              className="w-12 h-12 rounded-md"
            />
            <div>
              <p className="font-medium">Task Analysis for IA</p>
              <p className="text-sm text-gray-500">Information Architecture</p>
              <p className="text-sm text-gray-500">March 1</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="a4.jpg"
              alt="Delete Icon"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="a5.jpg"
              alt="More Options"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* Smaller Button */}
      <button className="mt-6 mx-auto block w-40 border border-orange-500 text-orange-500 py-1.5 rounded-md text-center bg-white hover:bg-orange-100">
        View all tasks
      </button>
    </div>
  );
};

export default TodayTasks;
