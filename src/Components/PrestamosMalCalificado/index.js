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
  FormHelperText,
  Grid,
  CircularProgress,
} from "@mui/material";
import "./PrestamosMalCalificado.css"; // Asegúrate de tener el archivo CSS
import CloseIcon from "@mui/icons-material/Close";
import { Parallax } from "rc-scroll-anim";
import axios from "axios";
const styles = {
  modalContent: {
    padding: "20px",
    maxWidth: "800px", // Ajusta el ancho máximo del modal según tus necesidades
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "5px",
    textAlign: "center",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  formControl: {
    width: "100%",
    marginBottom: "20px",
  },
  fullWidthInput: {
    width: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#358930",
    "&:hover": {
      backgroundColor: "#00bb2d",
      height: "42%",
      width: "22%",
    },
  },
};
const PrestamosMalCalificado = ({ setAlert }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    tipoSolicitud: "PRESTAMOSMALCALIFICADOS",
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

    const data = {
      ...Object.fromEntries(formData.entries()),
      tipoSolicitud: formValues.tipoSolicitud,
    };

    await axios({
      method: "POST",
      url: process.env.REACT_APP_GOOGLE_SCRIPT_ONE,
      headers: { "Content-Type": "multipart/form-data" },
      data: data,
    })
      .then((response) => {
        setAlert({
          message: "Su solicitud fué realizada con éxito.",
          status: "success",
          open: true,
        });
        handleCloseModal();
      })
      .catch((error) => {
        setAlert({
          message:
            "Al parecer ocurrió un error. Su solicitud no se realizó, inténtelo de nuevo.",
          status: "error",
          open: true,
        });
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
        className="personal-loans-section"
        bgcolor="#e4a276"
        py={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={0.5}
       
      >
        <Typography variant="h4" align="center" sx={{ marginBottom: "20px" }}>
          PRESTAMOS PARA MAL CALIFICADOS (INFOCORP)
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: "20px" }}
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
          <div style={styles.modalContent}>
            <IconButton
              aria-label="Cerrar"
              onClick={handleCloseModal}
              style={styles.closeButton}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              align="center"
              style={{ marginBottom: "20px" }}
            >
              PRESTAMOS PARA MAL CALIFICADOS (INFOCORP)
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Checkbox */}

                {/* Nombre */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre"
                    name="nombre"
                    value={formValues.nombre}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Apellido */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Apellido"
                    name="apellido"
                    value={formValues.apellido}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* DNI */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="DNI"
                    name="dni"
                    value={formValues.dni}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Teléfono */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Teléfono"
                    name="telefono"
                    value={formValues.telefono}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Correo Electrónico */}
                <Grid item xs={12}>
                  <TextField
                    label="Correo Electrónico"
                    name="correo"
                    value={formValues.correo}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Teléfono Personal */}
                <Grid item xs={12}>
                  <TextField
                    label="Teléfono Personal"
                    name="telefonoPersonal"
                    value={formValues.telefonoPersonal}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Dirección */}
                <Grid item xs={12}>
                  <TextField
                    label="Dirección"
                    name="direccion"
                    value={formValues.direccion}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Tipo de vivienda */}
                <Grid item xs={12}>
                  <FormControl fullWidth required style={styles.formControl}>
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
                </Grid>
                {/* Cuantas Personas Viven contigo */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Cuantas Personas Viven contigo"
                    name="personasContigo"
                    value={formValues.personasContigo}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    type="number"
                  />
                </Grid>
                {/* Departamento */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Departamento"
                    name="departamento"
                    value={formValues.departamento}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Distrito */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Distrito"
                    name="distrito"
                    value={formValues.distrito}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Estado Civil */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required style={styles.formControl}>
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
                </Grid>
                {/* Número de Hijos */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Número de Hijos"
                    name="hijos"
                    value={formValues.hijos}
                    onChange={handleInputChange}
                    fullWidth
                    type="number"
                  />
                </Grid>
                {/* Ocupación */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Ocupación"
                    name="ocupacion"
                    value={formValues.ocupacion}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Empresa donde labora */}
                <Grid item xs={12}>
                  <TextField
                    label="Empresa donde labora"
                    name="empresa"
                    value={formValues.empresa}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Ingresos Mensuales */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Ingresos Mensuales"
                    name="ingresosMensuales"
                    value={formValues.ingresosMensuales}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    type="number"
                  />
                </Grid>
                {/* Otros Ingresos */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Otros Ingresos"
                    name="otrosIngresos"
                    value={formValues.otrosIngresos}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    type="number"
                  />
                </Grid>
                {/* Monto a pedir */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Monto a pedir"
                    name="montoPedido"
                    value={formValues.montoPedido}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    type="number"
                  />
                </Grid>
                {/* Ingresa Código de invitación */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Ingresa Código de invitación"
                    name="codigoInvitacion"
                    value={formValues.codigoInvitacion}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="primary" />
                ) : (
                  "Solicitar crédito"
                )}
              </Button>
            </form>
          </div>
        </Modal>
      </Box>
    </Parallax>
  );
};

export default PrestamosMalCalificado;
