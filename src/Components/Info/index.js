import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import './Info.css';
import womanImage from '../../img/woman-money.png'; 

const Info = () => {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    return (
        <Box className="loan-section" bgcolor="black" py={6} display="flex" justifyContent="center" alignItems="center">
            <Box
                className={`content ${isDesktop ? 'desktop-layout' : ''}`}
                maxWidth={ isDesktop ? 600 : 400}
                p={3}
                position="relative"
            >
                <Box className="content" 
                    maxWidth={isDesktop ? 700 : 500} 
                    height={isDesktop ? 350 : 430} width={isDesktop ? 700 : 400} 
                    borderRadius={5} 
                    bgcolor="white" 
                    boxShadow={3} position="relative"
                    justifyContent="center"
                    
                >
                    <div style={{marginBottom:20}}>
                        <Typography textAlign="left" sx={{ color: 'black',fontSize: isDesktop ? 38 : 25}}>
                            Empresa de préstamos
                        </Typography>
                        <Typography textAlign="left" sx={{ color: 'black',fontSize: isDesktop ? 20 : 15 }}>
                            Te brindamos:
                        </Typography>
                    </div>
                
                   
                    <div className="colored-background blue-bg">
                        <Typography  textAlign="left"sx={{ color: 'black', margin:2,paddingLeft:isDesktop ?10 : 5, fontWeight: 'bold',fontSize: isDesktop ? 30 : 20  }}>
                            Prestamos personales hasta $700
                        </Typography>
                    </div> 
                    <div className="colored-background green-bg">
                        <Typography   textAlign="left" sx={{ color: 'white', margin:2, paddingLeft:isDesktop ?10 : 5,fontWeight: 'bold', fontSize: isDesktop ? 30 : 20 }}>
                            Prestamos Emprendedor hasta $1000
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
                
                {!isDesktop && <img  src={womanImage} alt="Mujer con dinero" style={{marginBottom:"-72px"}} className="woman-image"  />}
                
            </Box>
            {!isDesktop || <img src={womanImage}style={{marginBottom:"-48px"}}  alt="Mujer con dinero"className="woman-image-right"/>}
        </Box>    
    );
  
};

export default Info;
