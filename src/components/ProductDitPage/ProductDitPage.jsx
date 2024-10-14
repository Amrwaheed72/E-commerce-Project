import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Divider,
  Tabs,
  Tab,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const ProductDetail = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  // بيانات المنتج
  const product = {
    title: 'Classic Rolex Watch',
    rating: '★★★★★',
    reviewsCount: 0,
    price: 350.0,
    stockStatus: 'Stock Available',
    image: 'Rolex1.jpg', // تأكد من وجود الصورة في مجلد public/images
    additionalImages: ['Rolex2.jpg', 'Rolex3.jpg'], // تأكد من وجودها
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    types: ['Type 1', 'Type 2', 'Type 3'],
    specifications: [
      'Brand: Beats',
      'Model: S450',
      'Wireless Bluetooth Headset',
      'FM Frequency Response: 87.5 - 108 MHz',
      'Feature: FM Radio, Card Supported (Micro SD / TF)',
      'Made in China',
    ],
    bgColor: '', // لون الخلفية
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAddToCartClick = () => {
    if (!isUserLoggedIn()) { // Replace with your own login check
      setOpenDialog(true);
    } else {
      // Call your add to cart logic here
      // For example: addToCart(product);
      console.log("Product added to cart:", product);
    }
  };

  const handleDialogClose = (redirectToLogin) => {
    setOpenDialog(false);
    if (redirectToLogin) {
      // Redirect to login page (update the path as needed)
      window.location.href = '/login'; // Change this to your login page route
    }
  };

  const isUserLoggedIn = () => {
    // Implement your user login check here
    // This is just a mock example; replace with actual logic
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null; // or however you check if a user is logged in
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: product.bgColor }}>
      <Grid container spacing={4}>
        {/* قسم الصورة */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt={product.title}
              height="400"
              image={product.image}
              sx={{ objectFit: 'contain' }}
            />
          </Card>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, marginTop: 2 }}>
            {product.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Additional view ${index + 1}`}
                style={{
                  width: 50,
                  height: 50,
                  border: index === 0 ? '2px solid #d23f57' : '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
            ))}
          </Box>
        </Grid>

        {/* قسم تفاصيل المنتج */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Rated:<span style={{ color: "gold" }}>{product.rating}</span>  ({product.reviewsCount})
              </Typography>
              <Divider sx={{ margin: '10px 0' }} />
              <Typography variant="h6" color="error">
                ${product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.stockStatus}
              </Typography>
              <Button
                variant="contained"
                color="error"
                sx={{ marginTop: 2, backgroundColor: '#d23f57' }}
                onClick={handleAddToCartClick}
              >
                Add To Cart
              </Button>

              <Divider sx={{ margin: '20px 0' }} />

              <Typography variant="body1">Option</Typography>
              <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
                {product.options.map((option, index) => (
                  <Button key={index} variant="outlined" color="error">
                    {option}
                  </Button>
                ))}
              </Box>

              <Typography variant="body1" sx={{ marginTop: 2 }}>
                Type
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
                {product.types.map((type, index) => (
                  <Button key={index} variant="outlined" color="error">
                    {type}
                  </Button>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* الوصف والمراجعات */}
      <Paper sx={{ marginTop: 4, padding: 2 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Description" />
          <Tab label={`Reviews (${product.reviewsCount})`} />
        </Tabs>

        <Box hidden={tabValue !== 0}>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Specification:
          </Typography>
          {product.specifications.map((spec, index) => (
            <Typography key={index} variant="body2">
              {spec}
            </Typography>
          ))}
        </Box>

        <Box hidden={tabValue !== 1}>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            User Reviews
          </Typography>
          <Typography variant="body2">
            {product.reviewsCount === 0 ? 'No reviews yet.' : 'Reviews available.'}
          </Typography>
        </Box>
      </Paper>

      {/* قسم "Frequently Bought Together" */}
      <Paper sx={{ marginTop: 4, padding: 2 }}>
        <Typography variant="h6">Frequently Bought Together</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Consider adding these items to your purchase!
        </Typography>
      </Paper>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => handleDialogClose(false)}>
        <DialogTitle>{"Login Required"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have to log in first. Do you want to go to the login page?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleDialogClose(true)} color="primary">
            Go To Login
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductDetail;
