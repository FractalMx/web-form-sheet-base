import React from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import "./Info3.css";
import PersonIcon from "@mui/icons-material/Person";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from '@mui/icons-material/Call';
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import rightImage from "../../img/right-image.png";
const LoanRequirementsSection = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <Box className="loan-requirements-section" sx={{background: 'linear-gradient(to top, #ffffff, #e4a276)'}}>
      <Typography variant="h4" sx={{ color: "#001F3F", marginBottom: "20px" }}>
        ¿Qué necesita para su <strong>préstamo</strong>?
      </Typography>
      <Grid container spacing={2}>
        <Grid container item sm={9}>
          <Grid item>
            <div className="requirements-content">
              <div className="requirements-list">
                <Box  display="flex" flexDirection={isDesktop ? "column" : "row" }alignItems= "center"textAlign= "center">
                  <PersonIcon className="icon" sx={{ fontSize: 50 }} />
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "center" }}
                    className="requirement-text"
                  >
                    Entre 22 y 69 años de edad
                  </Typography>
                </Box>
                <Box  display="flex" flexDirection={isDesktop ? "column" : "row" }alignItems= "center"textAlign= "center">
                  <CardMembershipIcon className="icon" sx={{ fontSize: 50 }} />
                  <Typography variant="body1" className="requirement-text">
                    Tener DNI vigente y en buen estado
                  </Typography>
                </Box>
                <Box  display="flex" flexDirection={isDesktop ? "column" : "row" }alignItems= "center"textAlign= "center">
                  <WorkIcon className="icon" sx={{ fontSize: 50 }} />
                  <Typography variant="body1" className="requirement-text">
                    Antigüedad laboral de 4 meses
                  </Typography> 
                </Box>
                <Box  display="flex" flexDirection={isDesktop ? "column" : "row" }alignItems= "center"textAlign= "center">
                  <PhoneIcon className="icon" sx={{ fontSize: 50 }} />
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "center" }}
                    className="requirement-text"
                  >
                    Teléfono y mail de contacto
                  </Typography>
                </Box>
                <Box  display="flex" flexDirection={isDesktop ? "column" : "row" }alignItems= "center"textAlign= "center">
                  <MailOutlineIcon className="icon" sx={{ fontSize: 60 }} />
                  <Typography variant="body1" className="requirement-text">
                    Cuenta bancaria titular
                  </Typography>
                </Box>
              </div>
            </div>
          </Grid>
          <Grid display="flex" justifyContent="center"   sm={10}>
            <Box display="flex" justifyContent="center" alignItems="center" height="50%" >
            <Typography variant="body2" >
              Solicítalo con un click
              </Typography>
              <Button variant="contained" color="success"sx={{  ml: 2 }} startIcon={<CallIcon />}>
              +123-456-789
              </Button>
              
              </Box>
          </Grid>
          <Grid item sm={11} >
            <div className="additional-content">
              <Typography
                variant="body2"
                sx={{
                  color: "#999999",
                  fontSize: "12px",
                  marginBottom: "-20px",
                }}
              >
                Tasa Efectiva Anual (TEA) sin IGV de 81% | Tasa Costo Efectivo
                Anual (TCEA) sin IGV Mínima: 101% Máximo: 302%. Ejemplo de
                préstamo: Monto solicitado $200 a 01 mes | TEA sin IGV 81% –
                TCEA sin IGV 524% | Total a pagar S/45.00| El monto mínimo de
                financiación es $200 y el máximo $1,000 | Monto solicitado
                $xw1,000 a 10 meses |TEA sin IGV 83% – TCEA sin IGV 524% | Total
                a pagar $468.00 | Las cuotas del préstamo son Mensuales,
                iguales y consecutivas. El otorgamiento del préstamo está sujeto
                a evaluación crediticia.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item  md={3} display= "flex" justifyContent="center"className="right-image" >
          
            <img src={rightImage} alt="Right Image" />
          </Grid>
      </Grid>
      {/* <Grid container spacing={3} className="image-container">
         
        </Grid> */}
    </Box>
  );
};

export default LoanRequirementsSection;
