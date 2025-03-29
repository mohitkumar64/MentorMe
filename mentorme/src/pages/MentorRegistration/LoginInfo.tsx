import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Get all stored data
    const personalInfo = JSON.parse(localStorage.getItem('mentorPersonalInfo') || '{}');
    const educationalInfo = JSON.parse(localStorage.getItem('mentorEducationalInfo') || '{}');
    const professionalInfo = JSON.parse(localStorage.getItem('mentorProfessionalInfo') || '{}');

    // Combine all data
    const completeData = {
      ...personalInfo,
      ...educationalInfo,
      ...professionalInfo,
      username: formData.username,
      password: formData.password,
    };

    // Here you would typically send this data to your backend
    console.log('Complete registration data:', completeData);

    // Clear localStorage
    localStorage.removeItem('mentorPersonalInfo');
    localStorage.removeItem('mentorEducationalInfo');
    localStorage.removeItem('mentorProfessionalInfo');

    // Navigate to success page or login
    navigate('/login');
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
            Mentor Registration
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 3 }}>
            Login Information :
          </Typography>
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
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: '#9333EA',
                color: 'white',
                '&:hover': {
                  bgcolor: '#7928CA',
                },
                py: 1.5,
              }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginInfo; 