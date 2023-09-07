import React from "react";
import { Box, Typography, useMediaQuery, Container } from "@mui/material";
import Fade from "@mui/material/Fade";
import { Parallax } from "rc-scroll-anim";
import { styled } from "@mui/system";
import "./Info.css";
import background1 from "../../img/background1.jpg";

const StyledContainer = styled(Container)({
  padding: "10px",
  backgroundColor: "#f9f9f9",
  textAlign: "center",
});
const Info = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Box 
    maxWidth="100%"
    
    width="100%"
   
    justifyContent="center"
    
  >
     
     <div
        style={{
          backgroundImage: `url(${background1})`, // Reemplaza con la URL de tu imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: isDesktop ? "125vh" : "65vh", // Ajusta la altura según tus necesidades
          position: "relative",
        }}
      ></div>
      <div
        style={{
          
          width: "100%",
          marginTop:isDesktop ? -450: -200,
        
        }}
      >
        <Container sx={{ width: "100%", backgroundColor:"white" }}>
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          
            <Box p={1} width="100%">
              <Typography
                textAlign="center"
                sx={{ color: "black", fontSize: isDesktop ? 16 : 13 }}
              >
                Creditos Yadiel PERU S.A.C Legalmente Constituida, en el año
                2023.es una FINTECH DE PRESTAMOS que ofrece soluciones ágiles,
                transparentes y a la medida para todo público con capitales 100%
                Peruanos y registrada en la SBS ,solicita tu credito desde la
                comodidad de tu hogar nosotros nos encargamos del resto. Nuestra
                mision es colaborar para lograr la inclusion financiera de mas
                Peruanos Tenemos diferentes productos de acuerdo a tu nesecidad.
              </Typography>
            </Box>
         
        </Parallax>

        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          
            <Box  width="100%">
              <Typography
                textAlign="left"
                sx={{ color: "black", fontSize: isDesktop ? 17 : 16 }}
              >
                Te brindamos:
              </Typography>
              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,

                  fontWeight: "bold",
                  fontSize: isDesktop ? 18 : 10,
                }}
              >
                PRESTANEGOCIO
              </Typography>

              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,

                  fontSize: isDesktop ? 15 : 13,
                }}
              >
                En nuestro pais, es habitual que gran parte de la poblacion
                tenga ingresos semanales o incluso diarios ,es por eso que,a la
                hora de pedir un prestamo ,para muchos sera mas conveniente el
                pago de las cuotas con esta frecuencia es por eso que tenemos
                este Producto dirigido a personas naturales con negocio que
                desarrollan una actividad económica como bodegas
                librerias,licorerias,bazares ,restaurantes etc etc y que
                necesiten un prestamo para invertir o algun apuro ocacional y
                poderlo pagar semanalmente con planes flexibles segun sus
                nesecidades. Para acceder a este producto debes estar bien
                calificado en el sistema financiero
              </Typography>
            </Box>
          
        </Parallax>

        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          
            <Box p={1} width="100%">
              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,
                  marginTop: 3,
                  fontWeight: "bold",
                  fontSize: isDesktop ? 18 : 10,
                }}
              >
                PRESTAPRENDA
              </Typography>

              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,

                  fontSize: isDesktop ? 15 : 13,
                }}
              >
                Funciona como una Casa de Empeño online ,El procedimiento es
                sencillo la persona que quiere empeñar algun articulo acude a
                nosotros sube sus datos en el formulario de solicitud de credito
                ,nosotros analizamos su prenda hacemos una oferta de prestamo y,
                en caso de aceptarla nosotros mismos nos encargamos de recoger
                la prenda y evaluar que este en buenas condiciones. este
                Producto diseñado para clientes interesados en creditos
                prendarios con garantia en joyas de oro, electrodomesticos
                nuevos o seminuevos,tecnologia como laptops tablets u otros
                objetos de valor en caso de que los intereses no sean pagados
                dentro los plazos pactados recuerde que los bienes que deja en
                garantia son el respaldo de su prestamos,si su contrato vence o
                no puede pagar , uSted no queda mal con nostros,ni arruina su
                historial de credito.
              </Typography>
            </Box>
        
        </Parallax>

        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          
            <Box p={1} width="100%">
              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,
                  marginTop: 3,
                  fontWeight: "bold",
                  fontSize: isDesktop ? 18 : 10,
                }}
              >
                PRESTAMOS PARA MAL CALIFICADOS (INFOCORP)
              </Typography>

              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,

                  fontSize: isDesktop ? 13 : 12,
                }}
              >
                Si estás mal calificado en el sistema financiero e infocorp
                también te damos un préstamo Producto diseñado para personas que
                estan mal calificadas en el sistema financiero que tengan un
                negocio actívo y cumplan con ciertos requisítos, si estás en
                infocorp también te damos la oportunidad de trabajar con
                nosotros consulta cómo al interno.
              </Typography>
              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,

                  fontSize: isDesktop ? 15 : 13,
                }}
              >
                Si estás mal calificado en el sistema financiero e infocorp
                también te damos un préstamo Producto diseñado para personas que
                estan mal calificadas en el sistema financiero que tengan un
                negocio actívo y cumplan con ciertos requisítos, si estás en
                infocorp también te damos la oportunidad de trabajar con
                nosotros consulta cómo al interno.
              </Typography>
            </Box>
         
        </Parallax>

        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
         
            <Box p={1} width="100%">
              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,
                  marginTop: 3,
                  fontWeight: "bold",
                  fontSize: isDesktop ? 18 : 10,
                }}
              >
                PRESTAMOS PARA MAL CALIFICADOS (INFOCORP)
              </Typography>

              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,

                  fontSize: isDesktop ? 15 : 13,
                }}
              >
                Si estás mal calificado en el sistema financiero e infocorp
                también te damos un préstamo Producto diseñado para personas que
                estan mal calificadas en el sistema financiero que tengan un
                negocio actívo y cumplan con ciertos requisítos, si estás en
                infocorp también te damos la oportunidad de trabajar con
                nosotros consulta cómo al interno.
              </Typography>
            </Box>
         
        </Parallax>

        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          
            <Box p={1} width="100%">
              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,
                  marginTop: 3,
                  fontWeight: "bold",
                  fontSize: isDesktop ? 18 : 10,
                }}
              >
                ASESORAMIENTO FINANCIERO
              </Typography>
              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,

                  fontSize: isDesktop ? 15 : 13,
                }}
              >
                Colaboramos con nuestros clientes para cambiar su vida
                totalmente y comenzar nuevamente su historial financiero ,si
                tienes deudas registradas en infocorp negociamos tus deudas te
                orientamos y planificamos acciones para poder lograr tu
                inclucion nuevamente al sistema financiero , te brindamos
                asesoria hasta que logres tus objetivos te enseñamos estrategias
                y tecnicas de como llevar tus finanzas y mejorar tu calidad de
                vida. pagaste tu deuda y aun figuras en infocorp? ninguna
                entidad Financiera te da credito? aunque no lo creas a muchas
                personas les pasa lo mismo ,nosotros tenemos la solucion, aqui
                te enseñamos como cambiar eso y ser sujeto a credito nuevamente
                ,tambien de orientamos y mostramos nuevas herramientas
                financieras para que mejores tus calificaciones y obtengas
                creditos mas altos en mediano y corto plazo.
              </Typography>
            </Box>
         
        </Parallax>
        </Container>
      </div>

    </Box>
  );
};

export default Info;
