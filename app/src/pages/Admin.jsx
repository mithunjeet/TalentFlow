import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../dummy/dummayjob"; // make sure file name is correct: dummyjob

export default function Admin() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(data); // use the imported data directly

  const handleCreateJob = () => {
    navigate("/admin/create-job");
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-job/${id}`);
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={handleCreateJob}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow"
        >
          + Create Job
        </button>
      </div>

      <p className="text-gray-600 mb-6">
        All the jobs created by Admin are listed here. Admin can manage them.
      </p>

      {jobs.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-200"
            >
              <img
                src={job.thumbnail}
                alt={job.company}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{job.role}</h2>
                <p className="text-sm text-gray-500">{job.company}</p>
                <p className="text-sm mt-1 text-gray-500">Skills: {job.skill}</p>
                <p className="text-sm mt-1 text-gray-500">{job.description}</p>
                <p className="text-sm mt-1 font-medium text-green-700">
                  Base Salary: {job.baseSalary}
                </p>
                <p className="text-sm font-medium text-green-700">
                  Variable: {job.variableSalary}
                </p>
                <p className="text-sm text-gray-500 mt-1">Extra CTC: {job.ctcExtra}</p>
                <p className="text-sm text-gray-500 mt-1">Last Date: {job.lastDate}</p>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleEdit(job.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 text-sm rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)} // fixed typo: was data.id
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No jobs have been created yet.</p>
      )}
    </div>
  );
}


