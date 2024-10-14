import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button, TextField, Grid, Snackbar, Alert } from '@mui/material';

const EditProfile = () => {
    const user = JSON.parse(localStorage.getItem('userData')); // Fetch user data from localStorage
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar visibility
    const [snackbarMessage, setSnackbarMessage] = useState(''); // State for Snackbar message

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    const handleSave = () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const updatedUser = { ...user, name, email };
        if (password) {
            updatedUser.password = password; // Include password only if provided
        }

        localStorage.setItem('userData', JSON.stringify(updatedUser));
        setSnackbarMessage("Profile updated successfully!"); // Set success message
        setSnackbarOpen(true); // Open the Snackbar
        setError(""); // Clear any previous error
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false); // Close Snackbar
    };

    return (
        <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Card sx={{ maxWidth: 600, width: '100%', borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h4" align="center" gutterBottom>
                        Edit Profile
                    </Typography>
                    {error && <Typography color="error" align="center">{error}</Typography>}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
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
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="New Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Confirm Password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                fullWidth
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                        <Button variant="contained" color="primary" onClick={handleSave}>
                            Save Changes
                        </Button>
                    </Box>
                </CardContent>
            </Card>
            {/* Snackbar for notifications */}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default EditProfile;
