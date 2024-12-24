import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const defaultTheme = createTheme();

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [error1, setError1] = useState(false);
  const handleChange1 = (event1) => {
    const { value } = event1.target;
    setFirstName(value);
    
    // Check if the value is empty and set error state accordingly
    setError1(value.trim() === '');
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
    setError(false); // Reset error state on input change
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    if (!email.trim()) {
      setError(true); // Set error state if email is empty or only whitespace
      return;
    }
    
    // Store email and password in local storage
    localStorage.setItem('signupEmail', email);
    localStorage.setItem('signupPassword', password);
    
    // Redirect to signin page after signup
    window.location.href = '/LoginAcc';
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <div><br/><br/></div>
      <Container component="main" maxWidth="xs" style={{backgroundColor:'black',borderRadius:'12px',paddingBottom:'60px',paddingTop:'2px',paddingRight:'60px',paddingLeft:'60px'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'orangered' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <b  style={{color:'white'}}>Sign Up</b>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} style={{color:'white'}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField
              autoComplete="given-name"
              name="firstName"
              required  // Make the TextField required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              style={{ backgroundColor: '#cccccc83' }}
              value={firstName}
              onChange={handleChange1}
              error={error1}  // Set error state based on validation
              helperText={error1 ? 'First name is required' : ''}
            />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  style={{backgroundColor:'#cccccc83'}}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              style={{ backgroundColor: '#cccccc83' }}
              value={email}
              onChange={handleChange}
              error={error}
              helperText={error ? 'Email is required' : ''}
            />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  style={{backgroundColor:'#cccccc83'}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" style={{color:'white'}} />}
                  label="Receive updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:'orangered'}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to='/' style={{color:'white'}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <div><br/><br/><br/></div>
    </ThemeProvider>
  );
}
