import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';

import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  code: {
    backgroundColor: '#272c34',
    color: '#fff',
    cursor: 'default'
  }
}));

export default function Code({ children }){
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  }

  const handleClickCopy = (event) => {
    navigator.clipboard.writeText(children.replace(children.split("\n")[0],""))
  }

  return (
    <div className={classes.root}>
      <Grid container justify='flex-start'>
        <Grid item xs={11}>
          <ExpansionPanel expanded={expanded} className={classes.code}>
            <ExpansionPanelSummary onClick={handleClick}>{children.split("\n")[0]}</ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Box my={3} mx={3}>{children.replace(children.split("\n")[0],"")}</Box>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid item xs={1}>
          <Tooltip title="Copy">
            <IconButton onClick={handleClickCopy}>
              <FileCopyIcon/>
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
	)
}