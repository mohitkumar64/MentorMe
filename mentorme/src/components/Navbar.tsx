import React from 'react';
import { AppBar, Toolbar, Button, Box, Container, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <AppBar 
      position="static" 
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '80px' }}>
          <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Box 
              component="img" 
              src="/logo.png" 
              alt="MentorMe" 
              sx={{ 
                height: { xs: '100px', sm: '110px', md: '120px'},
                width: 'auto',
                objectFit: 'contain',
                filter: 'brightness(1.1)',
              }} 
            />
          </RouterLink>
          
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Button 
              component={RouterLink} 
              to="/" 
              sx={{ 
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                '&:hover': {
                  background: 'transparent',
                  opacity: 0.8,
                }
              }}
            >
              HOME
            </Button>
            <Button 
              component={RouterLink} 
              to="/why-us" 
              sx={{ 
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                '&:hover': {
                  background: 'transparent',
                  opacity: 0.8,
                }
              }}
            >
              WHY US?
            </Button>
            <IconButton 
              onClick={toggleTheme}
              sx={{
                color: '#FFFFFF',
                bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Button
              component={RouterLink}
              to="/login"
              sx={{ 
                color: '#9333EA',
                bgcolor: 'transparent',
                border: '2px solid #9333EA',
                borderRadius: '8px',
                px: 3,
                py: 1,
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'rgba(147, 51, 234, 0.1)',
                },
              }}
            >
              LOGIN
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              sx={{ 
                color: '#FFFFFF',
                bgcolor: '#9333EA',
                borderRadius: '8px',
                px: 3,
                py: 1,
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#7928CA',
                },
              }}
            >
              SIGN UP
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 