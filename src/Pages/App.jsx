import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignupPage from './SignupPage'
import PacientRegister from './PacientRegister'
import Dashboard from "./Dashboard";
import PacientProfile from "./PacientProfile";
import RealTimeMonitoring from "./RealTimeMonitoring";
import Statistics from "./Statistics";
import Help from "./Help";
import LandingPage from "./Landing";
import TestSocketConnection from "../utils/TestSocketConnection";
import UserSettings from "./Settings";
import ManageMedicines from "./ManageMedicines";
import { AuthProvider } from "../Components/Login/AuthContext";
import ProtectedRoute from "../Components/Login/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="pacientRegister" element={<PacientRegister />} />

        {/* Rutas protegidas */}
        <Route 
          path="home" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="user" 
          element={
            <ProtectedRoute>
              <PacientProfile />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="monitoring" 
          element={
            <ProtectedRoute>
              <RealTimeMonitoring />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="stats" 
          element={
            <ProtectedRoute>
              <Statistics />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/help" 
          element={
            <ProtectedRoute>
              <Help />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/c" 
          element={
            <ProtectedRoute>
              <TestSocketConnection />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/settings" 
          element={
            <ProtectedRoute>
              <UserSettings />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/medicines" 
          element={
            <ProtectedRoute>
              <ManageMedicines />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
