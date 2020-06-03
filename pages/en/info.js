import Box from '@material-ui/core/Box';

import Layout from '../../src/components/Layout';
import Semblanza from '../../src/text/en/semblanza.md';

export default function Index() {
  return (
    <Layout
      title="Info"
    >
      <Box mt={12} mx={4}>
        <Semblanza/>
      </Box>
    </Layout>
  );
}