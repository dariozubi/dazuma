import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../../src/util/Layout';
import banner from '../../../images/coca-banner.jpg';

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
          <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={banner}
              />
          </Card>
        </Fade>
      </Box>

      <Box mx={4} my={4}>
        
        <Grow in={fade} timeout={800}>
          <Typography variant="h4" component="h1" gutterBottom>
            Building an engine
          </Typography>
        </Grow>
        
        <Grow in={fade} timeout={850}>
          <p>While I was working in Intus, we made a VR application to show as a teaser. The app allowed you to build an engine one piece at a time. The engine showed some placement areas where you could snap the corresponding piece.</p> 
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>In the end this app didn't work out for the customer but it was fully functional and did work for future reference with the clients.</p>
        </Grow>

        <Grow in={fade} timeout={1000}>
          <Fab size="small" color="primary" aria-label="back" className={classes.fab} onClick={()=>Router.back()}>
            <ArrowBackIcon />
          </Fab>
        </Grow>
      </Box>
    </React.Fragment>
  )
}

export default function Argax() {
  return (
    <Layout
      title="Argax"
      description="Music composing tool in a VR environment for 3D spatialization"
    >
      <Text/>
    </Layout>
  )
}