import { Box, Button, Container, Dialog, IconButton, Rating, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useSelector } from "react-redux"; // Import hooks
// import { setProducts } from "../../redux/productSlice"; // Import the action from the product slice

// import { allProducts } from '../../products';
const Main = () => {
    const [alignment, setAlignment] = useState('left');
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); // State to hold selected product data
    const theme = useTheme();

    // Redux hooks
    // const dispatch = useDispatch();
    // @ts-ignore
    const products = useSelector((state) => state.products.products); // Fetch products from Redux store

    // Fake API call or data fetch to simulate fetching products from an API
    // useEffect(() => {

    //     dispatch(setProducts(allProducts)); // Set fetched products to the Redux store
    // }, [dispatch]);

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleClickOpen = (product) => {
        setSelectedProduct(product); // Set the selected product
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container sx={{ py: 9, mt: 1 }}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
                <Box>
                    <Typography variant="h6">Selected Products</Typography>
                    <Typography fontWeight={300} variant="body1">All our arrivals in an exclusive brand selection</Typography>
                </Box>

                <ToggleButtonGroup
                    color="error"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{
                        ".Mui-selected": {
                            border: "1px solid rgba(233,69,96,0.5) !important",
                            color: "#e94560",
                            backgroundColor: "initial",
                        },
                    }}
                >
                    <ToggleButton sx={{ color: theme.palette.text.primary }} value="left" aria-label="left aligned">
                        All Products
                    </ToggleButton>
                    <ToggleButton sx={{ mx: "16px !important", color: theme.palette.text.primary }} value="center" aria-label="center aligned">
                        Men Category
                    </ToggleButton>
                    <ToggleButton sx={{ color: theme.palette.text.primary }} value="right" aria-label="right aligned">
                        Women Category
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {products.map((product) => (
                    <Card key={product.id} sx={{ maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": { rotate: "1deg", scale: "1.1", transition: "0.35s" } }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={product.image}
                            title={product.name}
                        />
                        <CardContent>
                            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <Typography gutterBottom variant="h6" component={"div"}>
                                    {product.name}
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    ${product.price.toFixed(2)}
                                </Typography>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{ justifyContent: "space-between" }}>
                            <Button onClick={() => handleClickOpen(product)} sx={{ textTransform: "capitalize" }} size="large">
                                <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                                Add to cart
                            </Button>

                            <Rating precision={0.5} name="read-only" value={product.rating} readOnly />
                        </CardActions>
                    </Card>
                ))}
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

export default Main;