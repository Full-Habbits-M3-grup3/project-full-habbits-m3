import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

export const Router = () => (
  <Routes>
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/" element={<LoginPage />} />
    {/* <Route path="/dashboard" element={} /> */}
  </Routes>
);
