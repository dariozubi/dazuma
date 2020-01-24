import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Layout from '../../src/Layout';
import { getPosts } from '../../src/blog/content_en'

export default function Index(props) {
  return (
    <Layout>
      <List>
        {
          getPosts().map((a,k)=>{
            return (
              <React.Fragment  key={k}>
                <ListItem button component="a" href={'en/blog/'+a.link}>
                  <ListItemText
                    primary={a.title}
                    secondary={a.tldr}
                  />
                </ListItem>
                <Divider variant="inset" component="li"/>
              </React.Fragment>
            )}
          )
        }
      </List>
    </Layout>
  );
}

Index.getInitialProps = async function(context) {
  return require.context('../../src/text/blog_en', true, /\.mdx$/)
}