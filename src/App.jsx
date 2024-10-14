// @ts-ignore
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @ts-ignore
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Cart from "components/cart/Cart";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ContactUs from "./pages/ContactUs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/productSlice";
// import { allProducts } from "./products";
import AddProduct from "./components/CreateNewProduct/CreateNewProduct";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import ProductDetail from "components/ProductDitPage/moreDetails";
import Profile from "./pages/Profile";
import EditProf from "./pages/EditProf";
import Gallery from './components/gallery/Gallery';
import Dashboard from "components/dashboard/Dashboard";
import { setUsers } from "./redux/userSlice";


function App() {
  const [theme, colorMode] = useMode();
  // @ts-ignore

  const dispatch = useDispatch();
  // @ts-ignore
  // Fake API call or data fetch to simulate fetching products from an API
  useEffect(() => {
    // dispatch(setProducts(allProducts)); // Set fetched products to the Redux store
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => dispatch(setProducts(data)));
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => dispatch(setUsers(data)));
  }, [dispatch]);

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}>
      <ThemeProvider
        // @ts-ignore
        theme={theme}>
        <CssBaseline />
        <Router>
          {/* <Header1 />
          <Header2 />
          <Header3 /> */}
          <Box bgcolor={theme.
            // @ts-ignore
            palette.bg.main}>
            <Routes>
              {/* <Route path="/" element={<Hero />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/signup" element={<SignupPage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Service />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/manager/add" element={<AddProduct />} /> {/*  insinde the manager page that will be made */}
              <Route path="/manager" element={<Dashboard />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edit-profile" element={<EditProf />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

