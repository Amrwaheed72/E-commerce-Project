import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Grid, TextField, Typography, Rating, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { addProduct } from '../../redux/productSlice';

const AddProduct = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    // @ts-ignore
    const products = useSelector(state => state.products.products);

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [galleryUrls, setGalleryUrls] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            name: productName,
            description,
            price: parseFloat(price),
            category,
            image: imageUrl,
            gallery: galleryUrls.split(',').map(url => url.trim()),
            rating,
        };

        const handler = async () => {
            try {
                const res = await fetch("http://localhost:5000/products", {
                  method: "POST",
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(newProduct),
                });
          
                if (res.ok) {
                    console.log(await res.json())
                  return await res.json();
                } else {
                  throw new Error('Failed to add new product');
                }
              } catch (error) {
                return new Error(error.message);
              }
        }
        dispatch(addProduct(newProduct));
        handler()
        // Reset form fields
        setProductName('');
        setDescription('');
        setPrice('');
        setCategory('');
        setImageUrl('');
        setGalleryUrls('');
        setRating(0);

        console.log("before", products)
        console.log('Product added:', newProduct);
        console.log("after", products)
    };

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                Add New Product
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Product Name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth required>
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select
                                labelId="category-label"
                                value={category}
                                label="Category"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <MenuItem value="Men">Men</MenuItem>
                                <MenuItem value="Women">Women</MenuItem>
                                <MenuItem value="Unisex">Unisex</MenuItem>
                            
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Product Rating:
                        </Typography>
                        <Rating
                            name="product-rating"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            precision={0.5}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Product Image URL"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Gallery Image URLs (comma-separated)"
                            value={galleryUrls}
                            onChange={(e) => setGalleryUrls(e.target.value)}
                            helperText="Enter URLs separated by commas"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: theme.palette.success.main,
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: theme.palette.success.dark,
                                },
                            }}
                        >
                            Add Product
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default AddProduct;