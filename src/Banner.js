import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ToysIcon from '@material-ui/icons/Toys';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import PermMediaIcon from '@material-ui/icons/PermMedia';
// import BlurOnIcon from '@material-ui/icons/BlurOn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ButtonBase from '@material-ui/core/ButtonBase';
import {useState} from 'react';

import logo from './images/dzm.svg';

export default function Banner({ language }){
  const [lan, setLan] = useState(language)
  return(
    <div>
      <ButtonBase
        focusRipple
        href="/"
      >
        <Box m={4}>
          <img src={logo} width="100%"/>
        </Box>
      </ButtonBase>

        <Box mb={3} textAlign="center" fontWeight="fontWeightLight" fontSize="h6.fontSize">
            dario@dazu.ma
        </Box>
      
      <Divider/>
      <List>
        <ListItem button component="a" key={1} href={(lan === 'es' ? '' : '/en') + '/blog'}>
          <ListItemIcon><ChatIcon/></ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button component="a" key={2} href={(lan === 'es' ? '' : '/en') + '/portfolio'}>
          <ListItemIcon><PermMediaIcon/></ListItemIcon>
          <ListItemText primary={lan === 'es' ? "Trabajos" : 'Work'} />
        </ListItem>
        <ListItem button component="a" key={3} href={(lan === 'es' ? '' : '/en') + '/info'}>
          <ListItemIcon><InfoIcon/></ListItemIcon>
          <ListItemText primary="Info" />
        </ListItem>
      </List>
      <Divider/>
      <Box ml={5} mt={3}>
        <IconButton color="inherit" href="https://github.com/dariozubi" target="_blank" rel="noopener">
          <GitHubIcon/>
        </IconButton>
        <IconButton color="inherit" href="https://www.linkedin.com/in/dario-zubillaga" target="_blank" rel="noopener">
          <LinkedInIcon/>
        </IconButton>
        <IconButton color="inherit" href="https://www.shadertoy.com/user/dazuma" target="_blank" rel="noopener">
          <ToysIcon/>
        </IconButton>
      </Box>
    </div>
  )
}