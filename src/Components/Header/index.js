import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Email, Phone, Facebook, Twitter, Instagram } from '@mui/icons-material';
import './Header.css';
import logo from '../../img/logo.png'; // Asegúrate de tener este logo en tu proyecto

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="contact">
          <div className="contact-info">
            <Email />
            <Typography variant="body2">ejemplo@email.com</Typography>
          </div>
          <div className="contact-info">
            <Phone />
            <Typography variant="body2">(123) 456-7890</Typography>
          </div>
          <div className="social-buttons">
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </div>
          <Button variant="contained" color="primary" className="solicitar-button">
            Solicitar
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;