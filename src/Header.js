import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { useRouter } from 'next/router'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import BlurOnIcon from '@material-ui/icons/BlurOn';

export default function Header(){

  const router = useRouter();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="space-around">
          <Grid item>
            <Button startIcon={<HomeIcon/>} color="inherit" href="/">Inicio</Button>
          </Grid>
          <Grid item>
            <Button startIcon={<InfoIcon/>} color="inherit" href="/info">Info</Button>
          </Grid>
          <Grid item>
            <Button startIcon={<PermMediaIcon/>} color="inherit" href="/portfolio">Trabajos</Button>
          </Grid>
          <Grid item>
            <Button startIcon={<ChatIcon/>} color="inherit" href="/blog">Blog</Button>
          </Grid>
          <Grid item xs={1}>
            <Button startIcon={<BlurOnIcon/>} color="inherit" href={router.pathname}>Proyectos</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
