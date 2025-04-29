import React, { useState } from 'react';
import {
    Avatar, Button, TextField, Link, Grid, Box,
    Typography, Container, Paper, Alert
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [message, setMessage] = useState('');
    const [type, setType] = useState(''); // success or error
    const navigate = useNavigate();
    const [loading,setloading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {

            setloading(true);
            const res = await axios.post('http://localhost:8000/login', { email, password });
            setType('success');
            setMessage(res.data.message); // "Login successful"
            
            if (res.data && res.data.success) {
                localStorage.setItem("userId", res.data.userId);
                localStorage.setItem("email", email); // ← Use the email from state
                console.log("User ID:", res.data.userId);

                setTimeout(()=>{
                    // setloading(false);
                    navigate('/'); // redirect
                    window.location.reload();
                },1000)
                
            } else {
                setloading(false)
                alert("Invalid credentials");
                
            }
        } catch (err) {
            setType('error');
            setMessage(err.response?.data?.message || 'Something went wrong');
            window.location.reload();
        }
    };

    return (
        <Container component="main" maxWidth="xs" className="mt-5">
            <Paper elevation={5} sx={{ padding: 4, borderRadius: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login to Hotel.com
                    </Typography>

                    {message && (
                        <Alert severity={type} sx={{ mt: 2, width: '100%' }}>
                            {message}
                        </Alert>
                    )}

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    Don't have an account? <b>Sign up</b>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}


