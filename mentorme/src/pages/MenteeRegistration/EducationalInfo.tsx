import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EducationalInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    collegeName: '',
    semester: '',
    program: '',
    interests: '',
    academicGoals: '',
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
    localStorage.setItem('menteeEducationalInfo', JSON.stringify(formData));
    navigate('/mentee-registration/login');
  };

  const semesters = Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`);

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
              select
              name="semester"
              label="Current Semester"
              value={formData.semester}
              onChange={handleChange}
              sx={{ mb: 2 }}
            >
              {semesters.map((semester) => (
                <MenuItem key={semester} value={semester}>
                  {semester}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              required
              name="program"
              label="Program/Course"
              value={formData.program}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              required
              name="interests"
              label="Areas of Interest"
              multiline
              rows={2}
              value={formData.interests}
              onChange={handleChange}
              sx={{ mb: 2 }}
              helperText="List your academic interests and subjects you'd like guidance in"
            />
            <TextField
              fullWidth
              required
              name="academicGoals"
              label="Academic Goals"
              multiline
              rows={3}
              value={formData.academicGoals}
              onChange={handleChange}
              sx={{ mb: 3 }}
              helperText="Describe your academic goals and what you hope to achieve through mentorship"
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                type="button"
                variant="outlined"
                onClick={() => navigate('/mentee-registration/personal')}
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
                Next →
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default EducationalInfo; 