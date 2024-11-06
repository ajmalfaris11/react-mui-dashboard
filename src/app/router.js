import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import SignInPage from './pages/Signin';
import ProductsPage from './pages/Products';
import OrdersPage from './pages/Orders';
import SettingsPage from './pages/Settings';

export default function router() { // Capitalize the function name
  return (
    <Routes>
      <Route index element={<DashboardPage />} />
      <Route path="login" element={<SignInPage />} />
      <Route path="Products" element={<ProductsPage />} />
      <Route path="Orders" element={<OrdersPage/>} />
      <Route path="Settings" element={<SettingsPage/>} />
    </Routes>
  );
}
