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
import hoxa from '../images/hoxa.jpg';
import intus from '../images/intus.jpg';
import pame from '../images/pame.jpg';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));


export default function Websites(){
  const classes = useStyles();
	return(
		<Grid container justify="space-around">
      <Grid item xs={12}>
        <Box m={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Websites
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea href="https://intus.tv/" target="_blank" rel="noopener">
            <CardHeader
              title="Intus.tv"
              subheader="2017"
            />
            <CardMedia
              className={classes.media}
              image={intus}
              title="Intus"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Programador de la p&aacute;gina web de la empresa INTUS. Desarrollada en ThreeJS usando assets generados por los dise&ntilde;adores de la empresa. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea href="https://hoxa.mx/" target="_blank" rel="noopener">
            <CardHeader
              title="Hoxa.mx"
              subheader="2019"
            />
            <CardMedia
              className={classes.media}
              image={hoxa}
              title="HOXA"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Programador de la p&aacute;gina web de la empresa HOXA. Desarrollada en Wordpress. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea href="http://pamelazubillaga.com/" target="_blank" rel="noopener">
            <CardHeader
              title="pamelazubillaga.com"
              subheader="2019"
            />
            <CardMedia
              className={classes.media}
              image={pame}
              title="pame"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Programador de la p&aacute;gina web de la artista Pamela Zubillaga. Desarrollada en Wordpress. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
	)
}