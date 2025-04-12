import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import EmployeeDashboard from "./components/EmployeeDashboard";
import AdminDashboard from "./components/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleSignUp = (name, email, password) => {
    if (userData.some((user) => user.email === email)) {
      alert("User already exists!");
      return;
    }

    const newUser = {
      email,
      password,
      firstName: name, // Store the name provided during sign-up
      tasks: [],
      taskCounts: { newTask: 0, active: 0, completed: 0, failed: 0 },
    };

    const updatedUserData = [...userData, newUser];
    setUserData(updatedUserData);
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    alert("Sign Up Successful! Please log in.");
  };

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={
            !user ? (
              <Login handleLogin={handleLogin} />
            ) : (
              <Navigate to={user === "admin" ? "/admin" : "/employee"} />
            )
          }
        />

        {/* Sign Up Route */}
        <Route path="/signup" element={<SignUp handleSignUp={handleSignUp} />} />

        {/* Admin Dashboard Route */}
        <Route
          path="/admin"
          element={
            user === "admin" ? (
              <AdminDashboard changeUser={setUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Employee Dashboard Route */}
        <Route
          path="/employee"
          element={
            user === "employee" ? (
              <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;