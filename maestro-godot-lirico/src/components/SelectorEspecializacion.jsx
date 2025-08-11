import React from 'react';
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent, Grid } from '@mui/material';
import placeholder from '../assets/placeholder.png'; // Importamos el placeholder local

// Datos de prueba para las especializaciones
const especializaciones = [
  { id: 'plataformas2d', nombre: 'Plataformas 2D', desc: 'Domina el arte del salto, la gravedad y el control preciso.', imagen: placeholder },
  { id: 'rpg', nombre: 'Aventura RPG', desc: 'Crea mundos, historias y sistemas de combate complejos.', imagen: placeholder },
  { id: 'estrategia', nombre: 'Estrategia', desc: 'Gestiona recursos, comanda ejércitos y planifica la victoria.', imagen: placeholder },
];

const SelectorEspecializacion = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Elige tu Senda de Especialización</Typography>
      <Grid container spacing={4}>
        {especializaciones.map((esp) => (
          <Grid item xs={12} md={4} key={esp.id}>
            <Card>
              <CardActionArea onClick={() => console.log(`Seleccionada: ${esp.nombre}`)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={esp.imagen}
                  alt={esp.nombre}
                  sx={{ backgroundColor: 'grey.800' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {esp.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {esp.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SelectorEspecializacion;
