import React from "react";
import { NavLink, Outlet, useNavigate, useLocation, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeClass = "text-red-600 font-semibold border-b-2 border-red-600 pb-1";
  const inactiveClass = "text-gray-700 hover:text-blue-600";

  function handleLogout(e) {
    e.preventDefault();
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;
    navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 flex-wrap">
          <h1 className="text-2xl font-bold text-blue-600">TALENTFLOW</h1>
          <nav className="space-x-6 hidden md:flex items-center">
            <NavLink to="/" end className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>Home</NavLink>
            <NavLink to="/assessment" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>Assessments</NavLink>
            <NavLink to="/jobs" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>Apply Jobs</NavLink>
            <NavLink to="/admin" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>Admin</NavLink>
            <NavLink to="/setting" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>Setting</NavLink>
            <button onClick={handleLogout} className="text-gray-700 hover:text-blue-600 ml-4">Logout</button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow">
        {location.pathname === "/" ? (
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Smarter Hiring with <span className="text-blue-600">TalentFlow</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                A modern hiring platform to manage jobs, track candidates, and run assessments —
                everything your HR team needs in one place.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() => navigate("/jobs")}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow transition"
                >
                  Browse Jobs
                </button>
                <button
                  onClick={() => navigate("/assessment")}
                  className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 shadow transition"
                >
                  Take Assessments
                </button>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
              {/* Jobs Board */}
              <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600 font-bold text-2xl">
                  J
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">Jobs Board</h3>
                <p className="text-gray-600 mb-6">
                  Create, edit, and archive jobs. Organize postings with filters and drag-and-drop sorting.
                </p>
                <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center text-gray-400 font-semibold">
                  [Jobs Screenshot]
                </div>
              </div>

              {/* Candidates */}
              <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center text-green-600 font-bold text-2xl">
                  C
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-4">Candidates</h3>
                <p className="text-gray-600 mb-6">
                  Track candidates, search profiles, attach notes, and manage pipelines effortlessly.
                </p>
                <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center text-gray-400 font-semibold">
                  [Candidates Screenshot]
                </div>
              </div>

              {/* Assessments */}
              <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center text-purple-600 font-bold text-2xl">
                  A
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-4">Assessments</h3>
                <p className="text-gray-600 mb-6">
                  Build quizzes and forms per job, preview assessments, and evaluate candidates efficiently.
                </p>
                <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center text-gray-400 font-semibold">
                  [Assessments Screenshot]
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white py-16 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to simplify hiring?</h3>
              <p className="mb-6 max-w-xl mx-auto">
                Get started today with TalentFlow and make your recruitment smarter, faster, and easier.
              </p>
              <button
                onClick={() => navigate("/admin")}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Go to Admin Dashboard
              </button>
            </section>
          </>
        ) : (
          <Outlet />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 w-full shadow-inner">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6 text-gray-600">
          <p>&copy; {new Date().getFullYear()} TALENTFLOW. All rights reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <Link to="/PrivacyPolicy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link to="/Terms" className="hover:text-blue-600">Terms</Link>
            <Link to="/Support" className="hover:text-blue-600">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}


