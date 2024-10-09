// @ts-ignore
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @ts-ignore
import Footer from "./components/footer/Footer";
import About from "./components/About/About";
import Home from "./pages/Home";

import Cart from "components/cart/Cart";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";  
import ContactUs from "./pages/ContactUs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/productSlice";
import { allProducts } from "./products";
import AddProduct from "./components/CreateNewProduct/CreateNewProduct";
import Services from "./components/Services/Services";

function App() {
  const [theme, colorMode] = useMode();
  // @ts-ignore

  const dispatch = useDispatch();
    // @ts-ignore
    // Fake API call or data fetch to simulate fetching products from an API
    useEffect(() => {
        
        dispatch(setProducts(allProducts)); // Set fetched products to the Redux store
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
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/add" element={<AddProduct />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

