import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
const IconSection =() =>{
    const theme=useTheme()
    return(
        <Container sx={{ mt:3, bgcolor:theme.palette.mode==="dark"? "#000":"#fff"}}>
            <Stack divider={ useMediaQuery('(min-width:600px)') ? <Divider orientation="vertical" flexItem /> :null}
                sx={{flexWrap:"wrap"}} direction={"row"} alignItems={"center"}>
                <MyBox icon={<ElectricBoltIcon fontSize="large" />}
                title={"Fast Delevary"}
                sudtitle={"Start from 10$"}/>
                <MyBox icon={<WorkspacePremiumIcon fontSize="large" />} 
                title={"Mony Gurantee"} 
                sudtitle={"7Dayes Back"}/>
                <MyBox icon={<AccessAlarmIcon fontSize="large" />} 
                title={"360Days"} 
                sudtitle={"For free return"}/>
                <MyBox icon={<CreditScoreIcon fontSize="large" />} 
                title={"Payment"} 
                sudtitle={"Secure System"}/>
            </Stack>
        </Container>
    );
}
export default IconSection;



// eslint-disable-next-line react/prop-types
const MyBox=({icon,title,sudtitle}) =>{
    const theme= useTheme()
    return(
        <Box  sx={{ width:200 ,display:"flex", alignItems:"center" ,flexGrow:1 ,gap:3, py:1.6 ,
            justifyContent:useMediaQuery('(min-width:600px)') ?"center": "left"
        }}>
            {icon}
            <Box >
                <Typography variant="body1" >{title}</Typography>
                <Typography sx={{
                    fontWeight:300, color: theme.palette.text.secondary,
                }} variant="body1"
                > {sudtitle}</Typography>
            </Box>
        </Box>
    )
}


