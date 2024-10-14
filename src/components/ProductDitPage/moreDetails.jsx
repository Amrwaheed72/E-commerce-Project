import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography, Grid, Divider, Tabs, Tab, Paper } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header2 from 'components/hearder/Header2';
import Header3 from 'components/hearder/Header3';
import useAuthCheck from '../LoginSignup/useAuthCheck '; // Adjust the import path as needed
import { images } from '../../images';

const ProductDetail = () => {
    const [tabValue, setTabValue] = useState(0);
    const [inCart, setInCart] = useState(false);
    const { id } = useParams(); // Get product id from URL
    const { checkLoginBeforeAction, LoginDialog } = useAuthCheck(); // Use the authentication check hook

    // Retrieve product details from the Redux store
    const productDetails = useSelector((state) =>
        state.products.products.find((product) => product.id == parseInt(id))
    );

    useEffect(() => {
        const cartIds = JSON.parse(localStorage.getItem('cartIds')) || [];
        const isInCart = cartIds.some((thisId) => thisId == id);
        if (isInCart) {
            setInCart(true);
        }
    }, [id]);

    const handelAddToCart = (product) => {
        const addToCart = () => {
            const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const isInCart = cartItems.some((item) => item.id == product.id);

            let updatedCartItems = [];
            if (!isInCart) {
                updatedCartItems = [...cartItems, product]; // Add new product to the cart
            } else {
                updatedCartItems = cartItems; // Product already in the cart, no change
            }

            localStorage.setItem('cart', JSON.stringify(updatedCartItems));

            const cartIds = JSON.parse(localStorage.getItem('cartIds')) || [];
            let updatedCartIds = [];
            setInCart(true);
            if (!isInCart) {
                updatedCartIds = [...cartIds, id];
            } else {
                updatedCartIds = cartIds;
            }

            localStorage.setItem('cartIds', JSON.stringify(updatedCartIds));
        };

        checkLoginBeforeAction(addToCart);
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    // Check if productDetails is undefined or not found
    if (!productDetails) {
        return <Typography variant="h6">Product not found!</Typography>;
    }

    return (
        <>
            <Header2 />
            <Header3 />
            <Box sx={{ padding: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={productDetails.name}
                                height="400"
                                image={typeof(productDetails.Image) === 'string'? productDetails.image :  images[productDetails.image]}
                                sx={{ objectFit: 'contain' }}
                            />
                        </Card>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, marginTop: 2 }}>
                            {productDetails.gallery &&
                                productDetails.gallery.map((img, index) => (
                                    <img
                                        key={index}
                                        src={typeof (img.image) === 'string' ? img : images[img]}
                                        alt={`Gallery image ${index + 1}`}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                        }}
                                    />
                                ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {productDetails.name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Rated: <span style={{ color: 'gold' }}>{productDetails.rating}</span>
                                </Typography>
                                <Divider sx={{ margin: '10px 0' }} />
                                <Typography variant="h6" color="error">
                                    ${productDetails.price.toFixed(2)}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="error"
                                    sx={{ marginTop: 2, backgroundColor: '#d23f57' }}
                                    onClick={() => {
                                        handelAddToCart(productDetails);
                                    }}
                                >
                                    {inCart ? 'In cart' : 'Add To Cart'}
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    sx={{ marginTop: 2, backgroundColor: '#d23f57', marginLeft: '10px' }}
                                >
                                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                                        Continue Shopping
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Paper sx={{ marginTop: 4, padding: 2 }}>
                    <Tabs value={tabValue} onChange={handleTabChange}>
                        <Tab label="Description" />
                    </Tabs>

                    <Box hidden={tabValue !== 0}>
                        <Typography variant="h6" sx={{ marginTop: 2 }}>
                            Description:
                        </Typography>
                        <Typography variant="body2">{productDetails.description}</Typography>
                    </Box>
                </Paper>
            </Box>

            {/* Render the LoginDialog from useAuthCheck */}
            <LoginDialog />
        </>
    );
};

export default ProductDetail;
