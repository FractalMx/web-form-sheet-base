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
  Twitter,
  Instagram,
} from "@mui/icons-material";
import "./Header.css";
import logo from "../../img/logo.png"; // Asegúrate de tener este logo en tu proyecto
import { HashLink } from "react-router-hash-link";
const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <AppBar
      position="static"
      className="header"
      sx={{ backgroundColor: "white" }}
    >
      {!isDesktop ? (
        <div style={{ height: "6vh", backgroundColor: "#e46721" }}>
          <div className="contactNoDesktop">
            <div className="contact-info-nodesktop">
              <Email />
              <Typography variant="body2" color="#104409">
                ejemplo@email.com
              </Typography>
            </div>
            <div className="contact-info-nodesktop">
              <Phone />
              <Typography variant="body2" color="#104409">
                (123) 456-7890
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
                  ejemplo@email.com
                </Typography>
              </div>
              <div className="contact-info">
                <Phone />
                <Typography variant="body2" color="#e46721">
                  (123) 456-7890
                </Typography>
              </div>
            </div>
          ) : (
            <div />
          )}

          <div className="social-buttons">
            <IconButton>
              <Facebook sx={{ color: "#104409" }} />
            </IconButton>
            <IconButton>
              <Twitter sx={{ color: "#104409" }} />
            </IconButton>
            <IconButton>
              <Instagram sx={{ color: "#104409" }} />
            </IconButton>
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
            Solicitar
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
