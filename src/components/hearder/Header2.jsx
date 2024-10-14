import { Badge, Container, IconButton, ListItem, Stack, Typography, useTheme } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout'; // Import Logout icon
import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  flexGrow: 0.4,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  '&:hover': {
    border: "1px solid #332",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: '300px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: "#777"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const options = [
"All Categories","Clothes","Electronices","Toys","accessories"
];

const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  useEffect(() => {
    const cartIds = JSON.parse(localStorage.getItem("cartIds"));
    setCartCount(cartIds ? cartIds.length : 0); // Handle case when cartIds is null
  }, [cartCount]);

  const handleSignOut = () => {
    // Optional: Clear user data from localStorage or perform any other sign out logic
    localStorage.removeItem("userData"); // Remove user data
    // Redirect to login page (if necessary)
  };

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <ShoppingCartIcon />
        <Typography variant="body2"> Ecommerce</Typography>
      </Stack>

      <Search
        sx={{ borderRadius: "22px", display: "flex", justifyContent: "space-between" }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
        <div>
          <List
            component="nav"
            aria-label="Device settings"
            // @ts-ignore
            sx={{ bgcolor: theme.palette.myColor.main, borderBottomRightRadius: 22, borderTopRightRadius: 22, p: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{ width: 95, textAlign: "center", "&:hover": { cursor: "pointer" } }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px" }} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "13px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <Link to='/cart'>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={+cartCount} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Link>

        <Link to='/profile'>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Link>

        {/* Add Sign Out Icon */}
        <Link to='/login' onClick={handleSignOut}>
          <IconButton>
            <LogoutIcon />
          </IconButton>
        </Link>
      </Stack>
    </Container>
  );
}

export default Header2;
