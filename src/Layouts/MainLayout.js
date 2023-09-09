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
    position: "fixed",
    zIndex: 9999,
    right: 16, // Adjust the position as needed
    bottom: 16, // Adjust the position as needed
  },
}));
function MainLayout() {
  const classes = useStyles();
  return (
    <Box  sx={{ position: "relative", minHeight: "100vh" }}> 
      <Header />
      <NavbarHome />
      <Box>
        <Outlet />
      </Box>
      <Footer description="Creditos Yadiel PERU S.A.C Legalmente Constituida, en el año
                2023" title="Créditos Yadiel" />
      <Fab sx={{
          position: "fixed",
          zIndex: 9999,
          bottom: 10,
          right: 10,
        }} href="https://wa.me/numero-de-tu-contacto">
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
}

export default MainLayout;
