import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MDXProvider } from '@mdx-js/react'

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useRouter } from 'next/router'

import { getPost } from '../../../src/blog/content_en'
import Banner from '../../../src/Banner';
import Code from '../../../src/Code';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    '& code':{
      backgroundColor: '#e5e6eb'
    }
  },
  nodrawercontent: {
    width: '100%',
    '& code':{
      backgroundColor: '#e5e6eb'
    }
  }
}));

const components ={
  code: Code
}

const BlogTemplate = (props) => {

  const post = getPost(props.id)
  const Content = post.Doc;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Banner language={router.pathname.substring(1,4) == 'en/' ? 'en' : 'es'}/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Banner language={router.pathname.substring(1,4) == 'en/' ? 'en' : 'es'}/>
          </Drawer>
        </Hidden>
      </nav>
      <Hidden smUp implementation="css" className={classes.nodrawercontent}>
        <main>
          <Box mx={8} my={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              {post.title}
            </Typography>
            <MDXProvider components={components}>
              <Content/>
            </MDXProvider>
          </Box>
        </main>
      </Hidden>
      <Hidden xsDown implementation="css" className={classes.content}>
        <main>
          <Box mx={8} my={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              {post.title}
            </Typography>
            <MDXProvider components={components}>
              <Content/>
            </MDXProvider>
          </Box>
        </main>
      </Hidden>
    </div>
  )
};

BlogTemplate.getInitialProps = async function(context) {
  return { id: context.query.slug }
};

export default BlogTemplate;