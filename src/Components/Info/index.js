import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import './Info.css';
import background1 from '../../img/background1.jpg'; 

const Info = () => {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    return (
        <Box className="loan-section" 
            bgcolor="black" 
            py={6} 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            sx={{ 
                height: "120vh",       
                backgroundImage: `url(${background1})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              
                
            }}
        >
            <Box
                className={`content ${isDesktop ? 'desktop-layout' : ''}`}
               
                p={3}
                position="relative"
                
            >
                <Box className="content" 
                    maxWidth={isDesktop ? 700 : 500} 
                    height={isDesktop ? 350 : 430} width={isDesktop ? 700 : 400} 
                    borderRadius={5} 
                    bgcolor="white" 
                    sx={{marginTop:"30%"}}
                
                    boxShadow={3} position="relative"
                    justifyContent="center"
                    
                >
                    <div >
                        <Typography textAlign="left" sx={{ color: 'black',fontSize: isDesktop ? 38 : 25}}>
                            Empresa de préstamos
                        </Typography>
                        <Typography textAlign="left" sx={{ color: 'black',fontSize: isDesktop ? 20 : 15 }}>
                            Te brindamos:
                        </Typography>
                    </div>
                
                   
                    <div className="colored-background blue-bg">
                        <Typography  textAlign="left"sx={{ color: 'black', margin:2,paddingLeft:isDesktop ?10 : 5, fontWeight: 'bold',fontSize: isDesktop ? 30 : 20  }}>
                            Prestamos personales hasta $x
                        </Typography>
                    </div> 
                    <div className="colored-background green-bg">
                        <Typography   textAlign="left" sx={{ color: 'white', margin:2, paddingLeft:isDesktop ?10 : 5,fontWeight: 'bold', fontSize: isDesktop ? 30 : 20 }}>
                            Prestamos Emprendedor hasta $X
                        </Typography>
                    </div>
                     
                    <div className="colored-background">
                        <Typography textAlign="left" sx={{ color: 'black',  fontSize:15, paddingTop:2,paddingLeft:isDesktop ?10 : 5}}>
                        Solicita tu Préstamo 100% Online.
                        </Typography>
                    </div>  
                    <div className="colored-background">
                        <Typography textAlign="left"  sx={{ color: 'black', fontSize:15,paddingLeft:isDesktop ?10 : 5}}>
                        Desembolsos en 30 minutos recibida la información.
                        </Typography>
                    </div>   
                
                    
                </Box>
                
                
                
            </Box>
            
        </Box>    
    );
  
};

export default Info;
