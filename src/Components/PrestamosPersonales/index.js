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
} from "@mui/material";
import "./PrestamosPersonales.css"; // Asegúrate de tener el archivo CSS
import CloseIcon from "@mui/icons-material/Close";
import { Parallax } from "rc-scroll-anim";
const PrestamosPersonales = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
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
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar campos y enviar solicitud aquí
    console.log(formValues);
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
      >
        <Typography variant="h4" align="center" sx={{ marginBottom: "20px" }}>
          Préstamos Personales desde $x soles hasta $x soles
        </Typography>
        <Typography
          variant="body2"
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
              Préstamos Personales desde $x hasta $X
            </Typography>

            <form onSubmit={handleSubmit}>
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
                sx={{ backgroundColor: "#e4a276" }}
                fullWidth
              >
                Enviar Solicitud
              </Button>
            </form>
            <Typography
              variant="body2"
              align="center"
              sx={{ marginBottom: "20px" }}
            >
              * Recuerda que la aprobación de tu préstamo dependerá de la base
              de datos en los últimos meses de tu reporte financiero, si cuentas
              con un mal historial crediticio, se rechazará tu solicitud. En
              caso de aprobar nos pondremos en contacto contigo.
            </Typography>
          </div>
        </Modal>
      </Box>
    </Parallax>
  );
};

export default PrestamosPersonales;
