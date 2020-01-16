import Grid from '@material-ui/core/Grid';
import Copyright from './Copyright';

export default function Footer(){
	return(
		<Grid container justify="center">
			<Grid item xs={6}>
				<Copyright/>
			</Grid>
		</Grid>
	)
}