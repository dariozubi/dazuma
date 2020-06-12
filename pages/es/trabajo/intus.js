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
import banner from '../../../images/coca-banner.jpg';

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
            Construcción de un motor
          </Typography>
        </Grow>
        
        <Grow in={fade} timeout={850}>
          <p>Mientras trabajé en Intus, desarrollamos una aplicación en realidad virtual como una prueba para un cliente. La aplicación permitía construir un motor colocando una pieza a la vez. En el motor se veían las zonas donde las piezas debían ir y al acercar la pieza adecuada se colocaba en su lugar.</p> 
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>Al final esta aplicación no la usó el cliente, pero era completamente funcional y sirvió como referencia para otros posteriormente.</p>
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