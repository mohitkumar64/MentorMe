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

const EducationalInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    collegeName: '',
    semester: '',
    program: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store data in localStorage or state management
    localStorage.setItem('mentorEducationalInfo', JSON.stringify(formData));
    navigate('/mentor-registration/professional');
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
            Educational Information :
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              required
              name="collegeName"
              label="College Name"
              value={formData.collegeName}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              required
              name="semester"
              label="Semester"
              value={formData.semester}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              required
              name="program"
              label="Program/ Department"
              value={formData.program}
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
              Next →
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default EducationalInfo; 