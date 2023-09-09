import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Info from "../../Components/Info";
import Requisitos from "../../Components/Requisitos";
import Info2 from "../../Components/Info2";
import Info3 from "../../Components/Info3";
import PrestamosPersonales from "../../Components/PrestamosPersonales";
import PrestamosEmprendedor from "../../Components/PrestamosEmprendedor";

function Main() {

  
  return (
    <Paper>
      <Info />
      <Requisitos />
      <PrestamosPersonales />
      <PrestamosEmprendedor />
      <Info2 />
      {/* <Info3 /> */}
     
    </Paper>
  );
}

Main.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Main;
