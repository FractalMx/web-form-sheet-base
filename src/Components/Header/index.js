import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import {
  Email,
  Phone,
  Facebook,
  Instagram,
} from "@mui/icons-material";
import "./Header.css";
import logo from "../../img/logo.png"; // Asegúrate de tener este logo en tu proyecto
import { HashLink } from "react-router-hash-link";
const TikTokIcon = ({ color = "#104409" }) => {
  return (
  
     <svg
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 50 50"
     fill="none"
     stroke="#104409"
     stroke-width="3"
     stroke-linecap="round"
     stroke-linejoin="round"
   >
     <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
   </svg>
  );
};
const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61550605730442&mibextid=2JQ9oc';
  const tiktokUrl = 'https://www.tiktok.com/@creditos.yadiel?_t=8fWj3e94WWM&_r=1';
  const instagramUrl = ' https://www.instagram.com/invites/contact/?i=rw6385w85jir&utm_content=s3ijkku';

  return (
    <AppBar
      position="static"
      className="header"
      sx={{ backgroundColor: "white" }}
    >
      {!isDesktop ? (
        <div style={{ height: "10vh", backgroundColor: "#e46721" }}>
          <div className="contactNoDesktop">
            <div className="contact-info-nodesktop">
              <Email />
              <Typography variant="body2" color="#104409">
              creditosyadelcontacto@creditosyadel.com
              </Typography>
            </div>
            <div className="contact-info-nodesktop">
              <Phone />
              <Typography variant="body2" color="#104409">
                Central telefónica
                (924) 174-718
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
      <Toolbar className="toolbar">
        <img src={logo} alt="Logo" className="logo" />

        <div className="contact">
          {isDesktop ? (
            <div>
              <div className="contact-info">
                <Email />
                <Typography variant="body2" color="#e46721">
                  creditosyadelcontacto@creditosyadel.com
                </Typography>
              </div>
              <div className="contact-info">
                <Phone />
                <Typography variant="body2" color="#e46721">
                  Central telefónica
                  (924) 174-718
                </Typography>
              </div>
            </div>
          ) : (
            <div />
          )}
          <div style={{marginRight:10}}>
            <Typography variant="body2" color="#104409">
                  <b>Síguenos en nuestras redes sociales</b>
            </Typography>
            <div className="social-buttons">
          
            <IconButton component="a" href={facebookUrl} target="_blank">
              <Facebook sx={{ color: "#104409" }} />
            </IconButton>
            <IconButton component="a" href={tiktokUrl} target="_blank">
              <TikTokIcon sx={{ color: "#104409" }} />
            </IconButton>
            <IconButton component="a" href={instagramUrl} target="_blank">
              <Instagram sx={{ color: "#104409" }} />
            </IconButton>
          </div>
          </div>
          
          <Button
            component={HashLink}
            variant="contained"
            sx={{
              backgroundColor: "#e46721",
              "&:hover": {
                backgroundColor: "#e45000",
                height: "42%",
              },
            }}
            className="solicitar-button"
            to={"/#solicitar"}
          >
            Solicitar tu crédito
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
