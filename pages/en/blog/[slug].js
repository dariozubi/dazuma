import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MDXProvider } from '@mdx-js/react'

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ToysIcon from '@material-ui/icons/Toys';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import BlurOnIcon from '@material-ui/icons/BlurOn';

import { findDoc, getPost } from '../../../src/blog/content_en'
import Banner from '../../../src/Banner';
import logo from '../../../src/images/logo.png';

import { useRouter } from 'next/router'

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
    flexGrow: 1,
    maxWidth: `calc(100% - ${drawerWidth}px)`,
    '& pre':{
      backgroundColor: '#e5e6eb'
    }
  }
}));

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
      <main className={classes.content}>
        <Box mx={8} my={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            {post.title}
          </Typography>
          <MDXProvider>
            <Content/>
          </MDXProvider>
            </Box>
      </main>
    </div>
  )
};

BlogTemplate.getInitialProps = async function(context) {
  return { id: context.query.slug }
};

export default BlogTemplate;