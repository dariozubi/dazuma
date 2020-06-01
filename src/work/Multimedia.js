import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import Vimeo from './Vimeo'

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  container: {
    padding: theme.spacing(3)
  }
}));


export default function Multimedia(){
  const classes = useStyles();
  return(
    <Grid container spacing={2} className={classes.container}>

      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Multimedia
        </Typography>
      </Grid>

      <Grid item xs={6} lg={3}>
        <Vimeo
          id='211573179'
          title='Inbursa'
          year='2017'
          description='Programador de las aplicaciones "Sketch Acuario" y "Realidad Aumentada" para el Acuario Inbursa. Realizadas con Unity y Touchdesigner.'
        />
      </Grid>

      <Grid item xs={6} lg={3}>
        <Vimeo
          id='234930083'
          title='Porsche'
          year='2017'
          description='Programador del videowall para Porsche. Realizado con Unity.'
        />
      </Grid>

      <Grid item xs={6} lg={3}>
        <Vimeo
          id='239543126'
          title='Unifin'
          year='2017'
          description='Programador de la activaci&oacute;n para Unifin. Realizada con Touchdesigner y Arduino.'
        />
      </Grid>

      <Grid item xs={6} lg={3}>
        <Vimeo
          id='227765201'
          title='Liverpool'
          year='2017'
          description='Programador de la interacci&oacute;n en la aplicaci&oacute;n realizada para Oakley. Realizada con Unity con OpenCV.'
        />
      </Grid>

      <Grid item xs={6} lg={3}>
        <Vimeo
          id='214055614'
          title='Photobooth'
          year='2017'
          description='Programador del photobooth interactivo. Realizado con Unity.'
        />
      </Grid>

      <Grid item xs={6} lg={3}>
        <Vimeo
          id='169016402'
          title='Mazic'
          year='2017'
          description='Programador de Mazic, un videojuego de laberintos y m&uacute;sica. Realizado con Unity.'
        />
      </Grid>

    </Grid>
  )
}