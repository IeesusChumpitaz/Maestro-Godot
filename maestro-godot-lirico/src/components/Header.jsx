import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Un ícono para el menú

// 1. Recibimos la nueva prop
const Header = ({ onMenuClick }) => {
  return (
    // Misión: Crear un AppBar fijo que sirva como el header principal.
    // Usaremos un Toolbar para alinear los elementos correctamente.
    // A la izquierda: Un IconButton para un futuro menú y el título de la App.
    // A la derecha: Un botón para "Iniciar Sesión".
    // Usaremos un Box con flexGrow: 1 para empujar el botón de la derecha hasta el final.
    <AppBar position="static">
      <Toolbar>
        {/* LADO IZQUIERDO */}
        <IconButton
          onClick={onMenuClick}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }} // mr es "margin-right", para dar un poco de espacio
        >
          <MenuIcon />
        </IconButton>
        {/* Este Box es el truco para empujar el botón a la derecha */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h1">
            Maestro Godot Lírico
          </Typography>
        </Box>
        {/* LADO DERECHO */}
        <Button color="inherit">Iniciar Sesión</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
