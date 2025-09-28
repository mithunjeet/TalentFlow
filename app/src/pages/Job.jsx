import React, { useEffect, useState } from "react";
import JobCard from "../components/job/jobcard";
import axios from "axios";

export default function Job() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("");

  const apiUrl =
    import.meta.env.VITE_ENABLE_MIRAGE === "true"
      ? "/api"
      : import.meta.env.VITE_API_URL;

  const LoadJob = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/LoadJob`);
      setJobs(data);
    } catch (error) {
      console.error("Failed to load jobs:", error);
    }
  };

  useEffect(() => {
    LoadJob();
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.role.toLowerCase().includes(filter.toLowerCase()) ||
      job.skill.toLowerCase().includes(filter.toLowerCase()) ||
      job.company.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white shadow-sm py-16">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-gray-600 text-lg">
            Thousands of opportunities from top companies, updated daily.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="max-w-2xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <input
          type="text"
          placeholder="Search by role, skill, or company..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full pl-4 pr-4 py-4 border border-gray-300 rounded-full shadow-md
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        />
      </section>

      {/* Job Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredJobs?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredJobs.map((job, idx) => (
              <div
                key={idx}
                className="transition-transform transform hover:-translate-y-2 hover:shadow-xl"
              >
                <JobCard job={job} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500 py-24">
            <img
              src="https://illustrations.popsy.co/gray/job-search.svg"
              alt="No jobs found"
              className="h-48 mb-6"
            />
            <p className="text-xl">No jobs match your search. Try another filter.</p>
          </div>
        )}
      </section>
    </main>
  );
}




