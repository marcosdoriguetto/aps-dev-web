import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import { useAuthToken } from "./contexts/UserAuth.contexts";

import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";

import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  const { authToken } = useAuthToken();

  return (
    <BrowserRouter>
      <Routes>
        {authToken && (
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route element={<Dashboard />} path="/dashboard" />
                </Routes>

                <Footer />
              </>
            }
          />
        )}

        <Route element={<SignIn />} path="/" />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
