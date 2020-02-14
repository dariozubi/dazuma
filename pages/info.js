import Layout from '../src/Layout';
import Box from '@material-ui/core/Box';
import Semblanza from "../src/text/semblanza.md"

export default function Index() {
  return (
    <Layout>
      <Box mt={12} mx={4}>
        <Semblanza/>
      </Box>
    </Layout>
  );
}