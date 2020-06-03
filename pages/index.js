import Layout from '../src/components/Layout';
import Model from '../src/components/home/Model';

export default function Index() {
  return (
    <Layout
      title="Home"
      description="Darío Zubillaga. Software como debería ser."
    >
      <Model/>
    </Layout>
  );
}