import { Box, Typography, Container, Grid, IconButton, useTheme, Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const About = () => {
    const theme = useTheme(); // Get the current theme
    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            {/* About Us Header Section */}
            <Box
                sx={{
                    margin: '30px auto',
                    width: '1200px',
                    position: 'relative',
                    height: 'auto', // Auto height to accommodate content
                    display: 'flex',
                    flexDirection: 'column', // Stack elements vertically
                    justifyContent: 'flex-start', // Align items to the top
                    alignItems: 'flex-start', // Align items to the left
                    textAlign: 'left', // Align text to the left
                    overflow: 'hidden', // Ensures that any overflow from child elements is hidden
                    padding: 3, // Add padding to the container
                    borderTop: theme => `1px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'}`, // Top border
                    borderBottom: theme => `1px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'}`, // Bottom border
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '3rem', md: '4rem' }, // Responsive font size
                        fontWeight: 'bold',
                        fontFamily: 'Playfair Display, serif',
                        letterSpacing: '0.1em',
                        mb: 1,
                        color: theme => (theme.palette.mode === 'dark' ? '#fff' : '#000'), // Black in light mode, white in dark mode
                    }}
                >
                    ABOUT US
                </Typography>
            </Box>

            {/* Description Text */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center', // Center horizontally
                    alignItems: 'center', // Center vertically
                    my: 4, // Margin for spacing
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '1.2rem', md: '1.9rem' },
                        fontWeight: '300', // Lighter font weight for the subtitle
                        color: theme => (theme.palette.mode === 'dark' ? '#e0e0e0' : '#000'), // Slightly lighter color for contrast
                        textAlign: 'center', // Center text alignment
                        maxWidth: '800px', // Limit width for better readability
                    }}
                >
                    Discover our story, mission, and the values that drive us.
                </Typography>
            </Box>

            {/* Explore More About Us Accordion */}
            <Container maxWidth="sm" sx={{ py: 6 }}>
                <Accordion
                    // @ts-ignore
                    expanded={expanded === 'panel1'}
                    onChange={handleAccordionChange('panel1')}
                    sx={{ borderRadius: '8px', boxShadow: 3, mb: 2 }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            Explore More About Us
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {[
                                { text: 'Company Name', id: '#company-name' },
                                { text: 'History', id: '#history' },
                                { text: 'Careers', id: '#careers' },
                                { text: 'Our Stores', id: '#our-stores' },
                                { text: 'Our Cares', id: '#our-cares' },
                                { text: 'Terms & Conditions', id: '#terms-conditions' },
                                { text: 'Privacy Policy', id: '#privacy-policy' },
                                { text: 'Our Promise', id: '#our-promise' }, // Added Our Promise
                                { text: 'Meet Our Team', id: '#meet-our-team' }, // Added Meet Our Team
                            ].map((item, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href={item.id}
                                        sx={{
                                            '&:hover': {
                                                backgroundColor:
                                                    theme.palette.mode === 'dark'
                                                        ? 'rgba(255, 255, 255, 0.1)'
                                                        : 'rgba(0, 0, 0, 0.05)',
                                            },
                                        }}
                                    >
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Container>

            {/* Company Name Section */}
            <Container maxWidth="md" id="company-name" sx={{ py: 6, backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center', color: theme.palette.text.primary }}>
                    Company Name: Fashivibe
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify', color: theme.palette.text.secondary }}>
                    Our Company is dedicated to the pursuit of excellence, bringing you the finest products with attention
                    to detail and quality. Each item is designed with passion and crafted with care, ensuring that you experience
                    the best with every purchase.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify', color: theme.palette.text.secondary }}>
                    At Fashivibe, we believe in the power of style and self-expression. Our curated collections reflect the latest
                    trends while prioritizing comfort and functionality. We strive to provide our customers with a unique shopping
                    experience, blending quality with affordability.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify', color: theme.palette.text.secondary }}>
                    Our commitment extends beyond products; we value our community and take pride in our ethical practices.
                    Sustainability is at the heart of our operations, from sourcing materials to delivering products. We are
                    constantly looking for ways to improve and innovate, ensuring that every purchase you make has a positive
                    impact on the world.
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'justify', color: theme.palette.text.secondary }}>
                    Thank you for choosing Fashivibe as your go-to destination for fashion. Join us in our journey to make the
                    world a more stylish place, one product at a time.
                </Typography>
            </Container>

            <br />
            <br />

            {/* History Section */}
            <Container maxWidth="md" id="history" sx={{ py: 6, backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img
                            src="../../public/name.WEBP"
                            alt="History"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: theme.palette.text.primary }}>
                            HISTORY OF Fashivibe
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                            Since its inception, our Company has been driven by a mission to innovate and create top-tier products.
                            Our journey began with a vision to change the landscape of the industry, and we have been working tirelessly
                            to achieve that goal ever since.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                            Our story is one of passion and perseverance. What started as a small endeavor has grown into a dynamic
                            company known for its quality and style. We take pride in our heritage and remain committed to our core values
                            of integrity, creativity, and customer satisfaction.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                            Over the years, we have expanded our product offerings, keeping up with changing trends and consumer demands.
                            Our team of skilled professionals is dedicated to ensuring that every item we produce meets the highest standards
                            of excellence.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                            Today, Fashivibe stands as a testament to the hard work and dedication of our team. We continue to evolve
                            and adapt, always striving to lead the way in innovation and customer service. Our commitment to sustainability
                            and ethical practices is stronger than ever, as we look to build a brighter future for the generations to come.
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                            Join us on this journey as we continue to make a mark in the fashion industry, and thank you for being
                            a part of the Fashivibe family.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            <br />
            <br />

            {/* Careers Section */}
            <Container maxWidth="md" id="careers" sx={{ py: 6, backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center', color: theme.palette.text.primary }}>
                    Careers
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: theme.palette.text.secondary }}>
                    Join our team and be part of an innovative and passionate company. We offer exciting career opportunities that foster growth and development. Explore available positions and see how you can make an impact.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Why Work With Us?
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    At Fashivibe, we believe in nurturing talent and creating an inclusive work environment where everyone can thrive. Our team is diverse, creative, and dedicated to pushing the boundaries of the fashion industry.
                    We foster collaboration, encourage fresh ideas, and celebrate our achievements together.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Employee Benefits
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    We offer a range of benefits designed to support our employees’ well-being and career growth, including:
                </Typography>
                <List sx={{ pl: 4, mb: 4 }}>
                    <ListItem sx={{ bgcolor: theme.palette.background.default, borderRadius: '4px', mb: 1 }}>
                        <ListItemText primary="Competitive salary and performance bonuses" primaryTypographyProps={{ sx: { color: theme.palette.text.primary } }} />
                    </ListItem>
                    <ListItem sx={{ bgcolor: theme.palette.background.default, borderRadius: '4px', mb: 1 }}>
                        <ListItemText primary="Flexible working hours and remote work options" primaryTypographyProps={{ sx: { color: theme.palette.text.primary } }} />
                    </ListItem>
                    <ListItem sx={{ bgcolor: theme.palette.background.default, borderRadius: '4px', mb: 1 }}>
                        <ListItemText primary="Health, dental, and vision insurance" primaryTypographyProps={{ sx: { color: theme.palette.text.primary } }} />
                    </ListItem>
                    <ListItem sx={{ bgcolor: theme.palette.background.default, borderRadius: '4px', mb: 1 }}>
                        <ListItemText primary="Paid time off and holiday pay" primaryTypographyProps={{ sx: { color: theme.palette.text.primary } }} />
                    </ListItem>
                    <ListItem sx={{ bgcolor: theme.palette.background.default, borderRadius: '4px', mb: 1 }}>
                        <ListItemText primary="Professional development opportunities and workshops" primaryTypographyProps={{ sx: { color: theme.palette.text.primary } }} />
                    </ListItem>
                </List>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    How to Apply
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    If you’re interested in joining our team, we invite you to check our current job openings and submit your application. We are looking for talented individuals who share our passion for fashion and innovation.
                    Our hiring process is designed to be transparent and efficient, ensuring that you have the best experience possible.
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    Visit our careers page to learn more about available positions and submit your application today!
                </Typography>
            </Container>

            <br />
            <br />
            {/* Our Stores Section */}
            <Container maxWidth="md" id="our-stores" sx={{ py: 6, backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center', color: theme.palette.text.primary }}>
                    Our Stores
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: theme.palette.text.secondary }}>
                    Visit any of our stores for an in-person experience. We are located in multiple cities, offering our customers a chance to explore our products directly.
                    Find the nearest store and come say hello!
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Why Visit Us?
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    Our stores are more than just a place to shop. They are designed to provide an immersive experience where you can interact with our products, receive personalized service from our knowledgeable staff,
                    and enjoy a vibrant atmosphere that embodies the spirit of Fashivibe.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Locations
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    We have stores in key locations across the country, each carefully curated to reflect our unique brand identity. Whether you are in the bustling heart of the city or a cozy suburban area,
                    there’s a Fashivibe store nearby waiting for you to explore.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Customer Experience
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    Our commitment to customer satisfaction goes beyond the products we sell. At each store, we strive to create an inviting environment where you can enjoy shopping at your own pace,
                    discover new arrivals, and take advantage of exclusive in-store promotions.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Connect With Us
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    We love connecting with our customers! Follow us on social media for updates on new store openings, exclusive offers, and events happening near you.
                    We also encourage you to share your experiences with us using #Fashivibe. We can't wait to see you in-store!
                </Typography>
            </Container>
            <br />
            <br />
            {/* Our Cares Section */}
            <Container maxWidth="md" id="our-cares" sx={{ py: 6, backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center', color: theme.palette.text.primary }}>
                    Our Cares
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: theme.palette.text.secondary }}>
                    At Fashivibe, we are committed to making a positive impact. From sustainable products to charitable initiatives,
                    we believe in giving back to the community. Learn more about our efforts and how you can contribute.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Sustainability
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    We prioritize sustainable practices in our production process. Our products are crafted from eco-friendly materials, and we work closely with our suppliers to ensure ethical sourcing.
                    By choosing Fashivibe, you are supporting a brand that values the health of our planet.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Community Engagement
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    We believe in the power of community. Fashivibe actively participates in local initiatives and charitable organizations,
                    providing support through donations and volunteer efforts. Together, we can make a difference.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Educational Initiatives
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    Education is key to creating lasting change. That's why we invest in educational programs that empower individuals and foster skills for a sustainable future.
                    Discover how you can get involved and help us drive positive change.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Get Involved
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    We invite our customers to join us in our mission. Whether through donations, volunteering, or spreading awareness,
                    every effort counts. Together, we can make the world a better place for all.
                </Typography>
            </Container>

            <br />
            <br />
            {/* Terms & Conditions Section */}
            <Container maxWidth="md" id="terms-conditions" sx={{ py: 6, backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center', color: theme.palette.text.primary }}>
                    Terms & Conditions
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: theme.palette.text.secondary }}>
                    Our terms and conditions govern the use of our website and services. By shopping with us, you agree to these terms.
                    Please read them carefully to understand your rights and obligations.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Acceptance of Terms
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    By accessing and using our website, you confirm that you accept these terms and conditions. If you do not agree with any part of these terms,
                    you must not use our website. We reserve the right to update these terms at any time, and it is your responsibility to review them regularly.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Use of the Website
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    You may use our website for lawful purposes only. You agree not to use our website in any way that breaches any applicable local, national, or international law.
                    We may suspend or terminate your access to our website if you violate these terms.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Product Information
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    We strive to ensure that the information on our website is accurate and up to date. However, we do not warrant that any product descriptions,
                    pricing, or other content is accurate, complete, reliable, current, or error-free. In the event of a pricing error, we reserve the right to cancel
                    your order and notify you of the cancellation.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Limitation of Liability
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    To the fullest extent permitted by law, we will not be liable for any loss or damage arising from your use of the website or from any products purchased through it.
                    This includes, but is not limited to, direct, indirect, incidental, punitive, and consequential damages. Your use of the website is at your own risk.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Governing Law
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising under or in connection with these terms
                    shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
                </Typography>
            </Container>
            <br />
            <br />
            {/* Privacy Policy Section */}
            <Container maxWidth="md" id="privacy-policy" sx={{ py: 6, backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center', color: theme.palette.text.primary }}>
                    Privacy Policy
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: theme.palette.text.secondary }}>
                    We value your privacy and are committed to protecting your personal information. Our privacy policy outlines how
                    we collect, use, and safeguard your data. Read it to understand your privacy rights.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Information We Collect
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    We collect various types of information from you when you visit our website, including personal information such as your name,
                    email address, and payment information. We may also collect non-personal information such as your IP address and browsing activity.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    How We Use Your Information
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    The information we collect may be used to:
                    <ul>
                        <li>Process your transactions and manage your orders.</li>
                        <li>Improve our website and services based on user feedback.</li>
                        <li>Send you promotional materials and updates, if you opt-in.</li>
                        <li>Respond to your inquiries and provide customer support.</li>
                    </ul>
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Data Security
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    We take the security of your personal information seriously and implement various measures to protect it from unauthorized access,
                    use, or disclosure. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Your Rights
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    You have the right to request access to your personal information, request corrections, or request deletion of your information.
                    If you wish to exercise any of these rights, please contact us using the information provided below.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Changes to This Privacy Policy
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    We may update our privacy policy from time to time. Any changes will be posted on this page, and we encourage you to review our
                    privacy policy periodically to stay informed about how we are protecting your information.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left', color: theme.palette.text.primary }}>
                    Contact Us
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    If you have any questions about this privacy policy or our practices regarding your personal information, please contact us at:
                    <br />
                    <strong>Email:</strong> support@fashivibe.com
                    <br />
                    <strong>Phone:</strong> (123) 456-7890
                </Typography>
            </Container>
            <br />
            <br />
            {/* Promise Section */}
            <Container id='our-promise' maxWidth="md" sx={{ py: 6, backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center', color: theme.palette.text.primary }}>
                    OUR PROMISE
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: theme.palette.text.secondary }}>
                    Our mission is simple: to offer stylish, high-quality products at prices that everyone can afford. Whether you're looking for the latest trends or classic essentials, our curated selection is tailored to your needs. With fast shipping, easy returns, and responsive customer service, we make sure your shopping experience is seamless from start to finish.
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    We believe in transparency and integrity in all our dealings. Our products are sourced from reputable suppliers who share our commitment to quality and sustainability. Every item is rigorously tested to ensure it meets our high standards before it reaches your hands.
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    At Fashivibe, customer satisfaction is our top priority. We value your feedback and continuously strive to improve our offerings. Our dedicated team is always available to assist you with any questions or concerns, ensuring you feel supported every step of the way.
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    Join our community of fashion lovers and experience the Fashivibe difference. Stay connected with us through our social media channels for the latest updates, promotions, and style inspiration. Together, we can create a more fashionable and sustainable future!
                </Typography>

                <Box
                    sx={{
                        backgroundImage: 'url("../../public/download.jpeg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: 300,
                        borderRadius: '8px',
                        mb: 4,
                    }}
                />
            </Container>

            <br />
            <br />

            {/* Team Section */}
            <Box sx={{ mb: 6 }}>
                <Typography id='meet-our-team' variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
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

export default About;
