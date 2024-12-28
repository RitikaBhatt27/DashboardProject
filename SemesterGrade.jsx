import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const SemesterGrade = () => {
  const data = {
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5"],
    datasets: [
      {
        label: "GPA",
        data: [3.2, 3.5, 3.8, 3.6, 3.9],
        backgroundColor: "#ef4444",
        borderRadius: 10,
        barThickness: 30,
        hoverBackgroundColor: "#dc2626",
        barPercentage: 0.9, // Increased for more gap between bars
        categoryPercentage: 0.8, // Increased for more gap between bars
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false,
        },
      },
      y: {
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
        },
        grid: {
          color: "#e5e7eb",
        },
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg shadow-lg max-w-[80rem] mx-auto"> {/* Set width to 70rem */}
      {/* Chart Section */}
      <div className="w-full md:w-[75%] h-96 relative"> {/* Chart container width remains the same */}
        <h2 className="text-lg font-semibold mb-4">Semester's Grade</h2>
        <div className="absolute top-4 right-4 flex gap-2">
          <img src="left.jpg" alt="Left Arrow" className="w-6 h-6 cursor-pointer" />
          <img src="right.jpg" alt="Right Arrow" className="w-6 h-6 cursor-pointer" />
        </div>
        <Bar data={data} options={options} />
      </div>

      {/* Summary Section */}
      <div className="w-full md:w-[25%] flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md"> {/* Summary width reduced slightly */}
        <h3 className="text-lg font-semibold mb-4">Summary</h3>
        <div className="space-y-4"> {/* Reduced gap between elements */}
          <div className="flex items-center gap-4">
            <img src="icon1.jpg" alt="Icon 1" className="w-10 h-10" />
            <div>
              <p className="text-lg font-bold">3.20</p>
              <p className="text-gray-500 text-sm">GPA</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="icon2.jpg" alt="Icon 2" className="w-10 h-10" />
            <div>
              <p className="text-lg font-bold">490</p>
              <p className="text-gray-500 text-sm">Total Grades</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="icon3.jpg" alt="Icon 3" className="w-10 h-10" />
            <div>
              <p className="text-lg font-bold">137</p>
              <p className="text-gray-500 text-sm">Total Credits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemesterGrade;
