import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import Layout from '../../src/components/Layout';
import { getPosts } from '../../src/components/blog/content_en'

export default function Index(props) {
  return (
    <Layout 
      title="Blog"
      description="Darío Zubillaga's Blog. Software done right."
    >
      <Box mt={12} mx={4}>
        <List>
          {
            getPosts().map((a,k)=>{
              const date = new Date(a.date);
              const options = {year: "numeric", month: "long"};
              return (
                <React.Fragment  key={k}>
                  <ListItem button component="a" href={'blog/'+a.id}>
                    <ListItemText
                      primary={a.title}
                      secondary={date.toLocaleDateString('en', options)}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li"/>
                </React.Fragment>
              )}
            )
          }
        </List>
      </Box>
    </Layout>
  );
}

Index.getInitialProps = async function(context) {
  return require.context('../../src/text/en/blog/', true, /\.mdx$/)
}