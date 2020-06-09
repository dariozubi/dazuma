import React, { useEffect, useState } from 'react';
import Router from 'next/router'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../../src/util/Layout';
import banner from '../../../images/photobooth-banner.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'gray',
    height: '164px',
    backgroundImage: 'url('+banner+')'
  },
  fab: {
    position: 'absolute',
    right: theme.spacing(6),
    marginBottom: theme.spacing(4)
  }
}));

function Text(){
  const classes = useStyles();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, [])

  return(
    <React.Fragment>

      <Fade in={fade} timeout={800}>
        <Box mt={8} className={classes.root}>
        </Box>
      </Fade>

      <Box mx={4} my={4}>

        <Grow in={fade} timeout={850}>
          <Typography variant="h4" component="h1" gutterBottom>
            Photobooth interactivo
          </Typography>
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>El photobooth interactivo era una de las aplicaciones más populares de Intus cuando trabajé ahí. La idea principal era realizar una aplicación personalizada para cada evento que permitía a los usuarios tomarse fotos, agregar filtros y stickers asociados al evento y después imprimirlas como recuerdo.</p> 
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>Cuando yo llegué ya existía una aplicación que hacía todo esto en Unity. Sin embargo, el código no estaba muy bien optimizado y provocaba problemas cada que se realizaba un nuevo evento, que a veces era varias veces al mes en 2016. Decidí realizar una nueva aplicación desde cero que permitiera una mayor automatización del proceso de personalización y que utilizara menos recursos. Al final, el proceso de personalización se redujo de varias horas a menos de una por evento y se agregaron más funcionalidades. Había opción para agregar fondos personalizados, modelos 3D que se agregaban automáticamente basados en la cara del usuario, filtros, stickers y conexión con redes sociales.</p>
        </Grow>

        <Grow in={fade} timeout={1000}>
          <p>Con el paso del tiempo las redes sociales adoptaron este tipo de efectos y la aplicación se fue haciendo cada vez menos popular.</p>
        </Grow>

        <Grow in={fade} timeout={1150}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={7}>
              <iframe width="100%" height="315" src="https://player.vimeo.com/video/214055614" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
            </Grid>
          </Grid>
        </Grow>

        <Grow in={fade} timeout={1050}>
          <Fab size="small" color="primary" aria-label="back" className={classes.fab} onClick={()=>Router.back()}>
            <ArrowBackIcon />
          </Fab>
        </Grow>

      </Box>

    </React.Fragment>
  )
}

export default function Photobooth() {
  return (
    <Layout
      title="Photobooth"
      description="Photobooth interactivo digital"
    >
      <Text/>
    </Layout>
  )
}