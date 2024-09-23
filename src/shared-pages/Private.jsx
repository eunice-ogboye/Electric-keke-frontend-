import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { getItemFromLs } from "../lib/ls";
import { useGlobalAuthContext } from "../contexts/AuthContext";
import AdminLayout from "./AdminLayout";
import UserManagement from "../pages/admin/UserManagement";
import FinancialManagement from "../pages/admin/FinancialManagement";
import Driver from "../pages/driver/Driver";
import Schedule from "../pages/xp-pages/Schedule";
import Riders from "../pages/xp-pages/Riders";
import RiderIndex from "../pages/xp-pages/RiderIndex";
import RiderInfo from "../pages/xp-pages/RiderInfo";
import Tracking from "../pages/tracking/Tracking";
import Profile from "../pages/profile-pages/Profile";
import CustomerCare from "../pages/xp-pages/CustomerCare";
import Transaction from "../pages/transaction/Transaction";
import ChatConnect from "../pages/chat/ChatConnect";
import Settings from "../pages/profile-pages/Settings";

const ProtectedRoute = () => {
  const [user, setUser] = useState(getItemFromLs("user") || null);
  const { isAuthenticated } = useGlobalAuthContext();
  // console.log(user, "from private route");

  // return isAuthenticated ? <Outlet context={user} /> : <Navigate to="/" />;
  return isAuthenticated ? (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="user-management" element={<UserManagement />} />
        <Route path="financial-management" element={<FinancialManagement />} />
        <Route
          path="settings"
          element={
            <div className="flex-center">Will You be working on this</div>
          }
        />
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
