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

import Link from 'next/link';
import { useRouter } from 'next/router';

import SUMO from '../images/sumo.jpg';
import CPS from '../images/cps.jpg';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  container: {
    padding: theme.spacing(3)
  }
}));


export default function More(){
  const classes = useStyles();
  const router = useRouter();

	return(
		<Grid container spacing={2} className={classes.container}>

      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          More
        </Typography>
      </Grid>

      <Grid item lg={3} xs={6}>
        <Card>
          <CardActionArea href="https://www.youtube.com/watch?v=SoZHHuJWSnw" target="_blank" rel="noopener">
            <CardHeader
              subheader="SUMO"
            />
            <CardMedia
              className={classes.media}
              image={SUMO}
              title="SUMO"
            />
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item lg={3} xs={6}>
        <Card>
          <Link href={router.pathname + '/CPS'}>
          <CardActionArea>
            <CardHeader
              subheader="CPS"
            />
            <CardMedia
              className={classes.media}
              image={CPS}
              title="CPS"
            />
          </CardActionArea>
          </Link>
        </Card>
      </Grid>
      
    </Grid>
	)
}