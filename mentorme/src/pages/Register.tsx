import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  SelectChangeEvent
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const Register = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value);
  };

  const handleRegister = () => {
    if (role === 'mentor') {
      navigate('/mentor-registration');
    } else if (role === 'mentee') {
      navigate('/mentee-registration');
    }
  };

  const handleGoogleAuth = () => {
    // Implement Google Authentication
    console.log('Google Auth');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Join Us
        </Typography>
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel id="role-select-label">Join us as a</InputLabel>
              <Select
                labelId="role-select-label"
                value={role}
                label="Join us as a"
                onChange={handleRoleChange}
              >
                <MenuItem value="mentor">Mentor</MenuItem>
                <MenuItem value="mentee">Mentee</MenuItem>
              </Select>
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={handleRegister}
              disabled={!role}
              sx={{ mb: 2 }}
            >
              Register
            </Button>

            <Box sx={{ textAlign: 'center', my: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{' '}
                <Button color="primary" onClick={() => navigate('/login')}>
                  LOGIN
                </Button>
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }}>or</Divider>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleAuth}
              sx={{ mt: 1 }}
            >
              Continue with Google
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Register; 