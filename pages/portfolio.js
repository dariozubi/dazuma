import Layout from '../src/Layout';
import Websites from '../src/portfolio/Websites';
import Multimedia from '../src/portfolio/Multimedia';
import Box from '@material-ui/core/Box';

export default function Trabajos(){
  return(
    <Layout
      title="Trabajo"
      description="Darío Zubillaga. Software como debería ser."
    >
      <Box mt={8} mx={4}>
        <Websites/>
        <Multimedia/>
      </Box>
    </Layout>
  );
}
