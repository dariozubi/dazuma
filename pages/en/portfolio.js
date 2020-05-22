import Layout from '../../src/Layout';
import Websites from '../../src/portfolio/Websites_en';
import Multimedia from '../../src/portfolio/Multimedia_en';
import Box from '@material-ui/core/Box';

export default function Trabajos(){
  return(
    <Layout
      title="Work"
    >
      <Box mt={8} mx={4}>
        <Websites/>
        <Multimedia/>
      </Box>
    </Layout>
  );
}
