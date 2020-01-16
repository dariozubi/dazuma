import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../src/Header';
import Footer from '../src/Footer';

export default function Index() {
  return (
    <>
      <Header/>
      <Grid container alignItems="baseline">
        <Grid item xs={10}>
          <Container maxWidth="sm">
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                Next.js example
              </Typography>
              <Link href="/about" color="secondary">
                Go to the about page
              </Link>
              <ProTip />
            </Box>
          </Container>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
}
