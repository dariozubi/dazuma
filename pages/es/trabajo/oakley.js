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
import banner from '../../../images/oakley-banner.jpg';

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
            Carrera Oakley
          </Typography>
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>El cliente quería realizar una experiencia para los usuarios que los motivara a moverse. En Intus propusimos crear una carrera virtual en la que los usuarios tuvieran que ejercitarse para mover un avatar a lo largo de un recorrido virtual.</p> 
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>La aplicación fue creada en Unity. Consistía en una cámara para detectar sus movimientos con OpenCV y un monitor para mostrar los avances en la carrera. Yo estuve encargado de la heurística de detección de los movimientos del usuario.</p>
        </Grow>

        <Grow in={fade} timeout={1000}>
          <p>Cuando se presentó la aplicación, se formaron largas filas para poder utilizarla lo cual el cliente consideró como un éxito.</p>
        </Grow>

        <Grow in={fade} timeout={1050}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={7}>
              <iframe width="100%" height="315" src="https://player.vimeo.com/video/227765201" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
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

export default function Oakley() {
  return (
    <Layout
      title="Oakley"
      description="Carrera virtual basada en video"
    >
      <Text/>
    </Layout>
  )
}