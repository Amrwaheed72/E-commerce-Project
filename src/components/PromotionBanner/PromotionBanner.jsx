import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';

const PromotionBanner = () => {
  return (
    <Paper sx={{ p: 3, backgroundColor: '#ffffff', width: '100%' }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={10}
        sx={{ width: '100%' }} // Ensure the Box takes full width
      >
        {/* Section for the image - Hide on small screens */}
        <Box
          component="img"
          src="istockphoto-871901006-612x612.jpg"
          alt="Gift"
          sx={{
            width: { xs: '0', md: '10%' },   // Hide image on small screens (xs) and show on medium screens (md) and above
            display: { xs: 'none', md: 'block' },  // Completely hide the image on small screens
            height: 'auto',
            mb: { xs: 0, md: 0 }
          }}
        />

        {/* Section for the text */}
        <Box sx={{ flex: 1, mx: { xs: 0, md: 3 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2C3E50' }}>
            GIFT <span style={{ color: '#E74C3C' }}>50% OFF</span> PERFECT STYLES
          </Typography>
          <Typography variant="body1" sx={{ color: '#7F8C8D' }}>
            Only until the end of this week. Terms and conditions apply
          </Typography>
        </Box>

        {/* Section for the button */}
        <Box sx={{ textAlign: { xs: 'center', md: 'right' }, mt: { xs: 2, md: 0 } }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: '#E74C3C', color: '#fff', minWidth: '150px' }}
          >
            Discover Now
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default PromotionBanner;
