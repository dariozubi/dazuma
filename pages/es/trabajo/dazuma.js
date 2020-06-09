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
import banner from '../../../images/dazuma-banner.jpg';

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
            dazuma
          </Typography>
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>Para aprender sobre los nuevos frameworks y tecnologías web decidí hacer esta página con Next. Aprendí algo de Angular mientras estuve en Optumus pero aprendí React y busqué la forma de crear algo.</p> 
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>El código de esta página es abierto y siempre podrá consultarse en mi página de <a href="https://github.com/dariozubi/dazuma" target="_blank" rel="noopener">Github</a>.</p>
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
      title="dazuma"
      description="Página web personal realizada con Next"
    >
      <Text/>
    </Layout>
  )
}