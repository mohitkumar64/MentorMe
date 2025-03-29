import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  FiberManualRecord as FiberManualRecordIcon,
} from '@mui/icons-material';

interface MentorStats {
  sessions: number;
  rating: number;
  reviews: number;
}

interface Session {
  title: string;
  mentee: string;
  status: 'ongoing' | 'completed' | 'scheduled';
}

interface Request {
  mentee: string;
  title: string;
  description: string;
}

interface Mentee {
  name: string;
  skills: string[];
  domain: string;
}

const MentorDashboard = () => {
  // Mock data - replace with actual data from your backend
  const mentorStats: MentorStats = {
    sessions: 24,
    rating: 4.8,
    reviews: 12,
  };

  const ongoingSessions: Session[] = [
    { title: 'Career Guidance Session', mentee: 'Sarah Parker', status: 'ongoing' },
    { title: 'Career Guidance Session', mentee: 'Sarah Parker', status: 'ongoing' },
    { title: 'Career Guidance Session', mentee: 'Sarah Parker', status: 'ongoing' },
  ];

  const requests: Request[] = [
    {
      mentee: 'Vasu Bansal',
      title: 'ML Doubt Help',
      description: 'I have a query related to AML domain...',
    },
    {
      mentee: 'Vasu Bansal',
      title: 'ML Doubt Help',
      description: 'I have a query related to AML domain...',
    },
  ];

  const mentees: Mentee[] = [
    {
      name: 'Vasu Bansal',
      skills: ['ML', 'Deep ML'],
      domain: 'Computer Vision',
    },
    {
      name: 'Purvisha',
      skills: ['ML', 'Deep ML'],
      domain: 'Computer Vision',
    },
  ];

  return (
    <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Mentor Dashboard
      </Typography>

      {/* Mentor Profile Section */}
      <Paper sx={{ p: 2, mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
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
            <Typography variant="h6">{mentorStats.reviews}</Typography>
            <Typography variant="body2" color="text.secondary">Reviews</Typography>
          </Box>
        </Box>
      </Paper>

      <Grid container spacing={3}>
        {/* Ongoing Sessions Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Ongoing Sessions
            </Typography>
            <List>
              {ongoingSessions.map((session, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon sx={{ color: 'success.main', fontSize: 12 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={session.title}
                      secondary={session.mentee}
                    />
                  </ListItem>
                  {index < ongoingSessions.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Requests Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Requests
            </Typography>
            <List>
              {requests.map((request, index) => (
                <React.Fragment key={index}>
                  <ListItem
                    secondaryAction={
                      <Stack direction="row" spacing={1}>
                        <IconButton edge="end" color="success">
                          <CheckCircleIcon />
                        </IconButton>
                        <IconButton edge="end" color="error">
                          <CancelIcon />
                        </IconButton>
                      </Stack>
                    }
                  >
                    <ListItemText
                      primary={request.mentee}
                      secondary={
                        <>
                          <Typography variant="body2">{request.title}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {request.description}
                            <Typography
                              component="span"
                              color="primary"
                              sx={{ cursor: 'pointer' }}
                            >
                              ...more
                            </Typography>
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  {index < requests.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Mentees Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Mentees - Mentored by Me
            </Typography>
            <List>
              {mentees.map((mentee, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={mentee.name}
                      secondary={
                        <>
                          <Typography variant="body2">
                            {mentee.skills.join(', ')}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {mentee.domain}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  {index < mentees.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MentorDashboard; 