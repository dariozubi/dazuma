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
import banner from '../../../images/gaby-banner.jpg';

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
                image={banner}
              />
          </Card>
        </Fade>
      </Box>

      <Box mx={4} my={4}>

        <Grow in={fade} timeout={850}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gabriela Zubillaga
          </Typography>
        </Grow>

        <Grow in={fade} timeout={900}>
          <p>Artist Gabriela Zubillaga asked me to make her <a href="https://gabrielazubillaga.com/" target="_blank" rel="noopener">website</a>. Since she wanted to make edits by herself and add a shop later, I recommended to make it in Wordpress since it's friendly with non-technical users.</p> 
        </Grow>

        <Grow in={fade} timeout={950}>
          <Fab size="small" color="primary" aria-label="back" className={classes.fab} onClick={()=>Router.back()}>
            <ArrowBackIcon />
          </Fab>
        </Grow>

      </Box>

    </React.Fragment>
  )
}

export default function Gaby() {
  return (
    <Layout
      title="Gabriela Zubillaga"
      description="Página web de la artista Gabriela Zubillaga"
    >
      <Text/>
    </Layout>
  )
}