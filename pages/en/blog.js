import React, { useState, useEffect } from 'react';

import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import Layout from '../../src/util/Layout';
import { getPosts } from '../../src/blog/content_en'

function Posts(){
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setSlide(true);
  }, [])

  return(
    <Box mt={12} mx={4}>
      <List>
        {
          getPosts().map((a,k)=>{
            const date = new Date(a.date);
            const options = {year: "numeric", month: "long"};
            return (
              <Slide in={slide} direction='up' mountOnEnter unmountOnExit key={k} timeout={400 + k*100}>
                <Paper elevation={0}>
                  <ListItem button component="a" href={'blog/'+a.id}>
                    <ListItemText
                      primary={a.title}
                      secondary={date.toLocaleDateString('en', options)}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li"/>
                </Paper>
              </Slide>
            )}
          )
        }
      </List>
    </Box>
  )
}

export default function Index(props) {
  return (
    <Layout 
      title="Blog"
      description="Darío Zubillaga's Blog. Software done right."
    >
      <Posts/>
    </Layout>
  );
}


Index.getInitialProps = async function(context) {
  return require.context('../../text/en/blog/', true, /\.mdx$/)
}