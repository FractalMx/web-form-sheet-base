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
    <Box maxWidth="100%" width="100%" justifyContent="center">
      <div
        style={{
          backgroundImage: `url(${background1})`, // Reemplaza con la URL de tu imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: isDesktop ? "100vh" : "60vh", // Ajusta la altura según tus necesidades
          position: "relative",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          marginTop: isDesktop ? -300 : -120,
        }}
      >
        <Container sx={{ width: "100%", backgroundColor: "white" }}>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            className="code-box-shape"
          >
            <Box p={1} width="100%">
              <Typography
                textAlign="center"
                sx={{ color: "black", fontSize: isDesktop ? 18 : 15 }}
              >
                Créditos Yadiel PERU S.A.C, legalmente constituida en el año
                2023, es una FINTECH DE PRÉSTAMOS que ofrece soluciones ágiles,
                transparentes y a medida para todo el público, con capitales
                100% peruanos y registrada en la SBS. Solicita tu crédito desde
                la comodidad de tu hogar, nosotros nos encargamos del resto.
                Nuestra misión es colaborar para lograr la inclusión financiera
                de más peruanos. Tenemos diferentes productos de acuerdo a tus
                necesidades.
              </Typography>
            </Box>
          </Parallax>

          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            className="code-box-shape"
          >
            <Box width="100%">
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
                  fontSize: isDesktop ? 20 : 12,
                }}
              >
                PRESTANEGOCIO
              </Typography>

              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,

                  fontSize: isDesktop ? 18 : 15,
                }}
              >
                En nuestro país, es común que una gran parte de la población
                tenga ingresos semanales e incluso diarios. Es por eso que, a la
                hora de solicitar un préstamo, para muchos será más conveniente
                el pago de las cuotas con esta frecuencia. Es por eso que
                ofrecemos este producto dirigido a personas naturales con
                negocios que desarrollan actividades económicas como bodegas,
                librerías, licorerías, bazares, restaurantes, etc., y que
                necesiten un préstamo para invertir o para afrontar alguna
                eventualidad, y puedan pagarlo semanalmente con planes flexibles
                adaptados a sus necesidades. Para acceder a este producto, es
                necesario tener una buena calificación en el sistema financiero.
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
                  fontSize: isDesktop ? 20 : 12,
                }}
              >
                PRESTAPRENDA
              </Typography>

              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,

                  fontSize: isDesktop ? 18 : 15,
                }}
              >
                Funcionamos también como una Casa de Empeño en línea. El
                procedimiento es sencillo: la persona que desea empeñar algún
                artículo acude a nosotros, completa sus datos en el formulario
                de solicitud de crédito. Luego, nosotros analizamos su prenda,
                hacemos una oferta de préstamo y, en caso de que la acepten, nos
                encargamos de recoger la prenda y evaluar que esté en buenas
                condiciones. Este producto está diseñado para clientes
                interesados en créditos prendarios con garantía en joyas de oro,
                electrodomésticos nuevos o seminuevos, tecnología como laptops,
                tablets u otros objetos de valor. En caso de que los intereses
                no sean pagados dentro de los plazos pactados, recuerde que los
                bienes que deja en garantía respaldan su préstamo. Si su
                contrato vence o no puede pagar, usted no queda mal con nosotros
                ni arruina su historial de crédito.
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
                  fontSize: isDesktop ? 20 : 12,
                }}
              >
                PRESTAMOS PARA MAL CALIFICADOS (INFOCORP)
              </Typography>

              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,

                  fontSize: isDesktop ? 18 : 15,
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
                  fontSize: isDesktop ? 20 : 12,
                }}
              >
                ASESORAMIENTO FINANCIERO
              </Typography>
              <Typography
                textAlign="left"
                sx={{
                  color: "black",
                  margin: isDesktop ? 2 : 1,

                  fontSize: isDesktop ? 18 : 15,
                }}
              >
                Colaboramos con nuestros clientes para cambiar sus vidas
                completamente y empezar de nuevo su historial financiero. Si
                tienes deudas registradas en Infocorp, negociamos tus deudas, te
                orientamos y planificamos acciones para lograr tu inclusión
                nuevamente en el sistema financiero. Te brindamos asesoría hasta
                que alcances tus objetivos, te enseñamos estrategias y técnicas
                para manejar tus finanzas y mejorar tu calidad de vida. ¿Has
                pagado tu deuda y todavía apareces en Infocorp? ¿Ninguna entidad
                financiera te concede crédito? Aunque no lo creas, a muchas
                personas les ocurre lo mismo. Nosotros tenemos la solución. Aquí
                te enseñamos cómo cambiar eso y convertirte en sujeto de crédito
                nuevamente. También te orientamos y mostramos nuevas
                herramientas financieras para que mejores tus calificaciones y
                obtengas créditos más altos a corto y mediano plazo.
              </Typography>
            </Box>
          </Parallax>
        </Container>
      </div>
    </Box>
  );
};

export default Info;
