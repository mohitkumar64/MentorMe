import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import MentorDashboard from './pages/MentorDashboard/MentorDashboard';
import MenteeDashboard from './pages/MenteeDashboard/MenteeDashboard';

// Mentor Registration Steps
import PersonalInfo from './pages/MentorRegistration/PersonalInfo';
import EducationalInfo from './pages/MentorRegistration/EducationalInfo';
import ProfessionalInfo from './pages/MentorRegistration/ProfessionalInfo';
import LoginInfo from './pages/MentorRegistration/LoginInfo';

// Mentee Registration Steps
import MenteePersonalInfo from './pages/MenteeRegistration/PersonalInfo';
import MenteeEducationalInfo from './pages/MenteeRegistration/EducationalInfo';
import MenteeLoginInfo from './pages/MenteeRegistration/LoginInfo';

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

// Role-based protected route
const RoleProtectedRoute: React.FC<{
  children: React.ReactNode;
  allowedRoles: ('mentor' | 'mentee')[];
}> = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Dashboard Routes */}
          <Route
            path="/mentor/dashboard"
            element={
              <RoleProtectedRoute allowedRoles={['mentor']}>
                <MentorDashboard />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/mentee/dashboard"
            element={
              <RoleProtectedRoute allowedRoles={['mentee']}>
                <MenteeDashboard />
              </RoleProtectedRoute>
            }
          />
          
          {/* Mentor Registration Routes */}
          <Route 
            path="/mentor-registration" 
            element={<Navigate to="/mentor-registration/personal" replace />} 
          />
          <Route path="/mentor-registration/personal" element={<PersonalInfo />} />
          <Route path="/mentor-registration/educational" element={<EducationalInfo />} />
          <Route path="/mentor-registration/professional" element={<ProfessionalInfo />} />
          <Route path="/mentor-registration/login" element={<LoginInfo />} />

          {/* Mentee Registration Routes */}
          <Route 
            path="/mentee-registration" 
            element={<Navigate to="/mentee-registration/personal" replace />} 
          />
          <Route path="/mentee-registration/personal" element={<MenteePersonalInfo />} />
          <Route path="/mentee-registration/educational" element={<MenteeEducationalInfo />} />
          <Route path="/mentee-registration/login" element={<MenteeLoginInfo />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
