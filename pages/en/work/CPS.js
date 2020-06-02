import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../../src/Layout';
import cps from '../../../src/images/cps.jpg';
import cps1 from '../../../src/images/cps1.jpg';
import cps2 from '../../../src/images/cps2.jpg';
import cps3 from '../../../src/images/cps3.jpg';
import cps4 from '../../../src/images/cps4.jpg';
import cps5 from '../../../src/images/cps5.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 164,
  },
});

function Text(){
  const classes = useStyles();

  return(
    <React.Fragment>
    <Box mt={8}>
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={cps}
            title="CPS"
          />
      </Card>
    </Box>
    <Box mx={8} my={4}>
      
      <Typography variant="h4" component="h1" gutterBottom>
        CPS software development
      </Typography>
      
      <p>Centricity Practice Solution (CPS) is a clinical software made by GE (now owned by Athena) that allows doctors and nurses see patient's allergies, problems, appointments, etc., in a single place. Usually nurses fill the patient information (name, address, phone, etc.) the first time the patient arrives and after that you can set the values of different variables every time the patient comes to a doctor's visit. To fill this variables you have to use forms. This forms are mainly done with either Visual Form Editor (VFE) or Clinical Forge (CF).</p>
      
      <p>For a little more than two years I built forms for CPS while working in <a href="https://optumus.com/" target="_blank" rel="noopener">Optumus</a>. In the beginning I learnt to use VFE. It is like going back to Windows 95. For a UI focused software it really looks outdated. After learning all the in and outs of CPS and MEL (Medicalogic Expression Language), a really weird programming language, my boss wanted to start building forms with HTML. Clinical Forge does this with an online form editor based on AngularJS. We looked into the code and saw that they use an AngularJS library made by CPS.</p>
      
      <p>Before getting this job I had some experience with JS and jQuery but I didn't know about all these new frameworks. We hired an external developer to show us how could we make our own HTML forms. She recommended us to use Angular since there were a lot of projects that were updated to Angular from AngularJS. None of the other developers knew how to do that so I took the project alone. After some weeks struggling with learning Angular and making it work with CPS, which uses IE10, I finally got to build the first working form.</p>
      
      <p>After that I started building a lot of new forms for different clients with this new custom framework. Usually the clients were impressed by this new forms since all the other ones looked outdated. The forms I made had a better looking design and were able to do things that VFE forms couldn't. One of the key features that made the HTML forms more compelling to customers was that you could write a lot more text in the text areas. And how is that a problem, you may ask. Doctors have to write a lot about their patients, right? Well, the thing is CPS only allows 2000 characters for each variable and if you wanted to store more you had to rely on weird tricks in VFE. That forced the user to click buttons every time they reach the limit. With the Angular framework this was easily done in the background and so the user didn't have to click anywhere to write more than 2000 characters. This was the main trick that brought more customers to the HTML forms, but there were many more things that improved the user experience. Clients could have now more components than before, non-intrusive alerts, animations and even 2D canvas for drawing. This framework is still used to build forms for hundreds of doctors in different locations in the US.</p>
      
      

    </Box>
    </React.Fragment>
  )
}

export default function CPS() {
	return (
		<Layout
      title="CPS software development with MEL"
      description="Software development for Centricity Practice Solution with MEL"
    >
      <Text/>
		</Layout>
	)
}