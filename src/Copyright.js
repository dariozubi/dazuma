import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <MuiLink color="inherit" href="https://www.linkedin.com/in/dario-zubillaga">
        <LinkedInIcon fontsize='large'/>
      </MuiLink>
      {'© '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        dazuma
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}