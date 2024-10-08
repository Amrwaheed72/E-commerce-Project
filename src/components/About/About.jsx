import { Box, Typography, Container, Grid, IconButton, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = () => {
    const theme = useTheme(); // Get the current theme

    return (
        <div>
            {/* About Us Header Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: 600,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                {/* Background Box with opacity */}
                <Box
                    sx={{
                        backgroundImage: 'url("../../public/fashion.WEBP")', // Background image
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1,
                        opacity: 0.7, // Adjust opacity here
                        filter: 'brightness(70%)', // Optional: dim the background slightly
                    }}
                />

                {/* Text content on top of the background */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2, // Ensure the text is above the background
                        color: '#fff',
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: '4rem',
                            fontWeight: 'bold',
                            fontFamily: 'Playfair Display, serif',
                            letterSpacing: '0.1em',
                            mb: 1,
                        }}
                    >
                        ABOUT US
                    </Typography>
                    {/* Optional underline */}
                    <Box
                        sx={{
                            width: '150px',
                            height: '3px',
                            backgroundColor: '#fff', // White underline to contrast with background
                            mt: 2,
                            margin:'0 auto'
                        }}
                    />
                </Box>
            </Box>


            {/* About Us Text Section */}
            <Container maxWidth="md" sx={{ py: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
                    Company Name: Fashivibe
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Our Company is dedicated to the pursuit of excellence, bringing you the finest products with attention to detail and quality. Each item is designed with passion and crafted with care, ensuring that you experience the best with every purchase.
                </Typography>
            </Container>

            {/* History Section */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img
                            src="../../public/name.WEBP"
                            alt="History"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
                            HISTORY OF Fashivibe
                        </Typography>
                        <Typography variant="body1">
                            Since its inception, our Company has been driven by a mission to innovate and create top-tier products. Our journey began with a vision to change the landscape of the industry, and we have been working tirelessly to achieve that goal ever since.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* Promise Section */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                    OUR PROMISE
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
                    Our mission is simple: to offer stylish, high-quality products at prices that everyone can afford. Whether you re looking for the latest trends or classic essentials, our curated selection is tailored to your needs. With fast shipping, easy returns, and responsive customer service, we make sure your shopping experience is seamless from start to finish.
                </Typography>
                <Box
                    sx={{
                        backgroundImage: 'url("../../public/download.jpeg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: 300,
                        borderRadius: '8px',
                    }}
                />
            </Container>
            <br />

            {/* Team Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
                    Meet Our Team
                    <br />
                    <br />
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {[
                        {
                            name: 'Amr Waheed',
                            role: 'Developer',
                            img: '../../public/Amr.jpg',
                            facebook: 'https://www.facebook.com/amr.mohamed.5437',
                            github: 'https://github.com/Amrwaheed72',
                            linkedin: 'https://www.linkedin.com/in/amr-waheed-4374a9288/',
                        },
                        {
                            name: 'Amir Elsayed',
                            role: 'Developer',
                            img: '../../public/user.jpg',
                            facebook: 'https://www.facebook.com/amirelsayed',
                            github: 'https://github.com/amirelsayed',
                            linkedin: 'https://www.linkedin.com/in/amirelsayed',
                        },
                        {
                            name: 'Ahmed Hany',
                            role: 'Developer',
                            img: '../../public/user.jpg',
                            facebook: 'https://www.facebook.com/ahmedhany',
                            github: 'https://github.com/ahmedhany',
                            linkedin: 'https://www.linkedin.com/in/ahmedhany',
                        },
                        {
                            name: 'Basmala Mohamed',
                            role: 'Developer',
                            img: '../../public/user.jpg',
                            facebook: 'https://www.facebook.com/basmala',
                            github: 'https://github.com/basmala',
                            linkedin: 'https://www.linkedin.com/in/basmala',
                        },
                    ].map((member, index) => (
                        <Grid item xs={12} sm={3} key={index}>
                            <Box
                                sx={{
                                    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff', // Black in dark mode, white in light mode
                                    borderRadius: '8px',
                                    boxShadow: 1,
                                    textAlign: 'center',
                                    p: 2,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&:hover .social-icons': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    style={{
                                        borderRadius: '50%',
                                        width: '100px',
                                        height: '100px',
                                        marginBottom: '10px',
                                    }}
                                />
                                <Typography variant="h6" sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
                                    {member.name}
                                </Typography>{' '}
                                {/* Change name color */}
                                <Typography variant="body2" sx={{ color: 'gray' }}>
                                    {member.role}
                                </Typography>
                                <br />

                                {/* Social Icons Container */}
                                <Box
                                    className="social-icons"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: 1,
                                        position: 'absolute',
                                        bottom: 10,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                >
                                    <IconButton
                                        component="a"
                                        href={member.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="facebook"
                                        size="small"
                                        sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'inherit' }} // White icons in dark mode
                                    >
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton
                                        component="a"
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="github"
                                        size="small"
                                        sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'inherit' }} // White icons in dark mode
                                    >
                                        <GitHubIcon />
                                    </IconButton>
                                    <IconButton
                                        component="a"
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="linkedin"
                                        size="small"
                                        sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'inherit' }} // White icons in dark mode
                                    >
                                        <LinkedInIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                            <br />
                            <br />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>

    );
};

export default AboutUs;
