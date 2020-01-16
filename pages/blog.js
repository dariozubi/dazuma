import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../src/Header';
import Footer from '../src/Footer';
import Semblanza from '../src/Semblanza';

export default function Index() {
  return (
    <>
      <Header/>
      <Grid container alignItems="baseline">
        <Grid item xs={10}>
          <Semblanza/>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
}
