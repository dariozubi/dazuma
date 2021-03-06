import React from 'react';
import { MDXProvider } from '@mdx-js/react'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { getPost } from '../../../src/blog/content'
import Code from '../../../src/blog/Code';
import Layout from '../../../src/util/Layout';

const components ={
  code: Code
}

function Post({ post }){
  const Content = post.Doc;

  return(
    <Box mx={8} my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <MDXProvider components={components}>
        <Content/>
      </MDXProvider>
    </Box>
  )
}

function BlogTemplate({ id }){
  const post = getPost(id)
  
  return(
    <Layout>
      <Post post={post} />
    </Layout>
  )
}

BlogTemplate.getInitialProps = async function(context) {
  return { id: context.query.slug }
};

export default BlogTemplate;