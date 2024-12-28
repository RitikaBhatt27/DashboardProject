import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="text-gray-400"> </div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(
        <div
          key={day}
          className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-blue-100 rounded-md cursor-pointer"
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="p-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        {/* Search Bar */}
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
            <i className="fas fa-search"></i>
          </span>
        </div>

        {/* Bell Icon and Avatar */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
            <i className="fas fa-bell text-gray-600"></i>
          </div>

          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
             alt="Avatar"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
      </div>

      {/* Calendar Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Calendar Navigation */}
        <div className="flex items-center justify-between mb-4">
          {/* Month and Year on Left */}
          <div className="text-lg font-semibold text-gray-700">
            {currentDate.toLocaleString("default", { month: "long" })}, {currentDate.getFullYear()}
          </div>

          {/* Arrows on Right */}
          <div className="flex items-center space-x-4">
            <button onClick={handlePrevMonth} className="text-gray-600 hover:text-gray-800">
              &lt;
            </button>
            <button onClick={handleNextMonth} className="text-gray-600 hover:text-gray-800">
              &gt;
            </button>
          </div>
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-medium text-gray-600">
              {day}
            </div>
          ))}
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
