import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, useMediaQuery, Paper, Button, Grid } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './ComoPagar.css';
import celular from '../../img/celular.jpeg';
import backgroundYoungMan from '../../img/young-man.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    backgroundImage: `url(${backgroundYoungMan})`,
    backgroundSize: 'cover',
    height: '140vh',
    minHeight: '140vh',
  },
  whatsApp: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    minHeight: '30vh',
  },
  floatingContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '8px',
    borderRadius: 20,
    margin: '16px',
    marginTop: '90%',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '99%',
    display: 'flex',

    maxWidth: '99%',
  },
  floatingContainerWS: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '16px',

    margin: '16px 0',
    textAlign: 'center',
    width: '100%',

  },
  textVertical: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '0.3rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    padding: '2px'
  },
  text: {
    fontSize: '0.4rem',
    padding: '2px'
  },
  textWS: {
    fontSize: '1.2rem',
    marginBottom: '8px',
    padding: '2px'
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '8px',
  },

  button: {
    display: 'flex',
    width: "100%",
    height: "40%",
    alignItems: 'center',
    justifyContent: 'center',

    color: "white",

  },
  buttonText: {
    marginLeft: '8px',
  },
  '@media (min-width: 900px)': {
    root: {
      flexDirection: 'row',
      height: '70vh',
      minHeight: '70vh',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '32px', // Ajustar el espaciado aquí
    },
    whatsApp: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '32px', // Ajustar el espaciado aquí
    },
    floatingContainer: {
      margin: '16px', // Ajustar el espaciado aquí
      maxWidth: 'none',
      flexDirection: 'column',
      width: '60%',
      display: 'flex',


      marginTop: '0%',
    },
    button: {

      width: "20%",


    },
    textVertical: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',

    },
    textContainer: {
      margin: '0 16px',
    },
    title: {

      marginBottom: '8px',

      padding: '5px'
    },
    text: {
      fontSize: '0.6rem',


    },
    textWS: {
      fontSize: '1.5rem',
      marginBottom: '8px',
      padding: '2px'
    },
    icon: {
      fontSize: '3.0rem',
      marginBottom: '8px',
    }
  },
}));


const ComoPagar = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <Box className="loan-section" justifyContent="center" alignItems="center">
      {/* <Box className="content"
        maxWidth="100%"
        height={isDesktop ? 170 : 240}
        width="100%"
        bgcolor="#b66e06"
        justifyContent="center"

      >
       
      </Box> */}
      <Box maxWidth="100%"
        display="flex"
        height={isDesktop ? 400 : 480}
        width="100%"
        alignContent="center"
        flexDirection="column"
        sx={{
          background: 'linear-gradient(to left, #ffffff, #df9222)',

        }}
      >
        <Box display="flex" width="80%" m={5} sx={{ zIndex: 9999 }}>
          <Typography sx={{ color: '#b16b04', fontSize: isDesktop ? 45 : 32 }}>
            ¿Cómo pagar?
          </Typography>

        </Box>

        <Box display="flex" width="60%" mt={1} justifyContent="center" alignItems="center" sx={{ zIndex: 9999 }}>

          <Typography ml={4} sx={{ color: 'white', fontWeight: 'bold', fontSize: isDesktop ? 48 : 35 }}>
            Paga tu préstamo con total tranquilidad desde tu celular
          </Typography>
        </Box>
        <Box
          maxWidth="100%"

          height={isDesktop ? 400 : 480}
          width="100%"
          sx={{

            backgroundImage: `url(${celular})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.2,
            position: "absolute"
          }}
        />


      </Box>
      <Box className={classes.root}>
        <Paper elevation={3} className={classes.floatingContainer}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} className={classes.featureContainer}>
              <LockIcon className={classes.featureIcon} />
              <Typography className={classes.featureTitle}>Seguro</Typography>
              <Typography className={classes.featureText}>
                Contamos con un equipo para darte un respaldo.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={classes.featureContainer}>
              <AccessTimeIcon className={classes.featureIcon} />
              <Typography className={classes.featureTitle}>Rápido</Typography>
              <Typography className={classes.featureText}>
                Nuestros asesores están disponibles de lunes a sábados para darte
                el mejor servicio.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={classes.featureContainer}>
              <AccountBalanceIcon className={classes.featureIcon} />
              <Typography className={classes.featureTitle}>
                Transferencia bancario
              </Typography>
              <Typography className={classes.featureText}>
                Todo préstamo con nuestros clientes es bancarizado.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={classes.featureContainer}>
              <CreditCardIcon className={classes.featureIcon} />
              <Typography className={classes.featureTitle}>
                Sencilla forma de pago
              </Typography>
              <Typography className={classes.featureText}>
                Todo lo puedes hacer desde tu celular.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box className={classes.whatsApp} maxWidth="100%"

        width="100%"
        display="flex"
        justifyContent="center">
        <Typography variant="h6" className={classes.textWS}>
          Si tienes dudas puedes comunicarte con nosotros haciendo click aquí:
        </Typography>

        <Button variant="contained" sx={{
          backgroundColor: "#358930", '&:hover': {
            backgroundColor: "#00bb2d",
            height: "42%",
            width: "100%",
          }
        }} className={classes.button} href="https://wa.me/numero-de-tu-contacto">
          <WhatsAppIcon />
          <span className={classes.buttonText}>WhatsApp</span>
        </Button>
      </Box>
    </Box >
  );

};

export default ComoPagar;