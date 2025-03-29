import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Rating,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

interface MentorCard {
  name: string;
  department: string;
  university: string;
  rating: number;
}

const MenteeDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [aiMessage, setAiMessage] = useState('');

  // Mock data
  const mentorStats = {
    sessions: 24,
    rating: 4.8,
    badges: 12,
  };

  const mentors: MentorCard[] = [
    { name: 'Mentor Name', department: 'Computer Science', university: 'MIT', rating: 4.8 },
    { name: 'Mentor Name', department: 'Computer Science', university: 'MIT', rating: 4.8 },
    { name: 'Mentor Name', department: 'Computer Science', university: 'MIT', rating: 4.8 },
    { name: 'Mentor Name', department: 'Computer Science', university: 'MIT', rating: 4.8 },
  ];

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleAISubmit = () => {
    // Implement AI chat functionality
    console.log('AI message:', aiMessage);
    setAiMessage('');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Mentee Dashboard
      </Typography>

      {/* Stats Section */}
      <Paper 
        sx={{ 
          p: 2, 
          mb: 4, 
          display: 'flex', 
          alignItems: 'center',
          gap: 2,
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ width: 56, height: 56 }}>MK</Avatar>
        <Box>
          <Typography variant="h6">Mohit Kumar</Typography>
          <Typography variant="body2" color="text.secondary">
            Mentor
          </Typography>
        </Box>
        <Box sx={{ ml: 'auto', display: 'flex', gap: 4 }}>
          <Box textAlign="center">
            <Typography variant="h6">{mentorStats.sessions}</Typography>
            <Typography variant="body2" color="text.secondary">Sessions</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">{mentorStats.rating}</Typography>
            <Typography variant="body2" color="text.secondary">Rating</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">{mentorStats.badges}</Typography>
            <Typography variant="body2" color="text.secondary">Badges</Typography>
          </Box>
        </Box>
      </Paper>

      {/* Mentor Search Section */}
      <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Find your perfect mentor
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Search mentors by name, skills, or expertise..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
          <Button 
            variant="contained" 
            onClick={handleSearch}
            sx={{
              bgcolor: '#9333EA',
              color: 'white',
              '&:hover': {
                bgcolor: '#7928CA',
              },
              borderRadius: 2,
              px: 4,
            }}
          >
            Search
          </Button>
        </Box>

        <Grid container spacing={2}>
          {mentors.map((mentor, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: 'none',
                  borderRadius: 2,
                }}
              >
                <Avatar sx={{ width: 48, height: 48, mr: 2 }} />
                <CardContent sx={{ flex: 1, p: '0 !important' }}>
                  <Typography variant="subtitle1">{mentor.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {mentor.department} | {mentor.university}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                    <Rating value={mentor.rating} precision={0.1} size="small" readOnly />
                    <Typography variant="body2">{mentor.rating}</Typography>
                  </Box>
                </CardContent>
                <Button 
                  variant="text" 
                  color="primary"
                  sx={{ color: '#9333EA' }}
                >
                  View Details
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* ScholarSync AI Section */}
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          ScholarSync AI
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Paper 
            sx={{ 
              p: 2, 
              bgcolor: '#f8f9fa',
              borderRadius: 2,
              border: '1px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography>Hello buddy! What's going?</Typography>
          </Paper>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              placeholder="Ask AI Anything..."
              value={aiMessage}
              onChange={(e) => setAiMessage(e.target.value)}
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                }
              }}
            />
            <Button 
              variant="contained"
              onClick={handleAISubmit}
              sx={{
                bgcolor: '#9333EA',
                color: 'white',
                '&:hover': {
                  bgcolor: '#7928CA',
                },
                borderRadius: 2,
                px: 4,
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default MenteeDashboard; 