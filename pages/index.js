import Grid from '@material-ui/core/Grid';

import Header from '../src/Header';
import Footer from '../src/Footer';

export default function Index() {
  return (
    <>
      <Header/>
      <Grid container alignItems="baseline">
        <Grid item xs={12}>
          <iframe width="100%" height="800px" frameBorder="0" src="https://www.shadertoy.com/embed/Ml3yRr?gui=false&t=0&paused=false&muted=false" allowFullScreen></iframe>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
}
