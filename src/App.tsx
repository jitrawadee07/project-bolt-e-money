import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Onboarding from './pages/Onboarding';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import PhoneLogin from './pages/PhoneLogin';
import OTPVerification from './pages/OTPVerification';
import CreatePIN from './pages/CreatePIN';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phone-login" element={<PhoneLogin />} />
        <Route path="/verify" element={<OTPVerification />} />
        <Route path="/create-pin" element={<CreatePIN />} />
        <Route path="/signup" element={<Navigate to="/welcome" />} />
        <Route path="/dashboard" element={<Navigate to="/welcome" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;