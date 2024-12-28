import React from "react";

const UpcomingTasks = () => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Upcoming</h2>
        <div className="relative">
          <button className="px-3 py-1 text-sm bg-gray-200 rounded-lg flex items-center">
            Today
            <span className="ml-2">▼</span>
          </button>
        </div>
      </div>

      {/* Date Section */}
      <p className="text-gray-500 mt-2">Monday, 28 February</p>

      {/* Timeline Section */}
      <div className="mt-4 space-y-4">
        {/* Time Slots */}
        <div className="flex items-start">
          <div className="text-gray-400 w-10 text-right pr-4">8:00</div>
        </div>

        <div className="flex items-start">
          <div className="text-gray-400 w-10 text-right pr-4">8:30</div>
          {/* Event Card */}
          <div className="relative flex-1">
            <div className="absolute h-full w-1 bg-orange-500 left-0 top-0"></div>
            <div className="ml-4 p-4 bg-orange-100 rounded-lg">
              <h3 className="text-orange-500 font-semibold">Machine Learning</h3>
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <span className="material-icons text-lg mr-2">schedule</span>
                1 hour
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <span className="material-icons text-lg mr-2">person</span>
                Wade Warren
              </div>
            </div>
          </div>
        </div>

        

        {/* Event Details Card */}
        <div className="flex items-start">
          
          <div className="ml-4 p-4 bg-blue-50 rounded-lg shadow-md flex-1">
            <h3 className="text-blue-600 font-semibold">Machine Learning</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {/* Left Column */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="material-icons text-lg mr-2">person</span>
                  Eleanor Pena
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="material-icons text-lg mr-2">schedule</span>
                  10:30 - 11:30am
                </div>
              </div>
              {/* Right Column */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="material-icons text-lg mr-2">event</span>
                  Mon, February 28
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="material-icons text-lg mr-2">videocam</span>
                  Google Meet
                </div>
              </div>
            </div>
            <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Join to the class
            </button>
          </div>
        </div>

        <div className="flex items-start">
          <div className="text-gray-400 w-10 text-right pr-4">11:00</div>
        </div>

        <div className="flex items-start">
          <div className="text-gray-400 w-10 text-right pr-4">11:30</div>
          {/* Event Card */}
          <div className="relative flex-1">
            <div className="absolute h-full w-1 bg-purple-500 left-0 top-0"></div>
            <div className="ml-4 p-4 bg-purple-100 rounded-lg">
              <h3 className="text-purple-500 font-semibold">Machine Learning</h3>
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <span className="material-icons text-lg mr-2">schedule</span>
                1 hour
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <span className="material-icons text-lg mr-2">person</span>
                Eleanor Pena
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTasks;
