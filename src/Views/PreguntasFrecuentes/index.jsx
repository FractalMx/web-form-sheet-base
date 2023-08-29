import React from 'react';
import { styled } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Typography, useMediaQuery, Paper, Button } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid 1`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:


        'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: '1px',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: '2px',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const PreguntasFrecuentes = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    return (
        <Box justifyContent="center" alignItems="center">
            <Box className="content"
                maxWidth="100%"
                height={isDesktop ? 200 : 280}
                width="100%"
                bgcolor="#E49B0F"
                justifyContent="center"

            >
                <Typography sx={{ color: 'black', fontSize: isDesktop ? 38 : 25 }}>
                    Preguntas frecuentes
                </Typography>
            </Box>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>¿Qué requisitos necesito para solicitar el Préstamo Personal y/o Emprendedor?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sólo necesitas:
                    </Typography>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary=" - DNI"
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">    
                            <ListItemText
                                primary=" - Recibo de servicio luz o agua"
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">    
                            <ListItemText
                                primary=" - Recibo de servicio luz o agua"
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">    
                            <ListItemText
                                primary=" - Tener una cuenta bancaria (corriente o de ahorro) a tu nombre"
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">    
                            <ListItemText
                                primary=" - Tener un número de celular personal"
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">    
                            <ListItemText
                                primary=" - 2 contactos referencial familiar"
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">    
                            <ListItemText
                                primary=" - Tener correo electrónico de uso personal"
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">    
                            <ListItemText
                                primary=" -  RUC activo (préstamo emprendedor)"
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">    
                            <ListItemText
                                primary=" - Boletas o facturas de tu negocio (préstamo emprendedor)"
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">    
                             <ListItemText
                                primary=" - Contrato de arriendo de tu negocio y ubicación (préstamo emprendedor)"
                            />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>¿Cómo los contacto?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Puedes hablarnos por el medio que más cómodo te resulte. Nos escribes por WhatsApp al +51 904 377 253
                    ¡Ten presente no dejar tus datos personales en los comentarios públicos para cuidar tu privacidad!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            


        </Box>
    );

};

export default PreguntasFrecuentes;