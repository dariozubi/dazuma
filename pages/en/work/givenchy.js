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
import banner from '../../../images/givenchy-banner.jpg';

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
            Givenchy
          </Typography>
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>The client wanted to recreate an ad in an immersive experience. What we did in Intus was to model the main motifs of the ad and put them in a virtual reality environment.</p> 
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>I was in charge of doing the scene in Unity using the models given to me. I also made the camera movements, which was challenging. Moving the camera in a VR environment can make people dizzy if not done properly.</p>
        </Grow>

        <Grow in={fade} timeout={1000}>
          <p>The experience was open to public in different parts of Mexico City in 2017. The client was really happy with the reactions the experience generated.</p>
        </Grow>

        <Grow in={fade} timeout={1150}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item md={4} xs={7}>
              <iframe width="100%" src="https://player.vimeo.com/video/238680805" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
            </Grid>
            <Grid item md={4} xs={7}>
              <iframe width="100%" height="164" src="https://www.youtube.com/embed/3VpCZbvHGNc" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
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

export default function Argax() {
  return (
    <Layout
      title="Argax"
      description="Aplicación de composición musical en realidad virtual"
    >
      <Text/>
    </Layout>
  )
}