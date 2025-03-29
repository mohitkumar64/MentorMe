import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Link, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PeopleIcon from '@mui/icons-material/People';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import ForumIcon from '@mui/icons-material/Forum';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Find Your Perfect Mentor
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{ mb: 4 }}
              >
                Connect with experienced mentors who can guide you through your learning journey
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  size="large"
                  sx={{ px: 4 }}
                >
                  Get Started
                </Button>
                <Button
                  component={RouterLink}
                  to="/why-us"
                  variant="outlined"
                  size="large"
                  sx={{ px: 4 }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '500px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LightbulbIcon
                    sx={{
                      fontSize: '300px',
                      color: '#FFD700',
                      filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
                      animation: 'pulse 2s infinite',
                      '@keyframes pulse': {
                        '0%': {
                          transform: 'scale(1)',
                          opacity: 1,
                          filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
                        },
                        '50%': {
                          transform: 'scale(1.1)',
                          opacity: 0.8,
                          filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))',
                        },
                        '100%': {
                          transform: 'scale(1)',
                          opacity: 1,
                          filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
                        },
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '200px',
                      height: '200px',
                      background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, rgba(255, 215, 0, 0) 70%)',
                      borderRadius: '50%',
                      animation: 'ripple 2s infinite',
                      '@keyframes ripple': {
                        '0%': {
                          transform: 'translate(-50%, -50%) scale(1)',
                          opacity: 0.5,
                        },
                        '100%': {
                          transform: 'translate(-50%, -50%) scale(2)',
                          opacity: 0,
                        },
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '300px',
                      height: '300px',
                      background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0) 70%)',
                      borderRadius: '50%',
                      animation: 'ripple 3s infinite',
                      '@keyframes ripple': {
                        '0%': {
                          transform: 'translate(-50%, -50%) scale(1)',
                          opacity: 0.3,
                        },
                        '100%': {
                          transform: 'translate(-50%, -50%) scale(1.5)',
                          opacity: 0,
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: '#000000' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ 
              mb: 2,
              color: '#ffffff',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600
            }}
          >
            Why Choose MentorMe?
          </Typography>
          <Typography
            align="center"
            sx={{ 
              mb: 6,
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  bgcolor: '#5D3FD3',
                  borderRadius: 2,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <VerifiedUserIcon sx={{ fontSize: 40, color: '#ffffff' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 600 }}>
                    User Verification
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    DigiLocker API integration for official document verification
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  bgcolor: '#5D3FD3',
                  borderRadius: 2,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <PeopleIcon sx={{ fontSize: 40, color: '#ffffff' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 600 }}>
                    Mentor-Mentee Matchmaking
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Personalised profile matching based on interests
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  bgcolor: '#5D3FD3',
                  borderRadius: 2,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <VideoChatIcon sx={{ fontSize: 40, color: '#ffffff' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 600 }}>
                    One-on-One Sessions
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Mentors guide mentees via live sessions
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  bgcolor: '#5D3FD3',
                  borderRadius: 2,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <ForumIcon sx={{ fontSize: 40, color: '#ffffff' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 600 }}>
                    Community Q&A Hub
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Interactive community forum where mentees post queries
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  bgcolor: '#5D3FD3',
                  borderRadius: 2,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <ReviewsIcon sx={{ fontSize: 40, color: '#ffffff' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 600 }}>
                    Electronics reviews
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Verified mentors provide authentic product reviews
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  bgcolor: '#5D3FD3',
                  borderRadius: 2,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <SchoolIcon sx={{ fontSize: 40, color: '#ffffff' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 600 }}>
                    Education Loan & Scholarship Portal
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Centralised space with verified opportunities
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box 
        sx={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          bgcolor: '#1A1A1A',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/logo.png"
                alt="MentorMe"
                sx={{
                  height: { xs: '100px', sm: '110px', md: '120px' },
                  width: 'auto',
                  mb: 4,
                  filter: 'brightness(1.1)',
                }}
              />
              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <IconButton 
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{ 
                    color: '#fff',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                    },
                    width: '48px',
                    height: '48px',
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 28 }} />
                </IconButton>
                <IconButton 
                  component="a"
                  href="https://twitter.com"
                  target="_blank"
                  sx={{ 
                    color: '#fff',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                    },
                    width: '48px',
                    height: '48px',
                  }}
                >
                  <TwitterIcon sx={{ fontSize: 28 }} />
                </IconButton>
                <IconButton 
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                  sx={{ 
                    color: '#fff',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                    },
                    width: '48px',
                    height: '48px',
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 28 }} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Link
                  component={RouterLink}
                  to="/about"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': { 
                      color: '#9333EA',
                      textDecoration: 'none',
                    },
                  }}
                >
                  About
                </Link>
                <Link
                  component={RouterLink}
                  to="/contact"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': { 
                      color: '#9333EA',
                      textDecoration: 'none',
                    },
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  component={RouterLink}
                  to="/terms"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': { 
                      color: '#9333EA',
                      textDecoration: 'none',
                    },
                  }}
                >
                  Terms of Service
                </Link>
                <Link
                  component={RouterLink}
                  to="/privacy"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': { 
                      color: '#9333EA',
                      textDecoration: 'none',
                    },
                  }}
                >
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Link
                  component={RouterLink}
                  to="/pricing"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': { 
                      color: '#9333EA',
                      textDecoration: 'none',
                    },
                  }}
                >
                  Pricing
                </Link>
                <Link
                  component={RouterLink}
                  to="/blog"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': { 
                      color: '#9333EA',
                      textDecoration: 'none',
                    },
                  }}
                >
                  Blog
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 