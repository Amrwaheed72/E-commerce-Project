import { useState, useEffect } from 'react';
import { Card, CardContent, TextField, Typography, Button, Checkbox, FormControlLabel, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, loading, isLoggedIn, userInfo } = useSelector((state) => state.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleClickShowPassword = () => setShowPassword((prev) => !prev);
    const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

    const isEmailValid = email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEmailValid && password) {
            await dispatch(loginUser({ email, password }));
            sessionStorage.setItem("userData", JSON.stringify({ name: "amir", email, password }))
        }
    };

    // Handle session storage based on admin status after successful login
    useEffect(() => {
        sessionStorage.setItem("isLoggedIn", isLoggedIn)
        if (isLoggedIn && userInfo) {
            console.log(userInfo)
            console.log(userInfo.adminUser)
            if (userInfo.adminUser) {
                sessionStorage.setItem('admin', 'true');
            } else {
                sessionStorage.setItem('admin', 'false');
            }
            navigate('/'); // Navigate to home after setting the session storage
        }
    }, [isLoggedIn, userInfo, navigate]);

    return (
        <div className="botato" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
        }}>
            <Card sx={{ maxWidth: 400, margin: 'auto', marginTop: '10vh', padding: 2 }}>
                <CardContent>
                    <Typography variant="h5" align="center">Login</Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            fullWidth
                            margin="normal"
                            error={!isEmailValid}
                            helperText={isEmailValid ? '' : 'Please enter a valid email'}
                        />

                        <TextField
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <FormControlLabel
                            control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} />}
                            label="Remember me"
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ marginTop: 2 }}
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                    <Button
                        onClick={() => navigate('/signup')}
                        fullWidth
                        sx={{ marginTop: 1 }}
                    >
                        Do not have an account? Sign up
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginCard;
