import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Vimeo from './Vimeo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
          title='Acuario Inbursa'
          year='2017'
          description='Main developer of the "Sketch Acuario" and "Realidad Aumentada" apps for Acuario Inbursa. Done with Unity and Touchdesigner.'
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <Vimeo
          id='234930083'
          title='Video Wall Porsche'
          year='2017'
          description='Main developer of the Porsche videowall. Done with Unity.'
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <Vimeo
          id='238680805'
          title='VR Givenchy'
          year='2017'
          description='Main developer of the VR app for Givenchy. Done with Unity.'
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <Vimeo
          id='239543126'
          title='Carritos Unifin'
          year='2017'
          description='Main developer and live coder for the app for Unifin. Developed with Touchdesigner and Arduino.'
        />
      </Grid>

      <Grid item xs={6} lg={3}>
        <Vimeo
          id='227765201'
          title='Carrera Liverpool'
          year='2017'
          description='Developer of the app for Oakley. Done with Unity.'
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <Vimeo
          id='214055614'
          title='Photobooth'
          year='2017'
          description='Main developer of the photobooth. Done with Unity.'
        />
      </Grid>
      <Grid item xs={6} lg={3}>
        <Vimeo
          id='169016402'
          title='Mazic'
          year='2017'
          description='Developer of Mazic. Done with Unity.'
        />
      </Grid>
    </Grid>
	)
}