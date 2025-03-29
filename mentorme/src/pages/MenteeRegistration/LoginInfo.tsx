import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Get previously stored mentee information
      const personalInfo = JSON.parse(localStorage.getItem('menteePersonalInfo') || '{}');
      const educationalInfo = JSON.parse(localStorage.getItem('menteeEducationalInfo') || '{}');

      // Combine all registration data
      const registrationData = {
        ...personalInfo,
        ...educationalInfo,
        username: formData.username,
        password: formData.password,
        role: 'mentee',
      };

      // Log the complete registration data (replace with API call later)
      console.log('Complete Mentee Registration Data:', registrationData);

      // Clear localStorage
      localStorage.removeItem('menteePersonalInfo');
      localStorage.removeItem('menteeEducationalInfo');

      // Navigate to login page
      navigate('/login');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            borderRadius: 2,
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Mentee Registration
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 3 }}>
            Login Information :
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              required
              name="username"
              label="Username"
              value={formData.username}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              required
              name="password"
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              required
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              sx={{ mb: 3 }}
              error={Boolean(error)}
              helperText={error}
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                type="button"
                variant="outlined"
                onClick={() => navigate('/mentee-registration/educational')}
                sx={{
                  flex: 1,
                  py: 1.5,
                  color: '#9333EA',
                  borderColor: '#9333EA',
                  '&:hover': {
                    borderColor: '#7928CA',
                  },
                }}
              >
                ← Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  flex: 1,
                  bgcolor: '#9333EA',
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#7928CA',
                  },
                  py: 1.5,
                }}
              >
                Complete Registration
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginInfo; 