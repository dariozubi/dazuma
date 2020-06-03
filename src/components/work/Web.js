import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import dazuma from '../../images/dazuma.jpg';
import hoxa from '../../images/hoxa.jpg';
import pame from '../../images/pame.jpg';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  container: {
    padding: theme.spacing(3)
  }
}));


export default function Web(){
  const classes = useStyles();
	return(
		<Grid container spacing={2} className={classes.container}>

      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Web
        </Typography>
      </Grid>

      <Grid item lg={3} xs={6}>
        <Card>
          <CardActionArea href="/" target="_blank" rel="noopener">
            <CardHeader
              subheader="dazuma"
            />
            <CardMedia
              className={classes.media}
              image={dazuma}
              title="dazuma"
            />
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item lg={3} xs={6}>
        <Card>
          <CardActionArea href="https://hoxa.mx/" target="_blank" rel="noopener">
            <CardHeader
              subheader="Hoxa"
            />
            <CardMedia
              className={classes.media}
              image={hoxa}
              title="HOXA"
            />
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item lg={3} xs={6}>
        <Card>
          <CardActionArea href="http://pamelazubillaga.com/" target="_blank" rel="noopener">
            <CardHeader
              subheader="pamelazubillaga"
            />
            <CardMedia
              className={classes.media}
              image={pame}
              title="pame"
            />
          </CardActionArea>
        </Card>
      </Grid>

    </Grid>
	)
}