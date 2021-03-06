import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface Props {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  })
);

export default function UploadButtons(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept=".srt"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={props.onChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}
