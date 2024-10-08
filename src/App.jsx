// @ts-ignore
import Header1 from "./components/hearder/Header1";
import Header2 from "./components/hearder/Header2";
import Header3 from "./components/hearder/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @ts-ignore
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import About from "./components/About/About"; // Make sure the import matches the correct component name

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
        <CssBaseline />
        <Router>
          <Header1 />
          <Header2 />
          <Header3 />
          <Box bgcolor={theme.
// @ts-ignore
          palette.bg.main}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

