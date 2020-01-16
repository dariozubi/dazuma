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


export default function Multimedia(){
  const classes = useStyles();
	return(
		<Grid container spacing={2}>
      <Grid item xs={12}>
        <Box mt={3} ml={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Multimedia
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
          <Card>
            <CardActionArea href="https://vimeo.com/211573179" target="_blank" rel="noopener">
              <CardHeader
                title="Acuario Inbursa"
                subheader="2017"
              />
              <iframe src="https://player.vimeo.com/video/211573179" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Programador de las aplicaciones "Sketch Acuario" y "Realidad Aumentada" para el Acuario Inbursa. Desarrolladas en Unity.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={3}>
          <Card>
            <CardActionArea href="https://vimeo.com/234930083" target="_blank" rel="noopener">
              <CardHeader
                title="Video Wall Porsche"
                subheader="2017"
              />
              <iframe src="https://player.vimeo.com/video/234930083" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Programador del videowall para Porsche. Desarrollado en Unity.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={3}>
          <Card>
            <CardActionArea href="https://vimeo.com/238680805" target="_blank" rel="noopener">
              <CardHeader
                title="VR Givenchy"
                subheader="2017"
              />
              <iframe src="https://player.vimeo.com/video/238680805" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Programador de la activaci&oacute;n para Givenchy en VR para Oculus Rift. Desarrollada en Unity.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={3}>
          <Card>
            <CardActionArea href="https://vimeo.com/239543126" target="_blank" rel="noopener">
              <CardHeader
                title="Carritos Unifin"
                subheader="2017"
              />
              <iframe src="https://player.vimeo.com/video/239543126" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Programador de la activaci&oacute;n para Unifin. Desarrollada en Touchdesigner usando la API de Twitter para contar los tweets y conectado a una arduino UNO para controlar los carritos.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={3}>
          <Card>
            <CardActionArea href="https://vimeo.com/227765201" target="_blank" rel="noopener">
              <CardHeader
                title="Carrera Liverpool"
                subheader="2017"
              />
              <iframe src="https://player.vimeo.com/video/227765201" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Programador de la interacci&oacute;n en la aplicaci&oacute;n realizada para Oakley. Desarrollada en Unity con OpenCV.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={3}>
          <Card>
            <CardActionArea href="https://vimeo.com/214055614" target="_blank" rel="noopener">
              <CardHeader
                title="Photobooth"
                subheader="2017"
              />
              <iframe src="https://player.vimeo.com/video/214055614" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Programador del photobooth interactivo. Desarrollado en Unity.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
      <Grid item xs={3}>
          <Card>
            <CardActionArea href="https://vimeo.com/169016402" target="_blank" rel="noopener">
              <CardHeader
                title="Mazic"
                subheader="2017"
              />
              <iframe src="https://player.vimeo.com/video/169016402" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Programador de Mazic, un videojuego de laberintos y m&uacute;sica. Desarrollado en Unity.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
    </Grid>
	)
}