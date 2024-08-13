import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout />
              <Home />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Layout />
              <Register />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <Layout />
              <Login />
            </>
          }
        />
        {/* // later here i have to add the auth middleware */}
        <Route
          path="/my-space"
          element={
            <>
              <Layout />
              <Hero />
            </>
          }
        />

        <Route
          path="/analytics"
          element={
            <>
              <Layout />
              <Analytics />
            </>
          }
        />
       
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
