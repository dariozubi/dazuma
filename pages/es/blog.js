import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import Layout from '../../src/Layout';
import { getPosts } from '../../src/blog/content'

export default function Index(props) {
  return (
    <Layout 
      title="Blog"
      description="Blog de Darío Zubillaga. Software como debería ser."
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
                      secondary={date.toLocaleDateString('es', options)}
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
  return require.context('../../src/text/blog', true, /\.mdx$/)
}