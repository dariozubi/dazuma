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
          <p>Durante mi Maestría en Ciencias de la Computación trabajé en un proyecto con Carlos Gershenson sobre semáforos auto-organizantes. Mi investigación consistió en modelar estos semáforos en un simulador de tráfico. Antes de esto, el modelo de semáforos solo se había realizado con autómatas celulares por lo que necesitábamos una aproximación más realista.</p> 
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>Consideramos varios simuladores para hacer los modelos pero al final optamos por SUMO por tratarse de código abierto y que permitía una mayor personalización. SUMO está basado en Python por lo que el código que <a href="https://github.com/dariozubi/so-tls" target="_blank" rel="noopener">realicé</a> esta hecho en dicho lenguaje de programación. El resultado de este trabajo terminó en un artículo publicado en la revista <a href="https://www.mdpi.com/1099-4300/16/5/2384" target="_blank" rel="noopener">Entropy</a>.</p>
        </Grow>

        <Grow in={fade} timeout={1000}>
          <p>En 2017, tres años después de mi titulación, Carlos Gershenson me ofreció trabajar nuevamente con SUMO. Para este proyecto se realizó un grupo interdisciplinario de la Universidad Nacional Autónoma de México que tenía como objetivo reducir las emisiones y el tráfico de una <a href="https://www.youtube.com/watch?v=SoZHHuJWSnw" target="_blank" rel="noopener">intersección</a> que se encuentra afuera de la universidad. Mi contribución al proyecto fue creando simulaciones en SUMO basadas en datos reales que permitieron hacer un estimado de emisiones que después se compararon con nuestra propuesta de semáforos auto-organizantes. Los resultados apuntaron a una mejora de hasta el 20% sin realizar optimizaciones de parámetros.</p>
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