import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, useMediaQuery, Paper, Button, Grid } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './ComoPagar.css';
import celular from '../../img/celular.jpeg';
import Bim from '../../img/Bim.jpg';
import Yape from '../../img/Yape.jpg';
import Plin from '../../img/Plin.jpg';

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
    height: '170vh',
    minHeight: '170vh',
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
    width: "70%",
    height: "60%",
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        
      width: "70%",
    },
    margin:2,
    color: "#358930",

  },
  button2: {
    display: 'flex',
    width: "70%",
    height: "40%",
    alignItems: 'center',
    justifyContent: 'center',

    color: "white",
    '&:hover': {
      backgroundColor: "white",
      height: "40%",
      width: "70%",
    }
  },
  buttonText: {
    marginLeft: '8px',
  },
  buttonText2: {
    marginLeft: '8px',
    color: "white"
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

      width: "30%",
      '&:hover': {
        
        width: "30%",
      },
     margin:2, 
    },
    button2: {

      width: "30%",
      '&:hover': {
        backgroundColor: "white",
        height: "42%",
        width: "30%",
      }

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

const bankImages = [
  { name: 'BCP', url: 'https://conference.chamilo.org/2023/en/wp-content/uploads/2016/08/logo_1_b-768x357.jpg',width: '100%' },
  { name: 'BBVA', url: 'https://www.bbva.com/wp-content/uploads/2019/04/Logo-BBVA-1920x1080.jpg',width: '100%' },
  { name: 'Interbank', url: 'https://www.limaeasy.com/media/reviews/photos/thumbnail/1500x500s/19/7f/57/interbank-peru-95-1621146444.jpg', width: '100%'},
  { name: 'Scotiabank', url: 'https://cotizator.com/wp-content/uploads/2020/07/Screenshot-2019-02-21-22.34.09-1-300x169.png',width: '100%' },
  { name: 'Bim', url: Bim, width: '60%' },
  { name: 'Plin', url: Plin, width: '60%' },
  { name: 'Yape', url: Yape, width: '80%' },

];

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
        <Box display="flex" width="80%" m={5} >
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
      <Box sx={{m:4,display:"flex", justifyContent:"center", flexDirection:"column" }}>
      <Box className={classes.whatsApp} maxWidth="100%"
        width="100%"
        display="flex"
        justifyContent="center">
        <Typography variant="h4" align="center" className={classes.textWS}>
          <b>¿Dónde enviar mi recibo de pago?</b>
        </Typography>
        <Typography variant="body1" align="center" m={2} className={classes.textWS}>
          Para validar su pago es importante enviar tu recibo de consignación
          o captura de la transacción con tus datos y número de operación
          a nuestro canal de cobranza para poder registrarlo, recuerda no perder
          tu recibo ya que solo podemos validar el pago con el número de
          operación y tus datos.
        </Typography>  
        <Button variant="contained" sx={{
          backgroundColor: "#e45000", '&:hover': {
            backgroundColor: "#e46721",
           
          }
          
        }} className={classes.button2} href="https://wa.me/51924174718">
          <WhatsAppIcon style={{color: "white"}} />
          <span className={classes.buttonText2}>Canal de cobranza</span>
        </Button>
        <Typography variant="body2" align="center" m={2} style={{marginTop:10}}>
          Horario de atención: lunes a sábados de 9:00 a.m. a 6:00 p.m.
        </Typography>
      </Box>
      <Typography variant="h6" gutterBottom align="center"mb={5}>
      Para tu comodidad puedes pagar tus cuotas online, por aplicativos y agentes bancarios, 
      que no se te pase la fecha de vencimiento de tus cuotas.
      <b>¡Evita los intereses y penalidades!</b>
      </Typography>
      <Grid container spacing={2} >
        {bankImages.map((bank, index) => (
          <Grid item key={index} xs={4} sm={3}>
            <Box elevation={1}  sx={{display:'flex',justifyContent:"center", alignContent:"center",margin:2}}>
              <img
                src={bank.url}
                alt={bank.name}
                style={{ width:bank.width, height: 'auto', margin:4,}}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
        
      </Box>
      
      <Box className={classes.whatsApp} maxWidth="100%"

        width="100%"
        display="flex"
        justifyContent="center">
        <Typography variant="h6" className={classes.textWS}>
          Si tienes dudas comunicate con un asesor haciendo click aquí:
        </Typography>
       
              
        <Button variant="contained" sx={{marginTop:1,
          backgroundColor: "#358930", '&:hover': {
            backgroundColor: "#00bb2d",
           
          }
        }} className={classes.button}   href="https://wa.me/51952107959">
          <WhatsAppIcon />
          <span className={classes.buttonText}>Ricardo +51 952-107-959</span>
        </Button>
        <Button variant="contained" sx={{marginTop:1,
          backgroundColor: "#358930", '&:hover': {
            backgroundColor: "#00bb2d",
           
          }
        }} className={classes.button}   href="https://wa.me/51923824245">
          <WhatsAppIcon />
          <span className={classes.buttonText}>Kelly +51 923-824-245</span>
        </Button>
      </Box>
      
    </Box >
  );

};

export default ComoPagar;