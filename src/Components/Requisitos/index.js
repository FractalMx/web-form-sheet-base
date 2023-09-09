import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, useMediaQuery, Grid } from "@mui/material";
import { Parallax } from "rc-scroll-anim";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  rectangle: {
    width: "100%",
    height: "180px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginTop: 1,
  },
}));
const Requisitos = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const classes = useStyles();

  return (
    <Parallax
      animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
      style={{ transform: "translateX(-100px)", opacity: 0 }}
      className="code-box-shape"
    >
      <Box className={classes.container}>
        <Typography variant="h3">Requisitos</Typography>
        <Grid container spacing={3} display="flex" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box className={classes.rectangle}>
              <Typography variant="h5">PRESTANEGOCIOS</Typography>
              <ul className={classes.list}>
                <li>Negocio en funcionamiento</li>
                <li>Debes tener DNI</li>
                <li>Recibo de servicio a tu nombre</li>
                <li>Cuenta bancaria o aplicativos</li>
                <li>Estar bien calificado en el sistema financiero INFOCORP</li>
              </ul>
            </Box>
          </Grid>
           
          <Grid item xs={12} md={6}>
            <Box className={classes.rectangle}>
              <Typography variant="h5">PRESTAPRENDA </Typography>
              <ul className={classes.list}>
                <li>Prenda con boleta de compra o factura </li>
                <li>De no tener comprobante deberá firmar una declaración jurada para más seguridad</li>
                <li>Los artículos deben estar en buenas condiciones nuevos o seminuevos</li>
                
              </ul>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box className={classes.rectangle}>
              <Typography variant="h5">
                PRESTAMOS PARA MAL CALIFICADOS (INFOCORP)
              </Typography>
              <li>Negocio en funcionamiento</li>
                <li>Debes tener DNI</li>
                <li>Recibo de servicio a tu nombre</li>
                <li>Cuenta bancaria o aplicativos</li>
                <li>Casa propia o aval</li>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Parallax>
  );
};

export default Requisitos;
