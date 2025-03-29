import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ProfessionalInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    experience: '',
    skills: '',
    linkedinUrl: '',
    githubUrl: '',
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store data in localStorage or state management
    const dataToStore = {
      ...formData,
      resume: formData.resume ? formData.resume.name : null
    };
    localStorage.setItem('mentorProfessionalInfo', JSON.stringify(dataToStore));
    navigate('/mentor-registration/login');
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
            Professional Information :
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              required
              name="experience"
              label="Experience"
              value={formData.experience}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              required
              name="skills"
              label="Skills"
              value={formData.skills}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              required
              name="linkedinUrl"
              label="LinkedIn URL"
              value={formData.linkedinUrl}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              name="githubUrl"
              label="Github URL (if fits your Domain)"
              value={formData.githubUrl}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
            <Button
              component="label"
              fullWidth
              variant="outlined"
              startIcon={<CloudUploadIcon />}
              sx={{ 
                mb: 3,
                color: 'text.secondary',
                borderColor: 'rgba(0, 0, 0, 0.23)',
                '&:hover': {
                  borderColor: 'text.primary',
                }
              }}
            >
              Upload your resume *
              <input
                type="file"
                hidden
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />
            </Button>
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

export default ProfessionalInfo; 