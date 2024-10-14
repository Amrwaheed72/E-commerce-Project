import { Typography, Button, TextField, Container, Grid, Box, Paper } from '@mui/material';

const ContactUsCard = () => {
  return (
    <div>
      <Container>
        <Box my={4} borderTop={1} borderColor="grey.300" pt={4}>
          <Grid container spacing={2} alignItems="center" style={{ minHeight: '0vh' }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1" gutterBottom>
                Need to get in touch with us? Fill out the form with your inquiry or find the department you’d like to contact below.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} style={{ padding: '24px', minHeight: '450px' }}>
                <form noValidate autoComplete="off">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="message"
                        name="message"
                        label="What can we help you with?"
                        multiline
                        rows={6}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" type="submit" size="large" fullWidth>
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ContactUsCard;
