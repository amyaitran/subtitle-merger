import React from 'react';
import StepLabel from '@material-ui/core/StepLabel';
import { withStyles, WithStyles } from '@material-ui/core/styles';

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  className?: string;
}

const styles = {
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // borderRadius: 3,
    // border: 0,
    // color: 'white',
    height: 32,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    border: 99,
    background: 'orange',
  },
};

function ClassNames(props: Props) {
  const { children, ...other } = props;

  return <StepLabel {...other}>{children || 'class names'}</StepLabel>;
}

export default withStyles(styles)(ClassNames);
