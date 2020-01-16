import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header from '../src/Header';
import Footer from '../src/Footer';
import Websites from '../src/Websites';
import Multimedia from '../src/Multimedia';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <>
    <Header/>
    <Grid container alignItems="baseline" justify="center">
      <Grid container item xs={10}>
        <Multimedia/>
        <Websites/>
      </Grid>
    </Grid>
    <Footer/>
    </>
  );
}

