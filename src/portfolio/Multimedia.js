import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Vimeo from './Vimeo';

export default function Multimedia(){
	return(
		<Grid container spacing={2}>
      <Grid item xs={12}>
        <Box ml={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Multimedia
          </Typography>
        </Box>

      </Grid>
      <Grid item xs={6} lg={3}>
        <Vimeo
          id='211573179'
          title='Acuario Inbursa'
          year='2017'
          description='Programador de las aplicaciones "Sketch Acuario" y "Realidad Aumentada" para el Acuario Inbursa. Desarrolladas en Unity.'
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <Vimeo
          id='234930083'
          title='Video Wall Porsche'
          year='2017'
          description='Programador del videowall para Porsche. Desarrollado en Unity.'
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <Vimeo
          id='238680805'
          title='VR Givenchy'
          year='2017'
          description='Programador de la activaci&oacute;n de realidad virtual para Givenchy. Desarrollada en Unity.'
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <Vimeo
          id='239543126'
          title='Carritos Unifin'
          year='2017'
          description='Programador de la activaci&oacute;n para Unifin. Desarrollada en Touchdesigner y Arduino.'
        />
      </Grid>

      <Grid item xs={6} lg={3}>
        <Vimeo
          id='227765201'
          title='Carrera Liverpool'
          year='2017'
          description='Programador de la interacci&oacute;n en la aplicaci&oacute;n realizada para Oakley. Desarrollada en Unity con OpenCV.'
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <Vimeo
          id='214055614'
          title='Photobooth'
          year='2017'
          description='Programador del photobooth interactivo. Desarrollado en Unity.'
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <Vimeo
          id='169016402'
          title='Mazic'
          year='2017'
          description='Programador de Mazic, un videojuego de laberintos y m&uacute;sica. Desarrollado en Unity.'
        />
      </Grid>
    </Grid>
	)
}