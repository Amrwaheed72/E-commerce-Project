/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect, useState } from "react";
import useAuthCheck from "../LoginSignup/useAuthCheck "; // Make sure the path is correct
import { images } from "../../images";

const ProductDetails = ({ product }) => {
    const [inCart, setInCart] = useState(false);
    const { checkLoginBeforeAction, LoginDialog } = useAuthCheck(); // Using the custom hook
    const [dialogOpen, setDialogOpen] = useState(false); // State to manage dialog visibility

    useEffect(() => {
        const cartIds = JSON.parse(localStorage.getItem("cartIds")) || [];
        const isInCart = cartIds.some(thisId => thisId == product.id);
        console.log(product.id)
        if (isInCart) {
            setInCart(true);
        }
    }, [product.id]);

    const handelAddToCart = () => {
        // Add the logic to add the product to cart here
        const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        const isInCart = cartItems.some(item => item.id == product.id);

        let updatedCartItems = [];
        if (isInCart) {
            updatedCartItems = cartItems; // Product already in the cart, no change
        } else {
            updatedCartItems = [...cartItems, product]; // Add new product to the cart
        }
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));

        setInCart(true);

        const cartIds = JSON.parse(localStorage.getItem("cartIds")) || [];
        let updatedCartIds = [];
        if (isInCart) {
            updatedCartIds = cartIds;
        } else {
            updatedCartIds = [...cartIds, product.id];
        }
        localStorage.setItem("cartIds", JSON.stringify(updatedCartIds));
    };

    const handleAddToCartClick = () => {
        checkLoginBeforeAction(handelAddToCart); // Check if user is logged in
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, flexDirection: { xs: "column", sm: "row" } }}>
            <Box sx={{ display: "flex" }}>
                <img width={300} src={typeof (product.Image) === 'string' ? product.image : images[product.image]} alt={product.name} />
            </Box>

            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h5">{product.name}</Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h2">
                ${product.price ? product.price.toFixed(2) : 'N/A'}
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
                            src={typeof (img) === 'string' ? img : images[img]}
                            alt={`gallery-${index}`}
                        />
                    ))}
                </Stack>

                <Button sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }} variant="contained" onClick={handleAddToCartClick}>
                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                    {inCart ? "In Cart" : "Buy Now"}
                </Button>
            </Box>

            {/* Include the LoginDialog component here */}
            <LoginDialog />
        </Box>
    );
};

export default ProductDetails;
