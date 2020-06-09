import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../../src/util/Layout';
import banner from '../../../images/argax-banner.jpg';

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
          <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={banner}
              />
          </Card>
        </Fade>
      </Box>

      <Box mx={4} my={4}>
        
        <Grow in={fade} timeout={800}>
          <Typography variant="h4" component="h1" gutterBottom>
            Árgax
          </Typography>
        </Grow>
        
        <Grow in={fade} timeout={850}>
          <p>As a direct successor of <Link href='/en/work/mazic'><a>Mazic</a></Link>, a game developed for LEIVA 2015, Árgax is born from the necessity to explore music in a 3D environment. The premise was to compose music conceived to be interactive and develop a tool for it. You get an already composed piece, but the interface allows you to add new sounds. Each element of the piece is represented by a virtual object and the user can move it around, zoom it in or out, and increase or decrease the volume. You can also change the acoustic characteristics of the space, from completely dry to a cathedral. This way, the scout has agency over the sound result and can perceive each element by itself or hear the sounds around him, being himself the center of a private concert.</p> 
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>Esteban Ruiz-Velasco was the director of this audiovisual production and asked me to be the main developer. I did Árgax with Unity for an HTC Vive. I used a plugin for the audio spatialization and another for the VR tools.</p>
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>The app was used by the public during the show of PAPIAM in 2017.</p>
        </Grow>

        <Grow in={fade} timeout={1000}>
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
      description="Music composing tool in a VR environment for 3D spatialization"
    >
      <Text/>
    </Layout>
  )
}