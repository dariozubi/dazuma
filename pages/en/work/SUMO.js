import React, { useEffect, useState } from 'react';
import Router from 'next/router'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../../src/util/Layout';
import banner from '../../../images/sumo-banner.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%'
  },
  media: {
    height: 164,
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

      <Box mt={8}>
        <Fade in={fade} timeout={800}>
          <Card className={classes.root} elevation={0}>
              <CardMedia
                className={classes.media}
                image={banner}
              />
          </Card>
        </Fade>
      </Box>

      <Box mx={4} my={4}>

        <Grow in={fade} timeout={850}>
          <Typography variant="h4" component="h1" gutterBottom>
            SUMO
          </Typography>
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>During my Computer Science masters, I worked on a project about self-organizing traffic lights. My research consisted on doing traffic simulations with these traffic lights. Before this, there were only cellular automata models of the traffic lights so we needed something more realistic.</p> 
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>We opted for SUMO because it is open source and you could edit a lot of it. It is based in Python, so the <a href="https://github.com/dariozubi/so-tls" target="_blank" rel="noopener">code</a> I made is also in that language. The result of this work ended in a published paper in <a href="https://www.mdpi.com/1099-4300/16/5/2384" target="_blank" rel="noopener">Entropy</a>.</p>
        </Grow>

        <Grow in={fade} timeout={1000}>
          <p>In 2017, three years after I graduated, Carlos Gershenson offered me to work again with SUMO. We worked in an interdisciplinary group of UNAM to solve a problem with one <a href="https://www.youtube.com/watch?v=SoZHHuJWSnw" target="_blank" rel="noopener">intersection</a> outside the university. I made several simulations based in real data. That allowed us to make some estimations of the emissions made by the traffic with the current traffic lights. Then, we compared it with our self-organizing traffic lights model. Results showed that there was an improvement of 20% in some cases even without parameter optimization.</p>
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

export default function SUMO() {
  return (
    <Layout
      title="SUMO"
      description="Simulaciones de tráfico y semáforos con Python"
    >
      <Text/>
    </Layout>
  )
}