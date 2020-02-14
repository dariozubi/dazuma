import Layout from '../../src/Layout';
import Semblanza from '../../src/text/semblanza_en.md';
import Box from '@material-ui/core/Box';

export default function Index() {
  return (
    <Layout>
      <Box mt={12} mx={4}>
        <Semblanza/>
      </Box>
    </Layout>
  );
}