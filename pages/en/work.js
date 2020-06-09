import dynamic from 'next/dynamic'

import Layout from '../../src/util/Layout';


const Projects = dynamic(
  () => import('../../src/work/Projects'),
  { ssr: false }
)

export default function Work(){
  return(
    <Layout
      title="Work"
      description="Different projects Dario Zubillaga has worked on"
    >
      <Projects />
    </Layout>
  )
}