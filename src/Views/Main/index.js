import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Paper";
import Snackbar from "@mui/material/Typography";
import Alert from '@mui/material/Alert';
import Info from "../../Components/Info";
import Requisitos from "../../Components/Requisitos";
import Info2 from "../../Components/Info2";
import Info3 from "../../Components/Info3";
import Info4 from "../../Components/Info4";
import PrestamosPersonales from "../../Components/PrestamosPersonales";
import PrestamosEmprendedor from "../../Components/PrestamosEmprendedor";
import PrestamosMalCalificado from "../../Components/PrestamosMalCalificado";
import SnackBarMessages from "../../Components/SnackBarMessages";
function Main() {
  const [alert, setAlert] = React.useState({ message: "", status: "", open: false })
  
 
  return (
    <Paper>
      <SnackBarMessages alert={alert} setAlert={setAlert} />
      <Info />
      <Requisitos />
      
      <PrestamosPersonales setAlert={setAlert} />
      <PrestamosEmprendedor setAlert={setAlert}  />
      <PrestamosMalCalificado setAlert={setAlert}  />
      <Info2 />
      <Info3 />
      <Info4 />
     
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
