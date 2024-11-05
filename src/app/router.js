import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import SignInPage from './pages/Signin';

export default function router() { // Capitalize the function name
  return (
    <Routes>
      <Route index element={<DashboardPage />} />
      <Route path="login" element={<SignInPage />} />
    </Routes>
  );
}
