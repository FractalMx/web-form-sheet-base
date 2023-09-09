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
    const [expanded, setExpanded] = React.useState('null');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    return (
        <Box justifyContent="center" alignItems="center" >
            <Box className="content"
                maxWidth="100%"
                height={isDesktop ? 200 : 280}
                width="100%"
                bgcolor="#114d09"
                justifyContent="center"

            >
                <Typography sx={{ color: 'white', fontSize: isDesktop ? 38 : 25 }}>
                    Preguntas frecuentes
                </Typography>
            </Box>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>¿Qué requisitos necesito para solicitar el PRODUCTO PRESTANEGOCIO?</Typography>
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
                                primary=" -  Negocio activo verificable"
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary=" - Boletas o facturas de tu negocio licencia municipal,etc, etc."
                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary=" - Contrato de arriendo de tu negocio y ubicación"
                            />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Puedes solicitar desde S/200 soles hasta S/1000 soles </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Durante la solicitud analizaremos tu score crediticio en la base de datos, te notificaremos del monto aprobado.
                        Recuerda un buen comportamiento en tu reporte financiero te habré las puertas a un desembolso inmediato, previo requerimiento de los requisitos.

                        Finalmente, te asignaremos un asesor que te llamará para realizar con seguridad el desembolso de tu Préstamo. ¡Y listo! El tiempo que pueda tardar tu entidad financiera en reflejar el dinero en tu cuenta bancaria, dependerá de cuánto demore en gestionar y aceptar la transferencia.

                        Desembolsos CREDITOS YADIEL
                        50 minutos recibida la información
                        De lunes a sábados
                        Horario de atención 9.00am a 6:00pm
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>¿Cuándo realizan el desembolso? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Una vez finalizado el formulario y verificada tu identidad, te avisaremos por WhatsApp o correo cuando ya hayamos realizado el desembolso de tu Préstamo.

                        Ten presente que la demora del dinero dependerá de lo que tarde tu entidad financiera en gestionar y aceptar la transferencia.

                        Desembolsos CREDITOS YADIEL
                        50 minutos recibida la información
                        De lunes a sábado
                        Horario de atención 9.00am a 6:00pm
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>¿Qué tipo de cuenta bancaria necesito?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Necesitas Cuenta bancaria de Ahorro o Corriente. Durante el formulario de solicitud deberás ingresar una cuenta bancaria de la que seas titular. Allí vamos a desembolsar el monto aprobado.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>Validación de Identidad: ¿Puedes comunicarte con un asesor financiero?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Te pediremos que cargues una selfie y una foto del dorso y frente de tu cédula. La carga de imágenes nos permite validar la identidad, copia de servicios entre otros requisitos es por tu seguridad. Es decir, evitamos que otra persona pueda tomar tu identidad para solicitar un Préstamo. De esta forma, eliminamos todo tipo de riesgo a posibles suplantaciones.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography>¿Cuándo vence mi cuota?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        El vencimiento de tu cuota vence la fecha que has seleccionado al aceptar el préstamo. Te notificaremos siempre días antes de tu fecha de pago, detalle de tus cuotas (número, vencimiento y valor de cuota).

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                    <Typography>¿Qué sucede si no pago a tiempo la cuota?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Te recomendamos que siempre canceles puntualmente el pago de tu Préstamo, ya que posteriormente obtendrás beneficios extras por el pago oportuno o pago adelantado. Si entras en mora nuestro departamento de cobranza se comunicará contigo para regularizar el pago.
                        Siempre ten presente que ante cualquier consulta o para contarnos tu situación puedes comunicarte con nosotros.
                        De no efectuar su pago y cuotas será Reportado a las centrales de riesgo INFOCORP.


                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                    <Typography>¿Puedo solicitar una REPROGRAMACION O AMORTIZACION? ¿Puede afectar mi buen historial crediticio?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sí, solo comunícate con nosotros al área legal de cobranza: 924174718. No, en lo absoluto siempre y cuando cumplas con tus fechas de pago y reprogramación.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
                    <Typography>¿Para qué me sirve pedir un Préstamo CREDITOS YADIEL?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nuestros Préstamos te permiten cubrir de manera rápida tus imprevistos de salud, gastos, inconvenientes, una compra, un viaje, etc,ademas si no tienes historial crediticio te ayuda a crear uno pagando puntualmente generando un reporte positivo en las centrales de riesgo infocorp ,volviendote un cliente potencial para otras entidades financieras.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
                    <Typography>¿Qué es CREDITOS YADIEL y cómo funciona?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Somos una Fintech Peruana en expansión que nació con el fin de ofrecer Préstamos Personales 100% en línea de una manera rápida y simple. Sin trámites, ni papeleos.
                        Adaptadas a las necesidades del Perú y con la tecnología como medio para una gestión fácil, pero de calidad, nuestros asesores los ayudaran y guiaran en cada paso antes, durante y después de la solicitud de Préstamo.
                        Nos destacamos por nuestra velocidad y facilidad para otorgar Préstamos en línea.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
                    <Typography>¿Por qué tengo que elegir CREDITOS YADIEL?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        La solicitud es 100% online (desde tu computadora o celular). Lo puedes hacer desde la comodidad de tu casa. Sin trámites, sin filas ni papeleo.
                        Servicio rápido, confiable y seguro.
                        En el área de Atención al Cliente contamos con un equipo de asesores capacitados y dispuestos a ayudarte y guiarte ante cualquier inconveniente o inquietud.
                        Te brindamos el detalle de tu préstamo antes de que aceptes la solicitud. Somos 100% transparentes.
                        Retiras el dinero por cajero electrónico y lo pagas en la fecha que tú mismo indicaste
                        Sin intermediarios
                        No pedimos anticipo

                        ¡Continuamente trabajamos para dar el mejor servicio a nuestros clientes!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
                    <Typography>¿Cómo los contacto?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Puedes hablarnos por el medio que más cómodo te resulte. Nos escribes por WhatsApp al +51 952107949 - +51 923824245
                        ¡Ten presente no dejar tus datos personales en los comentarios públicos para cuidar tu privacidad!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
                    <Typography>¿CREDITOS YADIEL tiene intermediarios?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        No utilizamos intermediarios. Mantenemos una operación transparente y directa.
                        Nuestro proceso está hecho para que seas tú quien lo realice directamente.
                        El único canal para solicitar el Préstamo con CREDITOS YADIEL es a través de nuestro formulario web www.CREDITOSYADIEL.com.pe
                        Además, no pedimos anticipo de dinero para la solicitud de un Préstamo. Nuestros únicos medios de comunicación están publicados en nuestra web.
                        Siempre debes estar atento a esta información para evitar estafas. Te aconsejamos: NO suministrar tus datos personales públicamente, ni a terceros no autorizados.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );

};

export default PreguntasFrecuentes;