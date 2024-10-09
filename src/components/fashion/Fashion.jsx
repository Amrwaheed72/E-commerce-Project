import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const Fashion = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {/* Men's Collections */}
      <Grid item xs={12} md={6}>
        <Card sx={{ backgroundColor: '#FFB74D', display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: '30%' , height: '100%'   }}  // Makes the image take half of the card width
            image="banner-39.png"
            alt="Men's Collection"
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%' }}>
            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold' }}>
              MEN’S COLLECTIONS
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#fff' }}>
              #LATEST_COLLECTION2022
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Sports (Text on top of the image) */}
      <Grid item xs={12} md={3}>
        <Card sx={{ position: 'relative', height: '95%' }}>
          <CardMedia
            component="img"
            image="fashion.png"
            alt="Sports"
            sx={{ height: '100%' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: "30px",
              right: "70px",
              width: '100%',
              height: '100%',
           
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold'  }}>
              SPORTS
            </Typography>
            <Typography variant="subtitle1">#NEW</Typography>
          </Box>
        </Card>
      </Grid>

     {/* Women */}
      <Grid item xs={12} md={3}>
        <Card sx={{ position: 'relative', height: '95%' }}>
          <CardMedia
            component="img"
            image="banner-41.png"
            alt="Coupons"
            sx={{ height: '100%' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
             
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            WOMEN
            </Typography>
            <Typography variant="subtitle1">#DRESS</Typography>
          </Box>
        </Card>
          </Grid>




   {/* Sunglasses - 50% OFF (Text on top of the image) */}
      <Grid item xs={12} md={3}>
        <Card sx={{ position: 'relative', height: '95%' }}>
          <CardMedia
            component="img"
            image="banner-42.png"
            alt="Sunglasses 50% Off"
            sx={{ height: '100%' }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: "116px",
              left: "45px",
              width: '100%',
              height: '100%',
             
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              50% OFF
            </Typography>
            <Typography variant="subtitle1">#SUNGLASSES</Typography>
          </Box>
        </Card>
      </Grid>
 {/* Coupons */}
        <Grid item xs={12} md={3}>
        <Card sx={{ position: 'relative', height: '95%' }}>
          <CardMedia
            component="img"
            image="Rolex2.jpg"
            alt="Coupons"
            sx={{ height: '100%' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              COUPONS
            </Typography>
            <Typography variant="subtitle1">#EXPLORE</Typography>
          </Box>
        </Card>
      </Grid>

      {/* New Gadgets */}
      <Grid item xs={12} md={6}>
        <Card sx={{ position: 'relative', height: '95%' }}>
          <CardMedia
            component="img"
            image="banner-43.png"
            alt="New Gadgets"
            sx={{ height: '100%' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
             
              color: '#fff',
              display: 'flex',
              alignItems: 'left',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '10px',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              NEW GADGETS
            </Typography>
            <Typography variant="subtitle1">#LATEST_COLLECTION2022</Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Fashion;
