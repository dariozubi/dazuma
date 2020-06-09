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
import banner from '../../../images/porsche-banner.jpg';

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
            Porsche
          </Typography>
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>Como parte de las celebraciones de la fórmula 1 en México en 2017, Porsche tuvo un stand para todos sus usarios. En Intus desarrollamos diferentes aplicaciones interactivas para ellos.</p> 
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>Yo estuve involucrado en la creación de un Videowall. Este consitía en un arreglo de nueve pantallas con un sensor multitouch que permitía interactuar con ellas gracias a una aplicación realizada en Unity. Ahí se presentó información sobre las carreras, los pilotos y los coches. La aplicación fue hecha con Unity.</p>
        </Grow>

        <Grow in={fade} timeout={1150}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={7}>
              <iframe width="100%" height="315" src="https://player.vimeo.com/video/234930083" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
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

export default function Porsche() {
  return (
    <Layout
      title="Porsche"
      description="Aplicaciones multimedia para Porsche en la F1"
    >
      <Text/>
    </Layout>
  )
}