import { useState } from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Vimeo(props){

  const [loading, setLoading] = useState(true);
  const hideLoading = () => { if (loading) setLoading(false);}

	return(
    <Card>
      <CardActionArea href={'https://vimeo.com/'+props.id} target="_blank" rel="noopener">
        <CardHeader
          subheader={props.title}
        />
        {loading ? <Box><Skeleton variant="rect" height={150}/></Box> : null}
        <Box>
          <iframe 
            src={"https://player.vimeo.com/video/"+props.id}
            width={loading ? '0' :'100%'} 
            height={loading ? '0' :'100%'} 
            frameBorder="0" 
            onLoad={hideLoading} 
            allow="autoplay; fullscreen" 
            allowFullScreen>
          </iframe>
        </Box>
        <CardContent>
          <Typography variant="caption" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
	)
}