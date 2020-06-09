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
          <p>Como sucesor directo de <Link href='/es/trabajo/mazic'><a>Mazic</a></Link>, juego desarrollado en el marco de LEIVA 2015, Árgax surge de una necesidad de explorar la música en un entorno envolvente. La premisa era componer una obra musical concebida para ser interactiva, y desarrollar una interfaz para ello. Se proporciona una pieza ya compuesta, pero la misma interfaz permite agregar nuevos audios. Cada elemento de la pieza está representado por un objeto virtual, y el usuario puede moverlo a su alrededor, acercarlo, alejarlo, subir y bajar su volumen, o incluso callarlo. También puede cambiar las características acústicas del espacio, en un espectro que va desde lo absolutamente seco, hasta una simulación de las reverberaciones de una catedral. De este modo, el escucha tiene agencia sobre el resultado sonoro, y puede percibir cada elemento de la obra de forma individual, o bien dejarse llevar por los sonidos que lo rodean, siendo él el centro de un concierto privado. </p> 
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>Esteban Ruiz-Velasco fue el director de esta producción audiovisual y me pidió ser el programador de la aplicación. Basado en los diferentes requerimientos que fueron surgiendo a lo largo del proceso de creación, Árgax fue creado en Unity para un HTC Vive. Se utilizó un plugin para la espacialización del audio con una mayor calidad. El resto de los componentes de la escena 3D para realidad virtual fueron creados explícitamente para esta aplicación.</p>
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>La aplicación estuvo abierta al público para utilizarse durante la muestra de los proyectos del Programa de Apoyo a la Producción e Investigación en Arte y Medios (PAPIAM) en el 2017.</p>
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
      description="Aplicación de composición musical en realidad virtual"
    >
      <Text/>
    </Layout>
  )
}