import React from 'react';
import { Box, Typography,useMediaQuery } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Info2.css'; // Asegúrate de tener el archivo CSS

const FeaturesSection = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Box className="features-section" display="flex" justifyContent="center" alignContent="center" flexDirection={isDesktop ?"row" :"column" } py={6}>
      <div className="feature-column">
        <div className="feature-item">
          <CheckCircleIcon className="check-icon" sx={{ fontSize: isDesktop ? 28 : 20 }}/>
          <Typography variant="h6" align="center" sx={{ fontSize: isDesktop ? 18 : 16 }}>
            Créditos seguros
          </Typography>
        </div>
        <div className="feature-item">
          <CheckCircleIcon className="check-icon"sx={{ fontSize: isDesktop ? 28 : 20 }} />
          <Typography  align="center" className="feature-text" sx={{ fontSize: isDesktop ? 18 : 16 }}>
            Recibe tu dinero en tu cuenta bancaria
          </Typography>
        </div>
      </div>
      <div className="feature-column">
        <div className="feature-item">
          <CheckCircleIcon className="check-icon" sx={{ fontSize: isDesktop ? 28 : 20 }}/>
          <Typography variant="h6" align="center" className="feature-text"sx={{ fontSize: isDesktop ? 18 : 16 }}>
            Tasas competitivas
          </Typography>
        </div>
        <div className="feature-item">
          <CheckCircleIcon className="check-icon" sx={{ fontSize: isDesktop ? 28 : 20 }}/>
          <Typography variant="h6" align="center" className="feature-text"sx={{ fontSize: isDesktop ? 18 : 16 }}>
            Sin anticipos
          </Typography>
        </div>
      </div>
      <div className="feature-column">
        <div className="feature-item">
          <CheckCircleIcon className="check-icon" sx={{ fontSize: isDesktop ? 28 : 20 }}/>
          <Typography variant="h6" align="center" className="feature-text"sx={{ fontSize: isDesktop ? 18 : 16 }}>
            Sin avales
          </Typography>
        </div>
        <div className="feature-item">
          <CheckCircleIcon className="check-icon" sx={{ fontSize: isDesktop ? 28 : 20 }}/>
          <Typography variant="h6" align="center" className="feature-text"sx={{ fontSize: isDesktop ? 18 : 16 }}>
            100% Online desde tu celular
          </Typography>
        </div>
      </div>
    </Box>

  );
};

export default FeaturesSection;