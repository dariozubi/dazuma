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
          <p> While working in Intus, we made many projects for Acuario Inbursa. I worked in the Sketch Acuario (1:19) and Augmented Reality (3:40) applications.</p> 
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>The Sketch Acuario was divided in two programs: one for the drawing and another for the virtual aquarium. The drawing program was done with Unity. It was a multitouch screen divided in four. Each section had different animal canvas to paint in and buttons to control the drawing tools. Once the drawing was finished, the image was shared with the virtual aquarium program. This last one was done in Touch Designer. The main author was Gilberto Castro but I helped him with some issues.</p>
        </Grow>

        <Grow in={fade} timeout={1050}>
          <p>The augmented reality app was done in Unity. It was an animation on top of a video feed. You could start the animation with a PlayStation controller. Once the video was finished the user was given a ticket with an id to retrieve the video later.</p>
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