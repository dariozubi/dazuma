import React, { useEffect, useState } from 'react';
import Router from 'next/router'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../../src/util/Layout';
import cps from '../../../images/cps.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%'
  },
  media: {
    height: 164,
  },
  fab: {
    position: 'absolute',
    right: theme.spacing(6),
    marginBottom: theme.spacing(4)
  }
}));

function Text(){
  const classes = useStyles();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, [])

  return(
    <React.Fragment>

      <Box mt={8}>
        <Fade in={fade} timeout={800}>
          <Card className={classes.root} elevation={0}>
              <CardMedia
                className={classes.media}
                image={cps}
              />
          </Card>
        </Fade>
      </Box>

      <Box mx={4} my={4}>

        <Grow in={fade} timeout={800}>
          <Typography variant="h4" component="h1" gutterBottom>
            Software Development for CPS
          </Typography>
        </Grow>
        
        <Grow in={fade} timeout={850}>
          <p>Centricity Practice Solution (CPS) is a software made to handle clinical content. It allows handling data about patients like allergies, problems, or appointments. Doctors can fill information about each patient's visit using forms. These forms are done either with  Visual Form Editor (VFE) or Clinical Forge.</p> 
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>While I was in Optumus I used VFE to create forms. It is a program that allows you to create forms with MEL, a proprietary programming language. Clinical Forge, instead, uses HTML and AngularJS to create them. Since both programs are expensive we wanted to try our own approach.</p>
        </Grow>

        <Grow in={fade} timeout={950}>
          <p>I was the most experienced with web development in the team so I took the project. I created an Angular-based framework that is still used to create forms for hundreds of doctors in the US.</p>
        </Grow>

        <Grow in={fade} timeout={1050}>
          <Fab size="small" color="primary" aria-label="back" className={classes.fab} onClick={()=>Router.back()}>
            <ArrowBackIcon />
          </Fab>
        </Grow>

      </Box>

    </React.Fragment>
  )
}

export default function CPS() {
	return (
		<Layout
      title="Software development for CPS"
      description="Software Development for Centricity Practice Solution with MEL"
    >
      <Text/>
		</Layout>
	)
}