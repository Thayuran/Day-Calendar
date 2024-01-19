import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import dayjs from 'dayjs';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Day = ({ date, isSelected }) => {
  const classes = useStyles();
  const formattedDate = dayjs(date).format('DD');

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="h2">
        {formattedDate}
      </Typography>
      <Button
        variant="contained"
        color={isSelected ? 'primary' : 'default'}
        className={classes.button}
      >
        {isSelected ? 'Selected' : 'Select'}
      </Button>
    </div>
  );
};

export default Day;