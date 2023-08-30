import React, { useEffect } from "react";
import { Outlet, useMatches, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavbarHome from "../Components/Navbar/NavbarHome";
import Header from "../Components/Header";
import { makeStyles } from '@mui/styles';
import { useTheme } from "@mui/material";
import { Container } from "@mui/system";
import jwtDecode from "jwt-decode";
import Footer from "../Components/Footer";
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//import Main from '../View/Main';
const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    backgroundColor:'red',
    bottom: '0px',
    right: '0px',

    width:'100%'
  },
}));
function MainLayout() {
  const { palette } = useTheme();
  const classes = useStyles();
  return (
    <div>
      <Header />
      <NavbarHome />

      {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
      <Container maxWidth="false"  fixed={false}>
        <Box  sx={{ width: '100%' }}>
          <Outlet  />
          {/* <Box style={{backgroundColor:"red"}} className={classes.fab}>
          <Fab color="primary"  href="https://wa.me/numero-de-tu-contacto">
            <WhatsAppIcon />
          </Fab>
          </Box> */}
          
        </Box>
       
      </Container>
      <Footer description="Créditos Yadiel" title="Créditos Yadiel" />
      
     
     
    </div>
  );
}

export default MainLayout;
