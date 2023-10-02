import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavbarHome from "../Components/Navbar/NavbarHome";
import Header from "../Components/Header";
import { makeStyles } from "@mui/styles";
import Footer from "../Components/Footer";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Header />
      <NavbarHome />
      <Box>
        <Outlet />
      </Box>
      <Footer
        description="Creditos Yadiel PERU S.A.C  RUC: 20611453281 Legalmente Constituida, en el año
                2023"
        title="Créditos Yadiel"
      />
      <Box
        sx={{
          position: "fixed",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          bottom: 10,
          right: 10,
          color: "white",
          backgroundColor: "rgba(228, 103, 33, .8)",
          borderRadius:4,
          padding:1
        }}
      >
        <Typography variant="h6" sx={{color:"white"}}>
          <b>Contacta a nuestros asesores:</b>
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ ml: 1, m: 1 }}
          startIcon={<WhatsAppIcon />}
          href="https://wa.me/51952107949"
        >
          Ricardo +51 952-107-949
        </Button>
        <Button
                variant="contained"
                color="success"
                sx={{ ml: 1, m: 1 }}
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/51923824245"
              >
                Kelly +51 923-824-245
              </Button>
      </Box>
    </Box>
  );
}

export default MainLayout;
