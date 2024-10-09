import { Box, Container, Grid, Typography, Button, useTheme } from '@mui/material';

const Services = () => {
    const theme = useTheme(); // Get the current theme

    return (
        <div>
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: 'url("../../public/services-banner.jpg")', // Replace with a relevant image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 400,
                    position: 'relative',
                    textAlign: 'center',
                    color: theme.palette.mode === 'dark' ? '#fff' : '#000', // Conditional text color
                }}
            >
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'  // Overlay for better text readability 
                }}></Box>
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, zIndex: 1 }}>
                    Our Services
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, zIndex: 1 }}>
                    Offering exceptional service to make your shopping experience smooth and secure
                </Typography>
                <Button variant="contained" color="primary" sx={{ fontWeight: 'bold', zIndex: 1 }}>
                    Learn More
                </Button>
            </Box>

            {/* Services Section */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                    What We Offer
                </Typography>

                <Grid container spacing={4}>
                    {/* Shipping & Delivery Service */}
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                padding: 3,
                                boxShadow: 3,
                                textAlign: 'center',
                                backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                            }}
                        >
                            <img
                                src="../../public/delivery.png"
                                alt="Shipping & Delivery"
                                style={{ width: '220px', marginBottom: '20px' }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Fast Shipping & Delivery
                            </Typography>
                            <Typography variant="body2">
                                We ensure quick and reliable delivery to your doorstep with options for same-day or expedited shipping.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Customer Support */}
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                padding: 3,
                                boxShadow: 3,
                                textAlign: 'center',
                                backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                            }}
                        >
                            <img
                                src="../../public/service.png"
                                alt="Customer Support"
                                style={{ width: '305px', marginBottom: '20px' }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                24/7 Customer Support
                            </Typography>
                            <Typography variant="body2">
                                Have a question or concern? Our team is here around the clock to assist you with all your needs.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Warranty & Returns */}
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                padding: 3,
                                boxShadow: 3,
                                textAlign: 'center',
                                backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                            }}
                        >
                            <img
                                src="../../public/easy.WEBP"
                                alt="Warranty & Returns"
                                style={{ width: '155px', marginBottom: '20px' }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Warranty & Easy Returns
                            </Typography>
                            <Typography variant="body2">
                                We offer hassle-free returns and warranty coverage to ensure your satisfaction with our products.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Additional Service: Loyalty Program */}
                <Grid container spacing={4} sx={{ mt: 6 }}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                padding: 3,
                                boxShadow: 3,
                                textAlign: 'center',
                                backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                            }}
                        >
                            <img
                                src="../../public/loyalty.WEBP"
                                alt="Loyalty Program"
                                style={{ width: '280px', marginBottom: '20px' }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Exclusive Loyalty Program
                            </Typography>
                            <Typography variant="body2">
                                Join our loyalty program to earn points on every purchase and enjoy exclusive member benefits.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Security & Privacy */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                padding: 3,
                                boxShadow: 3,
                                textAlign: 'center',
                                backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                            }}
                        >
                            <img
                                src="../../public/sec.WEBP"
                                alt="Security & Privacy"
                                style={{ width: '262px', marginBottom: '20px' }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Top-Notch Security & Privacy
                            </Typography>
                            <Typography variant="body2">
                                We use the latest encryption technology to ensure your personal data and transactions are safe with us.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Testimonials Section */}
            <Box sx={{ py: 6, backgroundColor: theme.palette.mode === 'dark' ? '#303030' : '#f5f5f5' }}>
                <Container maxWidth="md">
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                        What Our Customers Are Saying
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    "Amazing service and super fast delivery! I received my order in less than 24 hours."
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    – Sarah M.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    "Customer support is excellent! They helped me with all my questions."
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    – John D.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    "I loved the warranty service. Got my product replaced easily without hassle!"
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    – Emily K.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    "The return process was very smooth, and I was refunded quickly!"
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    – Mark T.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Additional Testimonials */}
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    "Best customer support I have ever experienced. Truly 24/7!"
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    – Lisa P.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    "I appreciate the variety of products available. There's something for everyone!"
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    – David R.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ py: 6, textAlign: 'center', backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
                    Ready to Experience Our Exceptional Service?
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Enjoy fast shipping, hassle-free returns, and 24/7 customer support. Shop with confidence today.
                </Typography>
                <Button href='/' variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>
                    Shop Now
                </Button>
            </Box>

        </div>
    );
};

export default Services;
