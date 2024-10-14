// @ts-nocheck
import { useState } from 'react';
import {
  Toolbar, Typography, CssBaseline, Box, Button, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TextField, IconButton, Paper
} from '@mui/material';
import { Edit, Delete, Save, Cancel } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Header1 from 'components/hearder/Header1';
import Header3 from 'components/hearder/Header3';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { images } from '../../images';

const Dashboard = () => {
  const [selectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [editProductId, setEditProductId] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const products = useSelector((state) => state.products.products);
  // const [sortDirection, setSortDirection] = useState("asc");

 

  // Filter products based on the selected category and search query
  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortDirection === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  const handleSortToggle = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  // Delete Product
  const handleDelete = async (productId) => {
    try {
      const res = await fetch(`http://localhost:5000/products/${productId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        console.log('Product deleted');
        // Refresh product list here if needed
      } else {
        throw new Error('Failed to DELETE product');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Update Product
  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:5000/products/${editProductId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct),
      });

      if (res.ok) {
        console.log('Product updated successfully');
        setEditProductId(null);
        setUpdatedProduct({});
      } else {
        throw new Error('Failed to update product');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Edit Mode Handlers
  const handleEdit = (product) => {
    setEditProductId(product.id);
    setUpdatedProduct(product); // Initialize with existing product data
  };

  const handleCancelEdit = () => {
    setEditProductId(null);
    setUpdatedProduct({});
  };

  const handleInputChange = (e, field) => {
    setUpdatedProduct({ ...updatedProduct, [field]: e.target.value });
  };

  return (
    <>
      <Header1 />
      <Header3 />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 1 }}>
          <Toolbar />
          <Typography variant="h4" gutterBottom>
            Product Management
          </Typography>

          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              label="Search by name"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ mr: 2 }}
            />
            <Button variant="contained" color="error" component={Link} to="/manager/add">
              Add Product
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>
                    Price
                    <IconButton onClick={handleSortToggle}>
                      <ArrowUpwardIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Main Image</TableCell>
                  <TableCell>Gallery</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    {/* Editable or static cells based on edit mode */}
                    <TableCell>
                      {editProductId === product.id ? (
                        <TextField
                          value={updatedProduct.name || ''}
                          onChange={(e) => handleInputChange(e, 'name')}
                        />
                      ) : (
                        product.name
                      )}
                    </TableCell>
                    <TableCell>
                      {editProductId === product.id ? (
                        <TextField
                          value={updatedProduct.price || ''}
                          onChange={(e) => handleInputChange(e, 'price')}
                        />
                      ) : (
                        `$${product.price}`
                      )}
                    </TableCell>
                    <TableCell>
                      {editProductId === product.id ? (
                        <TextField
                          value={updatedProduct.description || ''}
                          onChange={(e) => handleInputChange(e, 'description')}
                        />
                      ) : (
                        product.description
                      )}
                    </TableCell>
                    <TableCell>
                      <img src={typeof product.image === 'string' ? product.image : images[product.image]} alt={product.name} style={{ width: 50 }} />
                    </TableCell>
                    {/* <TableCell>{product.gallery.join(", ")}</TableCell> */}
                    <TableCell>{product.rating}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      {editProductId === product.id ? (
                        <>
                          <IconButton color="primary" onClick={handleUpdate}>
                            <Save />
                          </IconButton>
                          <IconButton color="default" onClick={handleCancelEdit}>
                            <Cancel />
                          </IconButton>
                        </>
                      ) : (
                        <>
                          <IconButton color="primary" onClick={() => handleEdit(product)}>
                            <Edit />
                          </IconButton>
                          <IconButton color="error" onClick={() => handleDelete(product.id)}>
                            <Delete />
                          </IconButton>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
