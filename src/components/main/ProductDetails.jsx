/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductDetails = ({ product }) => {
    const handelAddToCart = (product) => {
        // Retrieve existing cart items from localStorage
        const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    
        // Check if the product is already in the cart
        const isInCart = cartItems.some(item => item.id === product.id);
    
        // Add the product to the cart if it's not already there
        let updatedCartItems = [];
        if (isInCart) {
            updatedCartItems = cartItems; // Product already in the cart, no change
        } else {
            updatedCartItems = [...cartItems, product]; // Add new product to the cart
        }
    
        // Store the updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    };
    

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, flexDirection: { xs: "column", sm: "row" } }}>
            <Box sx={{ display: "flex" }}>
                <img width={300} src={product.image} alt={product.name} />
            </Box>

            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h5">{product.name}</Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h2">
                    ${product.price.toFixed(2)}
                </Typography>
                <Typography variant="body1">
                    {product.description}
                </Typography>

                <Stack sx={{ justifyContent: { xs: "center", sm: "left" } }} direction={"row"} gap={1} my={2}>
                    {product.gallery.map((img, index) => (
                        <img
                            key={index}
                            style={{ borderRadius: 3 }}
                            height={100}
                            width={90}
                            src={img}
                            alt={`gallery-${index}`}
                        />
                    ))}
                </Stack>

                <Button sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }} variant="contained" onClick={() => handelAddToCart(product)}>
                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                    Buy Now
                </Button>
            </Box>
        </Box>
    );
};

export default ProductDetails;
