import { useState, useEffect } from 'react';

import Grow from '@material-ui/core/Grow';
import Box from '@material-ui/core/Box';

import Layout from '../../src/util/Layout';
import Semblanza from '../../text/en/semblanza.md';

function Text(){
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setSlide(true);
  }, [])
  return(
    <Grow in={slide} timeout={600}>
      <Box mt={12} mx={4}>
        <Semblanza/>
      </Box>
    </Grow>
  )
}
export default function Index() {
  
  return (
    <Layout
      title="Info"
      description="Darío Zubillaga's about page"
    >
      <Text/>
    </Layout>
  );
}