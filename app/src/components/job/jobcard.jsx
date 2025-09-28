import { Link } from "react-router-dom";

export default function JobCard ({ job })  {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-80 flex flex-col">
      <img
        src={job.thumbnail}
        alt={job.role}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold">{job.role}</h3>
        <p className="text-sm text-gray-600 mb-1"><b>Company:</b> {job.company}</p>
        <p className="text-sm text-gray-600 mb-1"><b>Skills:</b> {job.skill}</p>
        <p className="text-sm text-gray-700 mb-2"><b>Description:</b> {job.description}</p>
        <p className="text-sm"><b>Base Salary:</b> {job.baseSalary}</p>
        <p className="text-sm"><b>Variable Salary:</b> {job.variableSalary}</p>
        <p className="text-sm"><b>CTC Extra:</b> {job.ctcExtra}</p>
        <p className="text-sm"><b>Last Date:</b> {job.lastDate}</p>

        
          <Link to="/ApplyJob" className="bg-blue-600 text-white  text-center mt-2 px-4 py-2 rounded hover:bg-blue-700 w-full">
            Apply Now
          </Link>
      
      </div>
    </div>
  );
}