import React from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import "./Info3.css";
import PersonIcon from "@mui/icons-material/Person";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import rightImage from "../../img/right-image.png";
const LoanRequirementsSection = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Box
      className="loan-requirements-section"
      sx={{ background: "linear-gradient(to top, #ffffff, #df9222)", }}
    >
      <Typography variant="h4" sx={{ color: "#001F3F", marginBottom: "20px" }}>
        ¿Qué necesita para su <strong>préstamo</strong>?
      </Typography>
      <Grid container spacing={2}>
        <Grid container item sm={9}>
          <Grid item>
            <div className="requirements-content">
              <div className="requirements-list">
                <Box
                  display="flex"
                  flexDirection={isDesktop ? "column" : "row"}
                  alignItems="center"
                  textAlign="center"
                >
                  <PersonIcon className="icon" sx={{ fontSize: 50 }} />
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "center" }}
                    className="requirement-text"
                  >
                    Entre 22 y 69 años de edad
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection={isDesktop ? "column" : "row"}
                  alignItems="center"
                  textAlign="center"
                >
                  <CardMembershipIcon className="icon" sx={{ fontSize: 50 }} />
                  <Typography variant="body1" className="requirement-text">
                    Tener DNI vigente y en buen estado
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection={isDesktop ? "column" : "row"}
                  alignItems="center"
                  textAlign="center"
                >
                  <WorkIcon className="icon" sx={{ fontSize: 50 }} />
                  <Typography variant="body1" className="requirement-text">
                    Negocio activo
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection={isDesktop ? "column" : "row"}
                  alignItems="center"
                  textAlign="center"
                >
                  <PhoneIcon className="icon" sx={{ fontSize: 50 }} />
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "center" }}
                    className="requirement-text"
                  >
                    Teléfono y mail de contacto
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection={isDesktop ? "column" : "row"}
                  alignItems="center"
                  textAlign="center"
                >
                  <MailOutlineIcon className="icon" sx={{ fontSize: 60 }} />
                  <Typography variant="body1" className="requirement-text">
                    Cuenta bancaria a su nombre
                  </Typography>
                </Box>
              </div>
            </div>
          </Grid>
          <Grid display="flex" justifyContent="center" sm={12}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="70%"
              m={2}
              mt={4}
              flexDirection={(isDesktop) ? "row" :"column"}
            >
              <Typography variant="h6" textAlign= {(isDesktop) ? "left":"center"}>
                <b>Solicíta tu préstamo o crédito con nuestros asesores:</b>
              </Typography>
              <Button
                variant="contained"
                color="success" 
                sx={{ ml: 1, m:1,   width:(isDesktop) ? "35%":"90%" }}
                startIcon={<CallIcon />}
                href="https://wa.me/51952107949"
              >
                Ricardo +51 952-107-949
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{  width:(isDesktop) ? "35%":"90%" }}
                startIcon={<CallIcon />}
                href="https://wa.me/51923824245"
              >
                Kelly +51 923-824-245
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          md={3}
          display="flex"
          justifyContent="center"
          className="right-image"
        >
          <img src={rightImage} alt="Right Image" />
        </Grid>
      </Grid>
      {/* <Grid container spacing={3} className="image-container">
         
        </Grid> */}
    </Box>
  );
};

export default LoanRequirementsSection;
