import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ToysIcon from '@material-ui/icons/Toys';

export default function Footer(){
	return(
		<Grid container justify="center" alignItems="center">
{/*      <Grid item xs={1}>
        <IconButton color="inherit" href="https://github.com/dariozubi" target="_blank" rel="noopener">
          <GitHubIcon/>
        </IconButton>
        <IconButton color="inherit" href="https://www.linkedin.com/in/dario-zubillaga" target="_blank" rel="noopener">
          <LinkedInIcon/>
        </IconButton>
        <IconButton color="inherit" href="https://www.shadertoy.com/user/dazuma" target="_blank" rel="noopener">
          <ToysIcon/>
        </IconButton>
      </Grid>*/}
			<Grid item xs={6}>
        <Divider variant="middle"/>
				<Typography variant="body2" color="textSecondary" align="center">
          {'© '}
          <MuiLink color="inherit" href="https://material-ui.com/">
            dazuma
          </MuiLink>{' '}
          {new Date().getFullYear()}
          {'.'}
      </Typography>
			</Grid>
		</Grid>
	)
}