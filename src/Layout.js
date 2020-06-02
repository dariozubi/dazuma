import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'
import Head from 'next/head'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import MenuIcon from '@material-ui/icons/Menu';

import Banner from './Banner';
import dazuma from './images/dzm.svg'; // >=1200px×630px 1.91:1 <1MB


export function recursiveCloneChildren(children){
  return React.Children.map(children, child => {
    let childProps = {};
    childProps.children = recursiveCloneChildren(child.props.children);
    return React.cloneElement(child, childProps);
  }) 
}

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
  },
}));

export default function ResponsiveDrawer(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const elements = recursiveCloneChildren(props.children);

  const router = useRouter();

  const handleENClick = (e) => {
    e.preventDefault()
    if (router.pathname.substring(1,4) != 'en/'){
      if (router.pathname === '/es/trabajo') router.push('/en/work');
      else router.push('/en'+router.pathname.substring(3));
    }
  }

  const handleESClick = (e) => {
    e.preventDefault()
    if (router.pathname.substring(1,3) == 'en'){
      if (router.pathname === '/en/work') router.push('/es/trabajo');
      else if (router.pathname === '/en') router.push('/');
      else router.push('/es'+router.pathname.substring(3));
    }
  }

  return (
    <div className={classes.root}>

      <Head>
        <title>{props.title ? "dazuma | " + props.title : "dazuma"}</title>

        <link rel="shortcut icon" href={dazuma}/>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={props.description ? props.description : "Darío Zubillaga's personal website. Software done right."} />
        <meta property="og:title" content={props.title ? props.title : "Darío Zubillaga"} />
        <meta property="og:image" content={props.image ? props.image : dazuma} /> 
        <meta property="og:description" content={props.description ? props.description : "Darío Zubillaga's personal website. Software done right."} />
        <meta property="og:url" content={"https://dazu.ma" +router.pathname} />
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="og:type" content={props.type ? props.type : "website"} />
        <meta name="twitter:image:alt" content={props.image_alt ? props.image_alt : "Darío Zubillaga"} />
        <meta property="og:site_name" content="dazuma"/>
        
      </Head>

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
          <Box className={classes.content}></Box>
          <Button color="inherit" onClick={handleESClick}>ES</Button>
          <Button color="inherit" onClick={handleENClick}>EN</Button>

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
            <Banner language={router.pathname === '/' ? 'es' : router.pathname.substring(1,3)}/>
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
            <Banner language={router.pathname === '/' ? 'es' : router.pathname.substring(1,3)}/>
          </Drawer>
        </Hidden>

      </nav>

      <main className={classes.content}>

        <Hidden smUp implementation="css">
          {elements}
        </Hidden>

        <Hidden xsDown implementation="css">
          {elements}
        </Hidden>
        
      </main>
    </div>
  );
}
