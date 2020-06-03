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


export default function VR(){
  const classes = useStyles();
  return(
    <Grid container spacing={2} className={classes.container}>

      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          VR
        </Typography>
      </Grid>

      <Grid item xs={6} lg={3}>
        <Vimeo
          id='238680805'
          title='Givenchy'
          year='2017'
          description='Programador de la activaci&oacute;n de realidad virtual para Givenchy. Realizada con Unity.'
        />
      </Grid>

    </Grid>
  )
}