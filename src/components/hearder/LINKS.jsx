import { ExpandMore } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// eslint-disable-next-line react/prop-types
const LINKS = ({title})=>{
    return(
        <Box sx={{
        position:"relative",
        display:"flex" , 
        alignItems:"center",
        ":hover .show": {display:"block"},
        ":hover ": {cursor:"pointer"}
        }}  >
<Typography variant="body1">
    {title}
</Typography>
<ExpandMore sx={{fontSize:"16px",ml:1 , color:"white"}} ></ExpandMore>
<Box  className="show"
sx={{position:"absolute" ,
    top:"100%" ,
    minWidth:"170px",
    transform:"translatex:(-50%)" ,
    left:"50%", 
    display:"none",
    zIndex:2,
    }}>
    
    <Paper className="show" sx={{mt:"10px" }}>
            <nav aria-label="secondary mailbox folders">
                    <List>

                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText sx={{
                            ".MuiTypography-root":{fontSize:"15px"}
                        }} primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ ":hover .sub-link": {display:"block"}, position:"relative" }} disablePadding  >
                        <ListItemButton>
                        <ListItemText sx={{
                            ".MuiTypography-root":{fontSize:"15px"}
                        }} primary="Products"  />
                        <ArrowForwardIosIcon sx={{fontSize:"15px"}}/>
                        </ListItemButton>
<Box className="sub-link" 
    sx={{position:"absolute" , top:0, left:"100%" , display:"none"}}>
    <Paper sx={{ml:1,minWidth:"130px" }}>
        <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Add Product" />
                    </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Edit Product" />
                    </ListItemButton>
                </ListItem>
                </List>
        </nav>
    </Paper>
</Box>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText sx={{
                            ".MuiTypography-root":{fontSize:"15px"}
                        }} primary="Orders" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText sx={{
                            ".MuiTypography-root":{fontSize:"15px"}
                        }} primary="Profile" />
                        </ListItemButton>
                    </ListItem>

                    </List>
                </nav>
    </Paper>
    
</Box>

</Box>
    );
}
// eslint-disable-next-line react-refresh/only-export-components
export default LINKS;