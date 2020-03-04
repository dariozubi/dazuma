import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import dazuma from '../images/dazuma.jpg';
import hoxa from '../images/hoxa.jpg';
import intus from '../images/intus.jpg';
import pame from '../images/pame.jpg';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  container: {
    padding: theme.spacing(3)
  }
}));


export default function Websites(){
  const classes = useStyles();
	return(
		<Grid container spacing={2} className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Websites
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
            <CardContent>
              <Typography variant="caption" color="textSecondary" component="p">
                Realizada con React, Three y Next. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item lg={3} xs={6}>
        <Card>
          <CardActionArea href="https://intus.tv/" target="_blank" rel="noopener">
            <CardHeader
              subheader="Intus"
            />
            <CardMedia
              className={classes.media}
              image={intus}
              title="Intus"
            />
            <CardContent>
              <Typography variant="caption" color="textSecondary" component="p">
                Programador de la p&aacute;gina web de la empresa INTUS. Realizada con Three. 
              </Typography>
            </CardContent>
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
            <CardContent>
              <Typography variant="caption" color="textSecondary" component="p">
                Programador de la p&aacute;gina web de la empresa HOXA. Realizada con Wordpress. 
              </Typography>
            </CardContent>
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
            <CardContent>
              <Typography variant="caption" color="textSecondary" component="p">
                Programador de la p&aacute;gina web de la artista Pamela Zubillaga. Realizada con Wordpress. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Box my={3}>
          <Divider variant="middle"/>
        </Box>
      </Grid>
    </Grid>
	)
}