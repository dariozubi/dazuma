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
          <p>Uno de los proyectos que me fueron asignados mientras trabajaba en Intus fue este con Unifin. El cliente quería realizar una carrera basada en el número de retweets que tuvieran diferentes concursantes y mostrar la carrera en vivo por Facebook. Hubo diferentes retos para realizarlo pero la principal tarea para mí era realizar la conexión entre la API de Twitter y los carros que estaban en la pista.</p> 
        </Grow>

        <Grow in={fade} timeout={1000}>
          <p>Lo primero era descubrir como manipular a los carros de la pista sin tener que usar manualmente los controles. Trabajé directamente con el proveedor de los carros para platicar con él sobre su funcionamiento. Como funcionan es que cada control tiene un potenciómetro que varia el voltaje que se aplica a cada carril. Dependiendo de los valores el carro irá más o menos rápido. Para poder controlar esto utilizamos piezas de arduino que nos permitían asignar valores desde el código. Una vez que logramos manipular a los carros con los valores asignados con código, conectamos la Arduino a Touch Designer para manipular los carros desde ahí. Lo único restante fue utilizar la API de Twitter en Python para realizar la conexión con la cuenta del cliente y ver que tweets eran los más retwiteados.</p>
        </Grow>
        
        <Grow in={fade} timeout={1050}>
          <p>El día del evento tuve que estar directamente involucrado ya que había que activar y desactivar la API acorde a lo que estuviera pasando en el stream del video. Al final los clientes quedaron a gusto con el resultado y pudieron realizar una carrera basándose sólo en la cantidad de retweets que conseguía cada participante.</p>
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