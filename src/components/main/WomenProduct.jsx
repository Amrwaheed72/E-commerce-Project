import { Box, Button, Container, Dialog, IconButton, Rating, Stack, Typography, useTheme } from "@mui/material";
import { useState, useRef } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Close, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { images } from '../../images';

const WomenProduct = () => {
    const [alignment, setAlignment] = useState('left');
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const carouselRef = useRef(); // مرجع لمحتوى الكاروسيل

    const theme = useTheme();
    // @ts-ignore
    const products = useSelector((state) => state.products.products);
    // تصفية المنتجات بناءً على الفئة "Unisex" و "Women"
    const filteredProducts = products.filter(
        (product) => product.category === "Unisex" || product.category === "Women"
    );

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleClickOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // دالة للتنقل بين المنتجات بشكل سلس
    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300; // كمية التمرير
            // @ts-ignore
            carouselRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth", // يجعل الحركة سلسة
            });
        }
    };

    return (
        <Container sx={{ py: 9, mt: 1 }}>
            <Box display={'flex'} alignItems={"center"} justifyContent={"space-between"}>
                <Typography variant="h5" sx={{ mb: 4 }}>Deals Of The Day</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" color="error" component={Link} to="/gallery">
                        More Products
                    </Button>
                </Box>
            </Box>

            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <IconButton onClick={() => scrollCarousel("left")}>
                    <ArrowBackIos />
                </IconButton>
                <Stack
                    direction="row"
                    spacing={2}
                    flexWrap="nowrap"
                    sx={{
                        overflowX: "auto",
                        scrollBehavior: "smooth",
                        '&::-webkit-scrollbar': {
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888',
                            borderRadius: '10px',
                            transition: 'background-color 0.3s ease',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#555',
                        }
                    }}
                    ref={carouselRef}
                >
                    {filteredProducts.map((product) => (
                        <Card key={product.id} sx={{ minWidth: 250, maxWidth: 300 }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={typeof(product.Image) === 'string' ? product.image : images[product.image]}
                                title={product.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    ${product.price ? product.price : 'N/A'}
                                </Typography>
                                <Rating precision={0.5} name="read-only" value={product.rating} readOnly />
                            </CardContent>
                            <CardActions sx={{ justifyContent: "center" }}>
                                <Button onClick={() => handleClickOpen(product)} variant="outlined" color="error" startIcon={<AddShoppingCartIcon />}>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Stack>
                <IconButton onClick={() => scrollCarousel("right")}>
                    <ArrowForwardIos />
                </IconButton>
            </Stack>

            <Dialog
                sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-description"
                aria-labelledby="alert-dialog-title"
            >
                <IconButton
                    sx={{ ":hover": { color: "red", rotate: "360deg", transition: "0.3s" }, position: "absolute", top: 0, right: 10 }}
                    onClick={handleClose}
                >
                    <Close />
                </IconButton>

                {selectedProduct && <ProductDetails product={selectedProduct} />}
            </Dialog>
        </Container>
    );
};

export default WomenProduct;
