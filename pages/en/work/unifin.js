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
import banner from '../../../images/unifin-banner.jpg';

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
        
        <Grow in={fade} timeout={900}>
          <Typography variant="h4" component="h1" gutterBottom>
            Carrera Unifin
          </Typography>
        </Grow>
        
        <Grow in={fade} timeout={950}>
          <p>One of the projects I was assigned while working in Intus was this one for Unifin. The client wanted to make a race with electric cars that showed the winner based on retweets gained by each contestant. There were many challenges to achieve this but my main task was to use the Twitter API to connect it with the cars in the track.</p> 
        </Grow>

        <Grow in={fade} timeout={1000}>
          <p>We first worked with using the cars without the human controllers. We used a voltage converter for Arduino that allowed us to change the value with code. Then, I connected that value to a computer via Touch Designer. Once I could change the cars speed from the computer I made the connection to the Twitter API in Python.</p>
        </Grow>

        <Grow in={fade} timeout={1150}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={7}>
              <iframe width="100%" height="315" src="https://player.vimeo.com/video/239543126" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
            </Grid>
          </Grid>
        </Grow>

        <Grow in={fade} timeout={1100}>
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
      title="Unifin"
      description="Carrera de carritos controlados por tweets"
    >
      <Text/>
    </Layout>
  )
}