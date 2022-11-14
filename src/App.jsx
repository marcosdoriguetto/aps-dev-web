import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import { useAuth } from "./contexts/UserAuth.contexts";

import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";

import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SignUp } from "./pages/SignUp";

function App() {
  const { auth } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {auth && (
          <Route
            path="/*"
            element={
              <>
                <Header />

                <Routes>
                  <Route element={<Dashboard />} path="/dashboard" />
                </Routes>

                <Footer />
              </>
            }
          />
        )}

        <Route element={<SignIn />} path="/" />
        <Route element={<SignUp />} path="/register" />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
