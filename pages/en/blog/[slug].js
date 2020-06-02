import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MDXProvider } from '@mdx-js/react'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { getPost } from '../../../src/blog/content_en'
import Code from '../../../src/Code';
import Layout from '../../../src/Layout';

const components ={
  code: Code
}

function Post({ post }){
  const Content = post.Doc;

  return(
    <Box mx={8} my={12}>
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