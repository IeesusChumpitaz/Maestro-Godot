import React, { useState } from "react";
import { Box, Typography, Stack, Chip, IconButton } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const TimelineProgreso = ({ syllabus, reinoActivo, onReinoSelect, reinosDesbloqueados }) => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        backgroundColor: "background.paper",
        borderRadius: 2,
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="h6" component="h3" sx={{ mb: 2, flexShrink: 0 }}>
          Tu Viaje del Héroe
        </Typography>
        {visible && (
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "center", flexGrow: 1, flexWrap: "wrap", gap: 1 }}
          >
            {syllabus.map((reino) => {
              const estaActivo = reinoActivo && reinoActivo.reinoId === reino.reinoId;
              const estaDesbloqueado = reinosDesbloqueados.includes(reino.reinoId);

              return (
                <Chip
                  key={reino.reinoId}
                  label={reino.nombre}
                  variant={estaActivo ? "filled" : "outlined"}
                  color={estaActivo ? "primary" : "default"}
                  disabled={!estaDesbloqueado}
                  onClick={() => {
                    if (estaDesbloqueado) {
                        onReinoSelect(reino);
                    }
                  }}
                />
              );
            })}
          </Stack>
        )}
        <IconButton onClick={toggleVisibility} size="small" sx={{ ml: "auto" }}>
          {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </Stack>
    </Box>
  );
};

export default TimelineProgreso;