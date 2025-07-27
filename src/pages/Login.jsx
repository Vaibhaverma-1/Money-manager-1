import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input.jsx";
import { validateEmail } from "../util/validation.js";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import { AppContext } from "../context/AppContext.jsx";
import { LoaderCircle } from "lucide-react";
import Header from "../components/Header.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(AppContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password");
      setIsLoading(false);
      return;
    }

    setError("");

    try {
      const response = await axiosConfig.post(API_ENDPOINTS.LOGIN, {
        email,
        password,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        setUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        console.error("Something went wrong", error);
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-white text-gray-800">
      <Header />
      <div className="flex-grow w-full flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-md shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-700 text-center mb-2">
            Welcome Back
          </h3>
          <p className="text-sm text-gray-600 text-center mb-6">
            Please enter your details to sign in
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              placeholder="name@example.com"
              type="text"
            />

            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="********"
              type="password"
            />

            {error && (
              <p className="text-red-600 text-sm text-center bg-red-50 p-2 rounded-md">
                {error}
              </p>
            )}

            <button
              disabled={isLoading}
              type="submit"
              className={`w-full py-3 text-white text-lg font-medium rounded-md transition-all flex items-center justify-center gap-2 ${
                isLoading
                  ? "bg-green-600 opacity-60 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
            >
              {isLoading ? (
                <>
                  <LoaderCircle className="animate-spin w-5 h-5" />
                  Logging in...
                </>
              ) : (
                "LOGIN"
              )}
            </button>

            <p className="text-sm text-center mt-6 text-gray-700">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-green-700 hover:underline"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
