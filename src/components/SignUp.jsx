import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignUp = ({ handleSignUp }) => {
  const [name, setName] = useState(""); // New state for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    handleSignUp(name, email, password); // Pass name to handleSignUp
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    alert("Sign Up Successful! Redirecting to Login...");
    navigate("/"); // Redirect to the login page
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[url(assets/images/image.png)] bg-cover bg-no-repeat bg-center">
      <div className="border-2 rounded-2xl border-emerald-600 p-8 sm:p-10 shadow-lg bg-gray-950 w-full max-w-md">
        <h1 className="text-3xl font-bold text-emerald-500 mb-6 text-center">
          Create an Account
        </h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="outline-none bg-gray-800 border-2 border-emerald-600 font-medium text-lg py-3 px-6 rounded-full placeholder:text-gray-400 text-white focus:ring-2 focus:ring-emerald-500 transition-all duration-300 w-full"
            type="text"
            placeholder="Enter your name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-gray-800 border-2 border-emerald-600 font-medium text-lg py-3 px-6 rounded-full mt-4 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-emerald-500 transition-all duration-300 w-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-gray-800 border-2 border-emerald-600 font-medium text-lg py-3 px-6 rounded-full mt-4 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-emerald-500 transition-all duration-300 w-full"
            type="password"
            placeholder="Enter password"
          />
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="outline-none bg-gray-800 border-2 border-emerald-600 font-medium text-lg py-3 px-6 rounded-full mt-4 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-emerald-500 transition-all duration-300 w-full"
            type="password"
            placeholder="Confirm password"
          />
          <button className="mt-6 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-3 px-8 w-full rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;