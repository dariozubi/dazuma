import Box from '@material-ui/core/Box';

import Layout from '../../src/Layout';
import Semblanza from "../../src/text/es/semblanza.md"

export default function Index() {
  return (
    <Layout
      title="Info"
      description="Darío Zubillaga. Software como debería ser."
    >
      <Box mt={12} mx={4}>
        <Semblanza/>
      </Box>
    </Layout>
  );
}