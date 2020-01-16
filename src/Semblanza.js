import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Texto from "../text/semblanza.md"
import Grid from '@material-ui/core/Grid';

export default function Semblanza(){
	return (
    <Box mt={3}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dar&iacute;o Zubillaga Mart&iacute;n
      </Typography>
      <Texto/>
    </Box>
  )
}
