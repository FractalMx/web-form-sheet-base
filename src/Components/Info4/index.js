import React from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import "./Info4.css";
import PersonIcon from "@mui/icons-material/Person";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import leftImage from "../../img/left-image.png";
import Equifax from "../../img/Equifax.png";
import Sentinel from "../../img/sentinel.png";

const LoanRequirementsSection = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Box
      className="loan-requirements-section-info4"
      sx={{
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(to top, #ffffff, grey)",
        marginTop:5
      }}
    >
      <div className="wave-top"></div>
      <Grid container spacing={2}>
        <Grid
          item
          md={4}
          xs={12}
          display="flex"
          justifyContent="center"
          className="left-image"
        >
          <img src={leftImage} alt="Left Image" />
        </Grid>
        <Grid container item sm={8}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            m={2}
            flexDirection={"column"}
          >
            <Typography variant="h4" sx={{ color: "#001F3F", margin: "10px" }}>
              Vas a pedir tu crédito y quieres conocer tu historial crediticio
            </Typography>

            <Typography
              variant="body1"
              sx={{ textAlign: "left", margin: "10px" }}
              className="requirement-text"
            >
              Ingresa de manera gratuita a SENTINEL e INFOCORP y registrate.
              Obtén el seguimiento de tus préstamos e historial.
            </Typography>

            <Typography
              variant="body1"
              sx={{ textAlign: "left", margin: "10px" }}
            >
              Recuerda que tú mal comportamiento de pago quedará registrado en
              la Central de Riesgo SENTINEL e INFOCORP.
            </Typography>

            <Typography
              sx={{ textAlign: "left", fontSize: 13, margin: "10px" }}
            >
              Nuestras empresas Aliadas para brindarte un mejor servicio
              Financiero en nuestra Banca online:
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection={"row"}
            alignItems="center"
            textAlign="center"
            justifyContent="center"
          >
            <img
              src={Equifax}
              alt="Equifax"
              style={{ width: "20%", margin: 5 }}
            />
            <img
              src={Sentinel}
              alt="Sentinel"
              style={{ width: "18%", margin: 5 }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* <Grid container spacing={3} className="image-container">
         
        </Grid> */}
    </Box>
  );
};

export default LoanRequirementsSection;
