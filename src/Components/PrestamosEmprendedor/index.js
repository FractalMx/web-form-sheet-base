import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import "./PrestamosEmprendedor.css"; // Asegúrate de tener el archivo CSS
import { Parallax } from "rc-scroll-anim";
const PersonalLoansSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", status: "", open: false });
  const [formValues, setFormValues] = useState({
    tipoSolicitud: "PRESTANEGOCIOS",
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    correo: "",
    telefonoPersonal: "",
    direccion: "",
    tipoVivienda: "",
    personasContigo: "",
    departamento: "",
    distrito: "",
    estadoCivil: "",
    hijos: "",
    ocupacion: "",
    empresa: "",
    ingresosMensuales: "",
    otrosIngresos: "",
    montoPedido: "",
    cuotas: "",
    codigoInvitacion: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validar campos y enviar solicitud aquí
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const data = {...Object.fromEntries(formData.entries()),tipoSolicitud:formValues.tipoSolicitud };

    await axios({
      method: "POST",
      url: process.env.REACT_APP_GOOGLE_SCRIPT_ONE,
      headers: { "Content-Type": "multipart/form-data" },
      data: data,
    })
      .then((response) => {
        setAlert(
          { 
            message: "Su solicitud fué realizada con éxito.", 
            status: "success", 
            open: true 
          }
        );
        handleCloseModal();
      })
      .catch((error) => {
        setAlert({ message: "Al parecer ocurrió un error. Su solicitud no se realizó, inténtelo de nuevo.", status: "error", open: true });
        setIsLoading(false);
        return;
      });

    setIsLoading(false);
  };

  return (
    <Parallax
      animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
      style={{ transform: "translateX(-100px)", opacity: 0 }}
      className="code-box-shape"
    >
      <Box
        id="solicitar"
        className="personal-loans-section"
        bgcolor="#df9222"
        py={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ marginBottom: "20px", color: "white" }}
        >
          PRESTANEGOCIOS
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ marginBottom: "20px", color: "white" }}
        >
          Paga puntual tu préstamo y accede a montos mayores automáticamente
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#358930",
            "&:hover": {
              backgroundColor: "#00bb2d",
              height: "42%",
              width: "22%",
            },
          }}
          onClick={handleOpenModal}
        >
          Inicia tu solicitud
        </Button>
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <div className="modal-content">
            <IconButton
              aria-label="Cerrar"
              onClick={handleCloseModal}
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              align="center"
              sx={{ marginBottom: "20px" }}
            >
              PrestaNegocios
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="tieneNegocio"
                    checked={formValues.tieneNegocio}
                    onChange={handleInputChange}
                    color="primary"
                  />
                }
                label="¿Tienes un negocio en funcionamiento?"
              />
              {formValues.tieneNegocio && (
                <TextField
                  label="Nombre del Negocio"
                  name="nombreNegocio"
                  value={formValues.nombreNegocio}
                  onChange={handleInputChange}
                  fullWidth
                  
                  sx={{marginBottom:2}}
                  required
                />
              )}
              <div className="form-row">
                <TextField
                  label="Nombre"
                  name="nombre"
                  value={formValues.nombre}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
                <TextField
                  label="Apellido"
                  name="apellido"
                  value={formValues.apellido}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
              </div>
              <div className="form-row">
                <TextField
                  label="DNI"
                  name="dni"
                  value={formValues.dni}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
                <TextField
                  label="Teléfono"
                  name="telefono"
                  value={formValues.telefono}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
              </div>
              <div className="form-row">
                <TextField
                  label="Correo Electrónico"
                  name="correo"
                  value={formValues.correo}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
                <TextField
                  label="Teléfono Personal"
                  name="telefonoPersonal"
                  value={formValues.telefonoPersonal}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
              </div>
              <div className="form-row">
                <TextField
                  label="Dirección"
                  name="direccion"
                  value={formValues.direccion}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
                <FormControl className="textfield" required>
                  <InputLabel>Tipo de vivienda</InputLabel>
                  <Select
                    name="tipoVivienda"
                    value={formValues.tipoVivienda}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="propia">Propia</MenuItem>
                    <MenuItem value="alquilada">Alquilada</MenuItem>
                    <MenuItem value="familiar">Familiar</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="form-row">
                <TextField
                  label="Cuantas Personas Viven contigo"
                  name="personasContigo"
                  value={formValues.personasContigo}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                  type="number"
                />
                <TextField
                  label="Departamento"
                  name="departamento"
                  value={formValues.departamento}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
              </div>
              <div className="form-row">
                <TextField
                  label="Distrito"
                  name="distrito"
                  value={formValues.distrito}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
                <FormControl className="textfield" required>
                  <InputLabel>Estado Civil</InputLabel>
                  <Select
                    name="estadoCivil"
                    value={formValues.estadoCivil}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="soltero">Soltero(a)</MenuItem>
                    <MenuItem value="casado">Casado(a)</MenuItem>
                    <MenuItem value="divorciado">Divorciado(a)</MenuItem>
                    <MenuItem value="viudo">Viudo(a)</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="form-row">
                <TextField
                  label="Número de Hijos"
                  name="hijos"
                  value={formValues.hijos}
                  onChange={handleInputChange}
                  className="textfield"
                  type="number"
                />
                <TextField
                  label="Ocupación"
                  name="ocupacion"
                  value={formValues.ocupacion}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
              </div>
              <div className="form-row">
                <TextField
                  label="Empresa donde labora"
                  name="empresa"
                  value={formValues.empresa}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
                <TextField
                  label="Ingresos Mensuales"
                  name="ingresosMensuales"
                  value={formValues.ingresosMensuales}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                  type="number"
                />
              </div>
              <div className="form-row">
                <TextField
                  label="Otros Ingresos"
                  name="otrosIngresos"
                  value={formValues.otrosIngresos}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                  type="number"
                />
                <TextField
                  label="Monto a pedir"
                  name="montoPedido"
                  value={formValues.montoPedido}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                  type="number"
                />
              </div>
              <div className="form-row">
                <TextField
                  label="Número de Cuotas"
                  name="cuotas"
                  value={formValues.cuotas}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                  type="number"
                />
                <TextField
                  label="Ingresa Código de invitación"
                  name="codigoInvitacion"
                  value={formValues.codigoInvitacion}
                  onChange={handleInputChange}
                  className="textfield"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? (
                  // Si isLoading es true, muestra el indicador de carga
                  <CircularProgress size={24} color="primary" />
                ) : (
                  // Si isLoading es false, muestra "Enviar Solicitud"
                  "Enviar Solicitud"
                )}
              </Button>
            </form>
          </div>
        </Modal>
      </Box>
    </Parallax>
  );
};

export default PersonalLoansSection;
