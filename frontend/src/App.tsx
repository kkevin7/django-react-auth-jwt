import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./presentation/pages/login/LoginPage";
import RegisterPage from "./presentation/pages/register/RegisterPage";
import HomePage from "./presentation/pages/home/HomePage";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </h1>
    </>
  );
}

export default App;
