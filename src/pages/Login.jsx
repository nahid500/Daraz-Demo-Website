import { useState } from "react";
import Navbar from "../components/NavBar";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.email === "" || formData.password === "") {
            setError("Please fill in all fields.");
            return;
        }

        // Dummy validation (Replace with actual backend authentication)
        if (formData.email !== "test@example.com" || formData.password !== "password123") {
            setError("Invalid email or password.");
            return;
        }

        setError("");
        console.log("User Logged In:", formData);
        // Redirect to the dashboard or homepage after successful login
    };

    return (
        <>
            <Navbar />

            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <label className="block font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <NavLink to="/forgot-password" className="text-blue-500">
                                Forgot Password?
                            </NavLink>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Login
                        </button>
                    </form>

                    {/* Register Redirect */}
                    <div className="text-center mt-4">
                        <span>Don't have an account? </span>
                        <NavLink to="/register" className="text-blue-500">
                            Register here
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
