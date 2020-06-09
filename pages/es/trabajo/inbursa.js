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
import banner from '../../../images/inbursa-banner.jpg';

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
            Acuario Inbursa
          </Typography>
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>Mientras trabajé en Intus realizamos varios proyectos para el acuario Inbursa. Yo participé directamente en las aplicaciones Sketch Acuario (1:19) y Realidad Aumentada (3:40).</p> 
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>La aplicación de Sketch Acuario constaba de dos programas: uno para hacer los dibujos y otro para mostrarlos en el acuario virtual. El programa para los dibujos estaba realizada en Unity. Constaba de una pantalla multitouch dividida en 4 para que varios niños pudieran participar a la vez. Cada sección tenía un canvas con diferentes formas de animales y botones para controlar el color y grosor de lo que se dibujaba en la pantalla. Una vez terminado el dibujo, la imagen se guardaba en una carpeta compartida en una red local con la computadora con el otro progrma. Este otro programa que mostraba los dibujos en el acuario virtual estaba desarrollado en Touch Designer. El autor principal fue Gilberto Castro pero yo ayudé a solucionar algunos problemas.</p>
        </Grow>

        <Grow in={fade} timeout={1050}>
          <p>La aplicación de Realidad Aumentada estaba realizada en Unity. Consistía en una animación sobrepuesta a un feed de video de la genete cuando entraba en el acuario. Por medio de un control se accionaba la animación. Además, estaba conectada a una impresora que emitía un ticket con un identificador para poder obtener el video al final del recorrido.</p>
        </Grow>

        <Grow in={fade} timeout={1100}>
          <p>Además de estas dos aplicaciones, participé también en una que no se encuentra en el video. La aplicación permitía a un animador interactuar con la gente virtualmente mientras ellos veían una botarga virtual. Por medio de un kinect, un animador podía moverse para animar un pingüino y a la vez ver y hablar con la gente que estaba pasando. La gente veía en la pantalla como un pingüino virtual interactuaba con ellos.</p>
        </Grow>

        <Grow in={fade} timeout={1150}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={7}>
              <iframe width="100%" height="315" src="https://player.vimeo.com/video/211573179" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
            </Grid>
          </Grid>
        </Grow>

        <Grow in={fade} timeout={1150}>
          <Fab size="small" color="primary" aria-label="back" className={classes.fab} onClick={()=>Router.back()}>
            <ArrowBackIcon />
          </Fab>
        </Grow>

      </Box>

    </React.Fragment>
  )
}

export default function Inbursa() {
  return (
    <Layout
      title="Acuario Inbursa"
      description="Múltiples aplicaciones multimedia para el Acuario Inbursa"
    >
      <Text/>
    </Layout>
  )
}