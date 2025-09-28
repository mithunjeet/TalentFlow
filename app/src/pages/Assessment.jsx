import React from "react";
import { Link } from "react-router-dom";
import { jobs } from "../components/assesmentQuesion";  

export default function Assessment() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Take Assessment</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.map((item) => (
          <Link
            key={item.id}
            to={`/assessment/${item.id}`}
            className="cursor-pointer bg-purple-400 text-white px-4 py-6 rounded-lg shadow-md
                       flex justify-between items-center hover:bg-purple-500 transition"
          >
            <span className="font-semibold">{item.title}</span>
            <span className="text-lg">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
