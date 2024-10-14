// @ts-nocheck
import { Box, Container, Drawer, IconButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
import { useEffect, useState } from "react";
import WindowIcon from '@mui/icons-material/Window';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@emotion/react";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import DevicesIcon from '@mui/icons-material/Devices';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Close } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LINKS from "./LINKS"
import { Link } from 'react-router-dom';

const Header3 = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [isAdmin] = useState(JSON.parse(sessionStorage.getItem("admin")));
  const [isLoggedIn] = useState(JSON.parse(sessionStorage.getItem("isLoggedIn")));
  console.log(isAdmin, isLoggedIn)


  // useEffect(() => {
  //   setIsAdmin(sessionStorage.getItem("admin"))
  // }, [])

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor, open) =>
      (event) => {
        if (
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  return (
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 5 }}>
      <Box>

        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ width: 222, bgcolor: theme.palette.myColor.main, color: theme.palette.text.primary }}
        >
          <WindowIcon></WindowIcon>
          <Typography
            sx={{
              padding: 0,
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Category
          </Typography>
          <Box flexGrow={1} ></Box>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{ ".MuiButtonBase-root ": { width: 222, bgcolor: theme.palette.myColor.main } }}
        >

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsBasketballIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DevicesIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>

      </Box>

      {useMediaQuery('(min-width:1200px)') && (
        <Stack gap={10} direction={"row"} alignItems={"center"}>


          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button component={Link} to="/" sx={{ color: theme.palette.text.primary }}>
              Home
            </Button>
          </Box>

          {isLoggedIn &&
            (isAdmin &&
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button component={Link} to="/manager" sx={{ color: theme.palette.text.primary }}>
                  Products Manager
                </Button>
              </Box>
            )}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <Button component={Link} to="/about" sx={{ color: theme.palette.text.primary }}>
              About us
            </Button>

          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <Button component={Link} to="/contact" sx={{ color: theme.palette.text.primary }}>
              Contact us
            </Button>

          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <Button component={Link} to="/profile" sx={{ color: theme.palette.text.primary }}>
              Profile
            </Button>

          </Box>
          {/* <Link to='/about' style={{ textDecoration: 'none', color: 'black' }} className="header">{"About us"}</Link> */}

        </Stack>

      )}



      {useMediaQuery('(max-width:1200px)') && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root.css-12cfoy0-MuiPaper-root-MuiDrawer-paper": { height: "100%" } }}
      >
        <Box sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}>
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "360deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          <List sx={{ py: 0, my: 0 }}>
            {[
              { mainLink: "Home", link: "/" },
              { mainLink: "About us", link: "/about" },
              { mainLink: "Contact us", link: "/contact" },
              { mainLink: "Profile", link: "/profile" },
            ].map((item) => (
              <ListItem key={item.mainLink} sx={{ py: 0, my: 0 }}>
                <ListItemButton component={Link} to={item.link} sx={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText primary={item.mainLink} />
                </ListItemButton>
              </ListItem>
            ))}

            {/* The expandable "pages" section */}
            <Accordion elevation={0} sx={{ ml: 2, bgcolor: "initial" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />} // Expand icon only for "pages"
                aria-controls="pages-content"
                id="pages-header"
              >
                Pages
              </AccordionSummary>
              <List sx={{ py: 0, my: 0 }}>
                {["Add Product", "Edit Product"].map((link) => (
                  <ListItem key={link} sx={{ py: 0, my: 0 }}>
                    <ListItemButton>
                      <ListItemText primary={link} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Accordion>
          </List>
        </Box>
      </Drawer>


    </Container>
  )
}
export default Header3;