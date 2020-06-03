import Box from '@material-ui/core/Box';

import Layout from '../../src/components/Layout';
import Web from '../../src/components/work/Web';
import VR from '../../src/components/work/VR';
import Multimedia from '../../src/components/work/Multimedia';
import More from '../../src/components/work/More';

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
