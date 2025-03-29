import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';
import { authAPI } from '../services/api';

interface AuthResponse {
  token: string;
  user: User;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
  googleLogin: (token: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy credentials for development
const DUMMY_USERS = {
  MENTOR: {
    email: 'mentor@example.com',
    password: 'mentor123',
    userData: {
      id: 'mentor-1',
      name: 'Mohit Kumar',
      email: 'mentor@example.com',
      role: 'mentor' as const,
    }
  },
  MENTEE: {
    email: 'mentee@example.com',
    password: 'mentee123',
    userData: {
      id: 'mentee-1',
      name: 'Mohit Kumar',
      email: 'mentee@example.com',
      role: 'mentee' as const,
    }
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored user data in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      
      // For development: Check against dummy credentials
      if (email === DUMMY_USERS.MENTOR.email && password === DUMMY_USERS.MENTOR.password) {
        const userData = DUMMY_USERS.MENTOR.userData;
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/mentor/dashboard');
        return;
      }

      if (email === DUMMY_USERS.MENTEE.email && password === DUMMY_USERS.MENTEE.password) {
        const userData = DUMMY_USERS.MENTEE.userData;
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/mentee/dashboard');
        return;
      }

      // If credentials don't match dummy data
      throw new Error('Invalid credentials');
      
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: any) => {
    try {
      const response = await authAPI.register(data);
      const { token, user } = response.data as AuthResponse;
      localStorage.setItem('token', token);
      setUser(user);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  const googleLogin = async (token: string) => {
    try {
      const response = await authAPI.googleAuth(token);
      const { user } = response.data as AuthResponse;
      setUser(user);
    } catch (error) {
      console.error('Google login failed:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        googleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext; 