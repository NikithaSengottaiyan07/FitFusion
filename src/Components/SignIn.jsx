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

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    setEmail(event.target.value);
    setError(false); // Reset error state on input change
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    console.log(email);
    if (!email.trim()) {
      setError(true); // Set error state if email is empty or only whitespace
      return;
    }
    
    // Retrieve email and password from local storage
    const storedEmail = localStorage.getItem('signupEmail');
    const storedPassword = localStorage.getItem('signupPassword');
    
    // Check if email and password match stored values
    if (email === storedEmail && password === storedPassword) {
      // Navigate to the desired webpage
      window.location.href = '/Home'; // Replace '/desired-webpage' with your desired URL
      console.log("success");
    } else {
      // If email or password doesn't match, alert user
      alert('Invalid email or password');
    }
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <br/><br/><br/><br/>
      </div>
      <Container component="main" maxWidth="xs" style={{backgroundColor:'black',borderRadius:'12px',paddingBottom:'60px',paddingTop:'5px',paddingRight:'60px',paddingLeft:'60px'}}>
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
          <b  style={{color:'white'}}>Sign In</b>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}  style={{color:'white'}}>
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              style={{backgroundColor:'#cccccc83'}}
            />
            <FormControlLabel
              control={<Checkbox value="remember"  style={{color:'white'}} />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:'orangered'}}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to='/SignupAcc' style={{color:'white'}}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
