import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Info2.css'; // Asegúrate de tener el archivo CSS

const FeaturesSection = () => {
  return (
    <Box className="features-section" display="flex" justifyContent="space-around" py={6}>
      <div className="feature-column">
        <div className="feature-item">
          <CheckCircleIcon className="check-icon" />
          <Typography variant="h6" align="center" className="feature-text">
            Créditos seguros
          </Typography>
        </div>
        <div className="feature-item">
          <CheckCircleIcon className="check-icon" />
          <Typography variant="h6" align="center" className="feature-text">
            Recibe tu dinero en tu cuenta bancaria
          </Typography>
        </div>
      </div>
      <div className="feature-column">
        <div className="feature-item">
          <CheckCircleIcon className="check-icon" />
          <Typography variant="h6" align="center" className="feature-text">
            Tasas competitivas
          </Typography>
        </div>
        <div className="feature-item">
          <CheckCircleIcon className="check-icon" />
          <Typography variant="h6" align="center" className="feature-text">
            Sin anticipos
          </Typography>
        </div>
      </div>
      <div className="feature-column">
        <div className="feature-item">
          <CheckCircleIcon className="check-icon" />
          <Typography variant="h6" align="center" className="feature-text">
            Sin avales
          </Typography>
        </div>
        <div className="feature-item">
          <CheckCircleIcon className="check-icon" />
          <Typography variant="h6" align="center" className="feature-text">
            100% Online desde tu celular
          </Typography>
        </div>
      </div>
    </Box>

  );
};

export default FeaturesSection;