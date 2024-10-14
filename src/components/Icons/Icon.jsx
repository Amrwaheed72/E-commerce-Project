import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import GppGoodIcon from '@mui/icons-material/GppGood';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const Icon = () => {


    return (
        <Container sx={{ mt: 3 }}>
            <Stack divider={useMediaQuery('(min-width:600px)') ? <Divider flexItem /> : null}
                sx={{ flexWrap: "wrap" }} direction={"row"} alignItems={"center"}>
                <MyBox icon={<LocalShippingIcon fontSize="large" />}
                    title={"Worldwide Delivery"}
                    sudtitle={"We offer competitive prices on our 100 million plus product range."} />
                <MyBox icon={<CreditScoreIcon fontSize="large" />}
                    title={"Safe Payment"}
                    sudtitle={"We offer secure and hassle-free payment methods."} />
                <MyBox icon={<GppGoodIcon fontSize="large" />}
                    title={"Shop With Confidence"}
                    sudtitle={"Your data and purchases are protected with us."} />
                <MyBox icon={<HeadsetMicIcon fontSize="large" />}
                    title={"24/7 Support"}
                    sudtitle={"Our support team is available 24/7 to assist you."} />
            </Stack>
        </Container>
    );
}
export default Icon;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, sudtitle }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check for small screens

    return (
        <Box
            sx={{
                m: 1,
                width: isSmallScreen ? '100%' : 170, // Responsive width based on screen size
                display: "block",
                alignItems: "center",
                textAlign: "center",
                flexGrow: 1,
                gap: 3,
                py: 1.6,
                justifyContent: useMediaQuery('(min-width:600px)') ? "center" : "left",
                bgcolor: theme.palette.background.paper,
                boxShadow: theme.palette.mode === 'dark' ? "0px 4px 12px rgba(255, 255, 255, 0.1)" : "0px 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
                color: theme.palette.text.primary,
                minHeight: 250, // Fixed height (responsive minimum)
                height: isSmallScreen ? 'auto' : 250, // Adjust height dynamically
            }}
        >
            <Box sx={{
                bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300],
                display: "inline-flex",
                p: 2,
                borderRadius: "50%",
                mb: 2,
                justifyContent: "center",
                alignItems: "center",
                mt:4,
            }}>
                {icon}
            </Box>
            <Box sx={{ mx: 2 }}> {/* Adjust margins for text */}
                <Typography variant="body1" color={theme.palette.text.primary}>
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 300,
                        color: theme.palette.text.secondary,
                        marginTop: 0.5,
                    }}
                    variant="body2" // Adjust font size to fit smaller screens better
                >
                    {sudtitle}
                </Typography>
            </Box>
        </Box>
    );
};
