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
import banner from '../../../images/mazic-banner.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'gray',
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
            MAZIC
          </Typography>
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>Mazic is a first person game where the player is trapped inside a maze. To get out you need to use sound queues that lead you to solve the puzzle.</p> 
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>This project was done as a part of LEIVA 2015. Esteban Ruiz-Velasco was the leader of the project. I was one of the developers working with Unity.</p>
        </Grow>

        <Grow in={fade} timeout={1000}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={7}>
              <iframe width="100%" height="315"src="https://www.youtube.com/embed/sKwSSsp4wgA" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
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

export default function Mazic() {
  return (
    <Layout
      title="Mazic"
      description="Videojuego de música y laberintos"
    >
      <Text/>
    </Layout>
  )
}