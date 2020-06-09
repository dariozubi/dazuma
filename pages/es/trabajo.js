import dynamic from 'next/dynamic'

import Layout from '../../src/util/Layout';


const Projects = dynamic(
  () => import('../../src/work/Projects'),
  { ssr: false }
)

export default function Work(){
  return(
    <Layout
      title="Trabajo"
      description="Los diferentes proyectos en los que ha trabajado Darío Zubillaga"
    >
      <Projects />
    </Layout>
  )
}