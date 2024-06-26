import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Forgot from "./pages/forgot";
import Reset from "./pages/reset";
import Home from "./pages/home";
import Categories from "./pages/categories";
import Users from "./pages/users";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}
