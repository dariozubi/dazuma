import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ButtonBase from '@material-ui/core/ButtonBase';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import PermMediaIcon from '@material-ui/icons/PermMedia';

import logo from './images/dzm.svg';

export default function Banner({ language }){
  
  return(
    <div>
      <ButtonBase
        focusRipple
        href={language === 'es' ? '/' : '/en'}
      >
        <Box mx={4} mt={4} mb={2}>
          <img src={logo} width="100%"/>
        </Box>
      </ButtonBase>

        <Box mb={3} textAlign="center" fontWeight="fontWeightLight" fontSize="h4.fontSize">
          Darío Zubillaga
        </Box>

        <Box my={3} textAlign="center" fontWeight="fontWeightLight" fontSize="h6.fontSize">
          dario@dazu.ma
        </Box>
      
      <Divider/>
      <List>
        <ListItem button component="a" key={1} href={'/' + language + '/blog'}>
          <ListItemIcon><ChatIcon/></ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button component="a" key={2} href={(language === 'es' ? '/es/trabajo' : '/en/work')}>
          <ListItemIcon><PermMediaIcon/></ListItemIcon>
          <ListItemText primary={language === 'es' ? "Trabajo" : 'Work'} />
        </ListItem>
        <ListItem button component="a" key={3} href={'/' + language +  '/info'}>
          <ListItemIcon><InfoIcon/></ListItemIcon>
          <ListItemText primary="Info" />
        </ListItem>
      </List>
      <Divider/>
      <Box ml={5} mt={3}>
        <IconButton color="inherit" href="mailto:dario@dazu.ma" target="_blank" rel="noopener">
          <MailOutlineIcon/>
        </IconButton>
        <IconButton color="inherit" href="https://github.com/dariozubi" target="_blank" rel="noopener">
          <GitHubIcon/>
        </IconButton>
        <IconButton color="inherit" href="https://www.linkedin.com/in/dario-zubillaga" target="_blank" rel="noopener">
          <LinkedInIcon/>
        </IconButton>
      </Box>
    </div>
  )
}