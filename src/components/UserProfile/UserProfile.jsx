import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button, TextField, Grid, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('userData')); // Fetch user data from localStorage
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [password, setPassword] = useState(''); // State for password
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            // Don't set password here to keep it hidden
        }
    }, [user]);

    const handleEditProfile = () => {
        navigate('/edit-profile'); // Navigate to edit profile page
    };

    return (
        <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Card sx={{ maxWidth: 600, width: '100%', borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                        <Avatar sx={{ width: 80, height: 80 }} alt={name} src="/static/images/avatar/1.jpg" />
                    </Box>
                    <Typography variant="h4" align="center" gutterBottom>
                        User Profile
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                disabled
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                disabled
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                type="password" // Always show as password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                                disabled // Make password non-editable
                                sx={{ mb: 2 }}
                            />
                            <Button onClick={() => setShowPassword((prev) => !prev)} sx={{ mt: 1 }}>
                                {showPassword ? 'Hide' : 'Show'} Password
                            </Button>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                        <Button variant="contained" color="secondary" onClick={handleEditProfile}>
                            Edit Profile
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default UserProfile;
