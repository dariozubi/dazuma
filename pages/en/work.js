import Layout from '../../src/Layout';
import Web from '../../src/work/Web';
import VR from '../../src/work/VR';
import Multimedia from '../../src/work/Multimedia';
import More from '../../src/work/More';
import Box from '@material-ui/core/Box';

export default function Work(){
  return(
    <Layout
      title="Work"
    >
      <Box mt={8} mx={4}>
        <Web/>
        <Multimedia/>
        <VR/>
        <More/>
      </Box>
    </Layout>
  );
}
