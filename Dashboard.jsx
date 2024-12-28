import React from "react";
import SemesterGrade from "./SemesterGrade";
import TodayTasks from "./TodayTasks";
import MyClasses from "./MyClasses";
import Calendar from "./Calendar";
import UpcomingTasks from "./UpcomingTasks";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Left Side: Semester Grade, My Classes, Today Tasks */}
        <div className="left-panel">
          {/* Welcome Section */}
          <div className="welcome-section">
            <h1 className="text-2xl font-bold text-gray-800">
              Hi, Kevin William 👋
            </h1>
            <p className="text-gray-600">Welcome back, nice to see you again!</p>
          </div>

          {/* Semester Grade Section */}
          <SemesterGrade /> {/* Directly using the SemesterGrade component without an extra div */}

          {/* My Classes Section */}
          <section className="section">
            <MyClasses />
          </section>

          {/* Today Tasks Section */}
        
            <TodayTasks />
          
        </div>

        {/* Right Side: Calendar and Upcoming Tasks */}
        <div className="right-panel">
          {/* Calendar Section */}
          <Calendar />

          {/* Upcoming Tasks Section */}
          <UpcomingTasks />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;