import React, { useState } from "react";
import { Mail, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StaffLogin: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:5005/api/staff/login"; // backend login route

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(API_URL, { email, password });
      if (res.data.success) {
        // Save token in localStorage
        localStorage.setItem("staffToken", res.data.token);
        // Optionally save staff info
        localStorage.setItem("staffInfo", JSON.stringify(res.data.staff));
        navigate("/dashboard");
      } else {
        setError(res.data.message || "Invalid credentials");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl flex overflow-hidden">
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">Staff Login</h1>
          <p className="text-gray-600 mb-6">Employee access portal</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Staff Email"
                required
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 outline-none focus:ring-2 focus:ring-green-500"
              />
              <Mail className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-2 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        <div className="hidden md:block w-1/2">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipPggUAoxlq4k7NjJmNyINotj3n28QpxPyCZHIke=s1360-w1360-h1020-rw"
            alt="Staff Login"
            className="h-full w-full object-cover rounded-r-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
