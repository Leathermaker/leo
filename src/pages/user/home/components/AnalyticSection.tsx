import React from "react";
import CountUp from "react-countup";

const AnalyticSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-24 px-4 md:px-8 lg:px-16">
      {/* Project Completed */}
      <div className="flex flex-col items-center justify-center bg-red-200/10 p-6 rounded-lg shadow-md">
        <h1 className="text-6xl text-yellow-500 font-bold">
          <CountUp end={12} duration={2} />K+
        </h1>
        <p className="text-gray-700 text-lg mt-2">Project Completed</p>
      </div>

      {/* Industry Experience */}
      <div className="flex flex-col items-center justify-center bg-blue-200/10 p-6 rounded-lg shadow-md">
        <h1 className="text-6xl text-pink-500 font-bold">
          <CountUp end={20} duration={2} />+
        </h1>
        <p className="text-gray-700 text-lg mt-2">Industry Experience</p>
      </div>

      {/* Happy Clients */}
      <div className="flex flex-col items-center justify-center bg-green-200/10 p-6 rounded-lg shadow-md">
        <h1 className="text-6xl text-green-500 font-bold">
          <CountUp end={10} duration={2} />K+
        </h1>
        <p className="text-gray-700 text-lg mt-2">Happy Clients</p>
      </div>

      {/* Awards Winner */}
      <div className="flex flex-col items-center justify-center bg-purple-200/10 p-6 rounded-lg shadow-md">
        <h1 className="text-6xl text-purple-500 font-bold">
          <CountUp end={132} duration={2} />+
        </h1>
        <p className="text-gray-700 text-lg mt-2">Awards Winner</p>
      </div>
    </div>
  );
};

export default AnalyticSection;