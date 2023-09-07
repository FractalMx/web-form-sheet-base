import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import Menu from "@mui/icons-material/Menu";

const pages = [
  {
    title: "Inicio",
    route: "/main",
    component: HashLink,
  },
  {
    title: "Quiénes somos",
    route: "/nosotros",
    component: HashLink,
  },
 
  {
    title: "¿Cómo pagar?",
    route: "/comoPagar",
    component: HashLink,
  },
  {
    title: "Preguntas frecuentes",
    route: "/preguntasFrecuentes",
    component: HashLink,
  },
 
  
];

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function NavbarHome(props) {
  const [openDraw, setOpenDraw] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDraw(open);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar sx={{ backgroundColor: "rgb(0,0,0, 0.8)", position:"relative" }}>
          <Toolbar
            variant="dense"
            sx={{ minHeight: 40, height: 40, display: "flex" }}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <ResponsiveMenu toggleDrawer={toggleDrawer} open={openDraw} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map(({ title, route, component }, index) => (
                <Button
                  component={component}
                  smooth="true"
                  key={index + title}
                  to={route}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "none",
                  }}
                >
                  <Typography>
                    <b>{title}</b>
                  </Typography>
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <UserMenu />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

const ResponsiveMenu = ({ toggleDrawer, open }) => {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemText />
          <IconButton variant="body2" color="text.secondary">
            <Menu />
          </IconButton>
        </ListItem>
        {pages.map(({ route, title, component }, index) => (
          <ListItem key={index + title} disablePadding>
            <ListItemButton
              onClick={toggleDrawer}
              component={component}
              smooth="true"
              to={route}
            >
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
};
