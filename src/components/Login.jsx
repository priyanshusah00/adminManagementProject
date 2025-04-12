import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[url(assets/images/image.png)] bg-cover bg-no-repeat bg-center">
      <div className="border-2 rounded-2xl border-emerald-600 p-8 sm:p-10 shadow-lg bg-gray-950 w-full max-w-md">
        <h1 className="text-3xl font-bold text-emerald-500 mb-6 text-center">
          Welcome Back
        </h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-gray-800 border-2 border-emerald-600 font-medium text-lg py-3 px-6 rounded-full placeholder:text-gray-400 text-white focus:ring-2 focus:ring-emerald-500 transition-all duration-300 w-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-gray-800 border-2 border-emerald-600 font-medium text-lg py-3 px-6 rounded-full mt-4 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-emerald-500 transition-all duration-300 w-full"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-6 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-3 px-8 w-full rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            Log in
          </button>
        </form>
        <p className="text-gray-400 text-sm mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-emerald-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;