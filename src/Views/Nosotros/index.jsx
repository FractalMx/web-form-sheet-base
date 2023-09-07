import React from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import './Nosotros.css'; // Import your CSS for additional styling

const images = [
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers"
];

// Create a styled Container component
const StyledContainer = styled(Container)({
  padding: '60px',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
  width: '100%', // Set the width to 100% for full-width
  maxWidth : '100%'
             
});

// Create a styled Typography component for section titles
const StyledSectionTitle = styled(Typography)({
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#333',
});

// Create a styled Paper component for content
const StyledContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
});

// Create a styled Typography component for text paragraphs
const StyledText = styled(Typography)({
  maxWidth: '800px',
  textAlign: 'justify',
  marginBottom: '30px',
  fontSize: '1.1rem',
  color: '#555',
  lineHeight: '1.6',
});

// Create a styled Grid component for the image list
const StyledImageGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: '20px',
});

// Create a styled Paper component for individual images
const StyledImage = styled(Paper)({
  width: '150px',
  height: '150px',
  margin: '10px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
});

// Create a styled image inside StyledImage
const StyledImageElement = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export default function Nosotros() {
  return (
    <Box 
    maxWidth="100%"
    padding={5}
    width="100%"
   
    justifyContent="center"
    
  >
      
      <StyledContent >
        
        <div>
        <StyledSectionTitle variant="h4">¿Quiénes Somos?</StyledSectionTitle>
          <StyledText paragraph>
            Créditos Yadiel PERÚ S.A.C con RUC 20611453281. Legalmente constituida en el año 2023,
            es una FINTECH DE PRÉSTAMOS que ofrece soluciones ágiles, transparentes y a la medida
            con capitales 100% peruanos y registrada en la SBS. Solicita tu crédito desde la comodidad de tu hogar.
            Ofrecemos préstamos para pagos semanales para personas con todo tipo de negocios activos.
          </StyledText>
          <StyledText paragraph>
            Ofrecemos préstamos personales desde 200 hasta 1000 soles para gastos inesperados o urgentes.
            Si necesitas una línea de crédito más alta, te invitamos a consultar con nuestros asesores.
          </StyledText>
        </div>
        <StyledSectionTitle variant="h4">¿Por qué somos la mejor opción?</StyledSectionTitle>
        <div className="text">
          <StyledText paragraph>
            Existen muchas otras empresas; sin embargo, estas empresas no se preocupan por el cliente.
            Para nosotros es muy importante escuchar sus necesidades para así otorgar préstamos personales acorde
            con sus necesidades y capacidades de pago. Además, atendemos a ese sector excluido por el sector financiero tradicional,
            personas sin historial crediticio insertando a nuestros clientes al sistema financiero ya que pagando puntualmente son
            reportados positivamente a las centrales de riesgo e infocorp, volviéndolos clientes potenciales para otras entidades financieras tradicionales.
            Atendemos también a esos clientes que por problemas diversos ya no son sujetos a crédito, pues están reportados a las centrales de riesgo e infocorp,
            pues en CREDITOS YADIEL también los atendemos si cumplen con los requisitos que les solicitamos, además si no calificas a estos 2 productos anteriores también tienes la opción de adquirir un crédito prendario con nosotros, consulta con nuestros asesores en nuestros medios de contacto. Nuestra misión es colaborar con la inclusión financiera de ese sector olvidado por el sector financiero tradicional.
          </StyledText>
        </div>
      </StyledContent>
     {/*  
      <StyledImageGrid>
        {images.map((imageUrl, index) => (
          <Grid item key={index}>
            <StyledImage elevation={3}>
              <StyledImageElement src={imageUrl} alt={`Image ${index}`} />
            </StyledImage>
          </Grid>
        ))}
      </StyledImageGrid> */}
    </Box>
  );
}

