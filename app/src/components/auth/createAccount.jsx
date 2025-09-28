import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [service, setService] = useState(""); 
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !phone.trim() ||
      !service ||
      !gender 
   
    ) {
      alert("⚠️ All fields are required.");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/user/register`,
        {
          username,
          email,
          password,
          phone,
          gender,
          service,
        }
      );

      setMessage(data?.message);
      console.log("✅ Registered:", data);

      if (data?.message === "OTP sent to email. Verify to complete registration.") {
        navigate("/verifyOtp");
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.error("❌ Registration Error:", err?.response?.data?.error);
      setError(err?.response?.data?.error || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-screen h-screen">
          <h1 className="text-5xl font-bold text-green-600">
            Creating Account <span className="animate-ping">...</span>
          </h1>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
       
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">
              TalentFlow
            </h2>
            <p className="text-center text-gray-600 italic mb-6">
              “Empowering local talent, connecting them to real opportunities.”
            </p>

            <h3 className="text-xl font-semibold text-center mb-4">
              Create Your Account
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />

         
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">-- Select Role --</option>
                <option value="worker">normal</option>
                <option value="employer">Admin</option>
              </select>

         
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
          <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Create Account
              </button>
            </form>

       
            {error && (
              <p className="text-red-600 text-center mt-4 font-semibold">
                {error}
              </p>
            )}

            {/* Success Message */}
            {message && !error && (
              <p className="text-green-600 text-center mt-4 font-semibold">
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

  

