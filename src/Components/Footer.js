import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Box>
      <Typography variant="body2" color="white" align="center">
        {"Todos los derechos reservados © "}

        <b>Créditos Yadiel</b>

        {new Date().getFullYear()}
        {"."}
      </Typography>
      <Typography variant="body2" color="white" align="center">
        RUC: 20611453281
      </Typography>
    </Box>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "#114d09", py: 2 }}>
      <Typography variant="h6" color="white" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="white"
        component="p"
      >
        {description}
      </Typography>
      <Copyright />
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
