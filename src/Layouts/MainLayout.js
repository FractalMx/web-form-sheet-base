import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import NavbarHome from "../Components/Navbar/NavbarHome";
import Header from "../Components/Header";
import { makeStyles } from '@mui/styles';
import Footer from "../Components/Footer";
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//import Main from '../View/Main';
const useStyles = makeStyles((theme) => ({
  fab: {
    position:"fixed",
    zIndex: 9999 
  },
}));
function MainLayout() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <NavbarHome />
      <Box>
        <Outlet />
      </Box>
      <Footer description="Créditos Yadiel" title="Créditos Yadiel" />
      <Fab className={classes.fab}  href="https://wa.me/numero-de-tu-contacto">
        <WhatsAppIcon />
      </Fab> 
    </div>
  );
}

export default MainLayout;
