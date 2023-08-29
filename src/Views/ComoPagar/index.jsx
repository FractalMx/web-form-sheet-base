import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, useMediaQuery, Paper, Button } from '@mui/material';
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
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        backgroundImage: `url(${backgroundYoungMan})`,
        backgroundSize: 'cover',
      
        minHeight: '70vh',
      },
      whatsApp: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        minHeight: '40vh',
      },
      floatingContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '16px',
        borderRadius: 20,
        margin: '16px 0',
        textAlign: 'center',
        width: '60%',
        maxWidth: 300,
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
        flexDirection: 'column',
        alignItems: 'center',
      },
      title: {
        fontSize: '0.9rem',
        fontWeight: 'bold',
        marginBottom: '8px',
        padding:'2px'
      },
      text: {
        fontSize: '0.7rem',
        marginBottom: '8px',
        padding:'2px'
      },
      textWS: {
        fontSize: '1.2rem',
        marginBottom: '8px',
        padding:'2px'
      },
      icon: {
        fontSize: '2.5rem',
        marginBottom: '8px',
      },
      button: {
        display: 'flex',
        width:"20%",
        height:"40%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#17d244",
        color: "white",
        '&:hover': {
          backgroundColor: "#00bb2d",
          height:"42%",
          width:"22%",
        },
      },
      buttonText: {
        marginLeft: '8px',
      },
      '@media (min-width: 900px)': {
        root: {
          flexDirection: 'row',
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
          margin: '0 16px', // Ajustar el espaciado aquí
          maxWidth: 'none',
          flexDirection: 'row',
        },
        textVertical: {
          alignItems: 'center',
          flexDirection: 'row',
        },
        textContainer: {
          margin: '0 16px',
        },
        title: {
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginBottom: '8px',
            
            padding:'9px'
        },
        text: {
            fontSize: '0.8rem',
            marginBottom: '8px',
            padding:'2px'
        },
        textWS: {
            fontSize: '1.5rem',
            marginBottom: '8px',
            padding:'2px'
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
            <Box className="content"
                maxWidth="100%"
                height={isDesktop ? 200 : 280}
                width="100%"
                bgcolor="#E49B0F"
                justifyContent="center"
                
            >
                <Typography sx={{ color: 'black', fontSize: isDesktop ? 38 : 25 }}>
                    ¿Cómo pagar?
                </Typography>
            </Box>
            <Box maxWidth="100%"
                display="flex"
                height={isDesktop ? 400 : 480}
                width="100%"
               
                sx={{ 
                    background: 'linear-gradient(to right, #ffffff, #33D7FF)',
                    
                }}
            >  
                <Box display="flex" width="60%" justifyContent="center" alignItems="center">
                    <Typography ml={4} sx={{ color: 'black', fontSize: isDesktop ? 48 : 35 }}>
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
                        opacity: 0.15,
                        position:"absolute"
                    }}
                />
            </Box>
            <div className={classes.root}>
                <Paper elevation={3} className={classes.floatingContainer}>
                <div className={classes.textVertical}>
                    <LockIcon className={classes.icon} />
                    <Typography variant="h5" className={classes.title}>Seguro</Typography>
                    
                    <Typography className={classes.text}>Contamos con un equipo para darte un respaldo</Typography>
                </div>
                <div className={classes.textVertical}>
                    <AccessTimeIcon className={classes.icon} />
                    <Typography variant="h5" className={classes.title}>Rápido</Typography>
                    
                    <Typography className={classes.text}>Nuestros asesores están disponibles de lunes a sábados para darte el mejor servicio</Typography>
                </div>
                <div className={classes.textVertical}>
                    <AccountBalanceIcon className={classes.icon} />
                    <Typography variant="h5" className={classes.title}>Transferencia bancario</Typography>
                    
                    <Typography className={classes.text}>Todo préstamo con nuestros clientes es bancarizado</Typography>
                </div>
                <div className={classes.textVertical}>
                    <CreditCardIcon className={classes.icon} />
                    <Typography variant="h5" className={classes.title}>Sencilla forma de pago</Typography>
                    
                    <Typography className={classes.text}>Todo lo puedes hacer desde tu celular</Typography>
                </div>
                </Paper>
            </div>       

      <Box  className={classes.whatsApp} maxWidth="100%"
                height={isDesktop ? 200 : 280}
                width="100%"
                display="flex"
                justifyContent="center">
        <Typography variant="body1" className={classes.textWS}>
          Si tienes dudas puedes comunicarte con nosotros haciendo click aquí:
        </Typography>
       
        <Button variant="contained" className={classes.button} href="https://wa.me/numero-de-tu-contacto">
          <WhatsAppIcon />
          <span className={classes.buttonText}>WhatsApp</span>
        </Button>         
        
        
      </Box>
 
            
        </Box>
    );

};

export default ComoPagar;