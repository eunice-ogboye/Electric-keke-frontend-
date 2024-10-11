import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useGlobalAuthContext } from "../contexts/AuthContext";
import AdminLayout from "./AdminLayout";
import ChatConnect from "../pages/chat/ChatConnect";
import CustomerCare from "../pages/xp-pages/CustomerCare";
import Driver from "../pages/driver/Driver";
import FinancialManagement from "../pages/admin/FinancialManagement";
import Notification from "../pages/xp-pages/Notification";
import Profile from "../pages/profile-pages/Profile";
import Riders from "../pages/xp-pages/Riders";
import RiderIndex from "../pages/xp-pages/RiderIndex";
// import RiderIndexTest from "../pages/xp-pages/RiderIndexTest";
import RiderInfo from "../pages/xp-pages/RiderInfo";
import Schedule from "../pages/schedule/Schedule";
import Settings from "../pages/profile-pages/Settings";
import Tracking from "../pages/tracking/Tracking";
import Transaction from "../pages/transaction/Transaction";
import UserManagement from "../pages/admin/UserManagement";
import InProgress from "../pages/not-found/InProgress";

const ProtectedRoute = () => {
  const { isAuthenticated } = useGlobalAuthContext();

  return isAuthenticated ? (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="user-management" element={<UserManagement />} />
        <Route path="financial-management" element={<FinancialManagement />} />
        <Route path="settings" element={<InProgress />} />
      </Route>
      <Route path="/driver/:id" element={<Driver />} />
      <Route path="/schedule-ride" element={<Schedule />} />
      <Route path="/riders" element={<Riders />}>
        <Route index element={<RiderIndex />} />
        <Route path=":id" element={<RiderInfo />} />
      </Route>
      <Route path="/notification" element={<Notification />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/customer-care" element={<CustomerCare />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/chat" element={<ChatConnect />} />
    </Routes>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;
