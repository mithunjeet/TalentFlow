import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle Back button on error screen
  function handleGoBack(e) {
    e.preventDefault();
    setIsLoading(false);
    setError("");
    setEmail("");
    setPassword("");
    navigate("/");
  }

  // Handle Login
  const handleLogin = async () => {
    setIsLoading(true);

    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password correctly.");
      setIsLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/user/login`,
        { email, password }
      );

      console.log("✅ Login success:", data);

      setEmail("");
      setPassword("");

      if (data?.message === "OTP sent to email. Verify to compplete.") {
        navigate("/verifyOtp");
      } else {
        navigate("/jobs"); // redirect to Jobs board
      }
    } catch (error) {
      console.error("❌ Login Error:", error?.response?.data?.message);
      setError(error?.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  // ──────────────────────────────
  //  Error State Render
  // ──────────────────────────────
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="text-center space-y-6">
          <h1 className="font-semibold text-5xl text-red-600">{error}</h1>
          <button
            className="text-black text-xl hover:underline font-extrabold"
            onClick={handleGoBack}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  // ──────────────────────────────
  // Main UI
  // ──────────────────────────────
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center w-screen h-screen">
          <h1 className="text-5xl font-bold text-green-600">
            Loading <span className="animate-ping">...</span>
          </h1>
        </div>
      ) : (
        <div className="relative min-h-screen flex flex-col md:flex-row">
          {/* ===== Left Section with Branding/Images ===== */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-blue-300 p-10 flex flex-col justify-center items-center space-y-6">
            <h1 className="text-5xl font-extrabold text-blue-900 text-center leading-snug">
              TalentFlow
            </h1>
            <h2 className="text-2xl font-semibold text-blue-800 text-center">
              Bridging Skills and Opportunities
            </h2>
            <p className="text-center text-blue-950 text-lg font-medium max-w-md italic">
              “Helping communities grow by connecting skilled workers to
              meaningful jobs.”
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-md">
              <img
                src="https://img.freepik.com/free-photo/professional-electrician-working_23-2149420759.jpg"
                alt="Electrician"
                className="h-28 w-full object-cover rounded-xl shadow-md"
              />
              <img
                src="https://img.freepik.com/free-photo/portrait-chef-cook-holding-pan_23-2148751390.jpg"
                alt="Chef"
                className="h-28 w-full object-cover rounded-xl shadow-md"
              />
              <img
                src="https://img.freepik.com/free-photo/carpenter-woodworking-tool_53876-104141.jpg"
                alt="Carpenter"
                className="h-28 w-full object-cover rounded-xl shadow-md"
              />
<img
  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
  alt="Construction Worker"
  className="h-28 w-full object-cover rounded-xl shadow-md"
/>
            </div>
          </div>

          {/* ===== Right Section - Login Form ===== */}
          <div className="md:w-1/2 flex items-center justify-center p-10 bg-white">
            <div className="w-full max-w-md space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">Login</h2>
                <p className="text-gray-500 mt-1">
                  Access jobs, track candidates, and manage assessments
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleLogin}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Login
                </button>
              </div>

              <div className="flex justify-between text-sm mt-4">
                <Link to="/register" className="text-blue-500 hover:underline">
                  Create Account
                </Link>
                <Link
                  to="/forgotPassword"
                  className="text-blue-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

