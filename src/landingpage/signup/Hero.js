// // SignUp.jsx

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// export default function SignUp() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });

//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMsg, setSnackbarMsg] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') return;
//     setSnackbarOpen(false);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const nameRegex = /^[A-Za-z\s]{3,}$/;
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  
//     if (!nameRegex.test(formData.name)) {
//       setSnackbarSeverity('error');
//       setSnackbarMsg("Name must be at least 3 characters long and contain only letters and spaces.");
//       setSnackbarOpen(true);
//       return;
//     }
    
//     // Validate Email
//     if (!emailRegex.test(formData.email)) {
//       setSnackbarSeverity('error');
//       setSnackbarMsg("Email must be a valid Gmail address (e.g. yourname@gmail.com).");
//       setSnackbarOpen(true);
//       return;
//     }
    
//     // Validate Password
//     if (!passwordRegex.test(formData.password)) {
//       setSnackbarSeverity('error');
//       setSnackbarMsg("Password must be at least 8 characters long and include one uppercase letter, one number, and one special character.");
//       setSnackbarOpen(true);
//       return;
//     }
  
//     try {
//       const res = await axios.post('http://localhost:8000/signup', formData);
//       console.log('Signup successful:', res.data);
//       alert("User Registered Successfully!");
//     } catch (err) {
//       console.error('Signup failed:', err);
//       alert("Signup failed. Check console for details.");
//     }
//   };

//   return (
//     <Container className='mt-5' component="main" maxWidth="xs" sx={{ backgroundColor: '#fff', borderRadius: 2, boxShadow: 3, py: 4 }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign Up for Hotel.com
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//           <TextField margin="normal" required fullWidth label="Name" name="name" autoFocus value={formData.name} onChange={handleChange} />
//           <TextField margin="normal" required fullWidth label="Email Address" name="email" value={formData.email} onChange={handleChange} />
//           <TextField margin="normal" required fullWidth name="password" label="Password" type="password" value={formData.password} onChange={handleChange} />
//           <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
//             Sign Up
//           </Button>
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Link href="/login" variant="body2">
//                 Already have an account? <b>Login</b>
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';
import { 
  Avatar, Button, TextField, Link, Grid, Box, Typography, Container, Snackbar, Alert 
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
    // Clear error message as user types
    setErrors(prev => ({
      ...prev,
      [e.target.name]: ''
    }));
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Define regular expressions for validation
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    
    let valid = true;
    let newErrors = { name: '', email: '', password: '' };

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name must be at least 3 characters long and contain only letters and spaces.";
      valid = false;
    }
    
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email must be a valid Gmail address (e.g. yourname@gmail.com).";
      valid = false;
    }
    
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.";
      valid = false;
    }
    
    if (!valid) {
      setErrors(newErrors);
      return;
    }
    

    try {
      // const res = await axios.post('http://localhost:8000/signup', formData);
      const res = await axios.post('http://localhost:8000/signup', formData, {
        validateStatus: () => true // Accept all HTTP status codes
      });
      console.log(res.data.success);
      if (res.status === 201 && res.data.success) {
        localStorage.setItem("email", res.data.email || formData.email);
        setSnackbarSeverity('success');
        setSnackbarMsg("User Registered Successfully!");
        setSnackbarOpen(true);
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        }, 1500);
      } else {
        setSnackbarSeverity('error');
        setSnackbarMsg(res.data.message || "Signup failed");
        setSnackbarOpen(true);
      }
    } catch (err) {
      console.error('Signup failed:', err);
      setSnackbarSeverity('error');
      setSnackbarMsg("Signup failed. Check console for details.");
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs" className='mt-5' sx={{ backgroundColor: '#fff', borderRadius: 2, boxShadow: 3, py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up for Hotel.com
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? <b>Login</b>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{
            width: '100%',
            borderRadius: '16px',
            boxShadow: 6,
            border: '1px solid',
            ...(snackbarSeverity === 'error' && {
              backgroundColor: '#ffebee',
              color: '#c62828',
              borderColor: '#c62828'
            }),
            ...(snackbarSeverity === 'success' && {
              backgroundColor: '#e8f5e9',
              color: '#2e7d32',
              borderColor: '#2e7d32'
            }),
            ...(snackbarSeverity === 'warning' && {
              backgroundColor: '#fff8e1',
              color: '#ff8f00',
              borderColor: '#ff8f00'
            }),
            ...(snackbarSeverity === 'info' && {
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              borderColor: '#1976d2'
            })
          }}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </>
  );
}

