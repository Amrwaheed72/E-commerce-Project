import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const useAuthCheck = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [actionToPerform, setActionToPerform] = useState(null); // Store the action to perform

    const checkLoginBeforeAction = (action) => {
        if (!isLoggedIn) {
            setDialogOpen(true); // Open the login prompt dialog
            setActionToPerform(() => action); // Store the action to perform if logged in
        } else {
            action(); // Proceed with the desired action if logged in
        }
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleLoginConfirm = () => {
        handleDialogClose();
        navigate('/login'); // Navigate to the login page
    };

    const handlePerformAction = () => {
        if (actionToPerform) {
            actionToPerform(); // Perform the action (e.g., adding to cart)
            setActionToPerform(null); // Clear the action
        }
    };

    const LoginDialog = () => (
        <Dialog open={dialogOpen} onClose={handleDialogClose}>
            <DialogTitle>Login Required</DialogTitle>
            <DialogContent>
                <Typography>You have to log in first. Do you want to proceed to login?</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleLoginConfirm} color="primary">
                    Proceed to Login
                </Button>
            </DialogActions>
        </Dialog>
    );

    return { checkLoginBeforeAction, LoginDialog };
};

export default useAuthCheck;
