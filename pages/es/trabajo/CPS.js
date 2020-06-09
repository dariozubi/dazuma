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
import cps from '../../../images/cps.jpg';

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
                image={cps}
              />
          </Card>
        </Fade>
      </Box>

      <Box mx={4} my={4}>

        <Grow in={fade} timeout={800}>
          <Typography variant="h4" component="h1" gutterBottom>
            Desarrollo de software para CPS
          </Typography>
        </Grow>
        
        <Grow in={fade} timeout={850}>
          <p>Centricity Practice Solution (CPS) es un software para manejar contenido clínico. Permite manejar datos sobre los pacientes como alergias, problemas o citas. Los doctores pueden guardar información de las visitas de los pacientes con formas. Estas formas son creadas principalmente con dos programas: Visual Form Editor (VFE) y Clinical Forge.</p> 
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>Mientras trabajé en Optumus use VFE para crear formas. Es un programa que te permite crear formas con MEL, un lenguaje de programación propietario. Clinical Forge, en cambio, usa HTML y AngularJS para crear las formas. Dado que los dos programas son caros, optamos por hacer nuestras propias formas.</p>
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>Como era el más experimentado con desarrollo web en el equipo, tomé el proyecto yo solo. Cree un framework basado en Angular que se sigue utilizando para crear formas para cientos de doctores en EU.</p>
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

export default function CPS() {
	return (
		<Layout
      title="Software para CPS con MEL"
      description="Desarrollo de software para Centricity Practice Solution con MEL"
    >
      <Text/>
		</Layout>
	)
}