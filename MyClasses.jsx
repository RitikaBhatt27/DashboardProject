import React from "react";

const MyClasses = () => {
  return (
    <div className="p-6 bg-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">My Classes</h2>
        <a href="#" className="text-orange-500 text-sm font-medium hover:underline">
          See All
        </a>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <img
              src="inter.jpg"
              alt="Interaction Engineering"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-medium">Interaction Engineering</h3>
              <p className="text-sm text-gray-500">Wade Warren</p>
            </div>
          </div>
          {/* Icons Section */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <img
                src="w1.jpg"
                alt="Classes"
                className="w-5 h-5 mr-2"
              />
              8 Class
            </div>
            <div className="flex items-center">
              <img
                src="w2.jpg"
                alt="Credits"
                className="w-5 h-5 mr-2"
              />
              3 Credit
            </div>
            <div className="flex items-center">
              <img
                src="w3.jpg"
                alt="Students"
                className="w-5 h-5 mr-2"
              />
              30 Student
            </div>
            <div className="flex items-center">
              <img
                src="w4.jpg"
                alt="Hours"
                className="w-5 h-5 mr-2"
              />
              5 hours/Week
            </div>
          </div>
          {/* View Class Button */}
          <button className="w-full py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded">
            View Class
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <img
              src="m.jpg"
              alt="Machine Learning"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-medium">Machine Learning</h3>
              <p className="text-sm text-gray-500">Eleanor Pena</p>
            </div>
          </div>
          {/* Icons Section */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <img
                src="w1.jpg"
                alt="Classes"
                className="w-5 h-5 mr-2"
              />
              6 Class
            </div>
            <div className="flex items-center">
              <img
                src="w2.jpg"
                alt="Credits"
                className="w-5 h-5 mr-2"
              />
              4 Credit
            </div>
            <div className="flex items-center">
              <img
                src="w3.jpg"
                alt="Students"
                className="w-5 h-5 mr-2"
              />
              32 Student
            </div>
            <div className="flex items-center">
              <img
                src="w4.jpg"
                alt="Hours"
                className="w-5 h-5 mr-2"
              />
              4 hours/Week
            </div>
          </div>
          {/* View Class Button */}
          <button className="w-full py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded">
            View Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;