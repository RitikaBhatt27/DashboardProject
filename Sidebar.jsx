import React, { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Educame</h1>
        </div>
        <nav className="mt-6 flex-1">
          <ul className="space-y-4">
            {[
              { name: "Dashboard", icon: "dashboard" },
              { name: "Class", icon: "class" },
              { name: "Schedule", icon: "schedule" },
              {
                name: "Groups",
                icon: "group",
                badge: (
                  <span className="ml-2 text-sm text-white bg-purple-500 px-1 py-1 rounded-full">
                    New
                  </span>
                ),
              },
              { name: "Grades", icon: "grade" },
              {
                name: "Messages",
                icon: "mail",
                badge: (
                  <span className="ml-2 text-sm text-white bg-red-500 px-1 py-1 rounded-full">
                    1
                  </span>
                ),
              },
              { name: "Settings", icon: "settings" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`flex items-center p-3 text-gray-700 rounded-lg relative ${
                    activeItem === item.name
                      ? "bg-pink-100 text-pink-600"
                      : "hover:bg-pink-100 hover:text-pink-600"
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <span className="material-icons text-xl mr-4">{item.icon}</span>
                  {item.name}
                  {item.badge && item.badge}
                  {activeItem === item.name && (
                    <div className="absolute right-0 top-0 h-full w-1 bg-purple-600"></div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Gap and Educame for Mobile Section */}
        <div className="mt-12 p-6 bg-white border-t border-gray-200 rounded-lg shadow-inner">
          <div className="mb-4 text-center">
            <img
              src="../font.jpg"

              alt="Educame Logo"
              className="mx-auto mb-2"
            />
            <h3 className="text-lg font-bold text-gray-800">Educame for Mobile</h3>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Logo"
                className="w-6 h-6 mr-2"
              />
              <span className="text-gray-800">App Store</span>
            </div>
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                alt="Google Play Logo"
                className="w-6 h-6 mr-2"
              />
              <span className="text-gray-800">Google Play</span>
            </div>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full hover:bg-purple-700">Download Now</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
