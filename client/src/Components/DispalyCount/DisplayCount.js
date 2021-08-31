import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 14,
  },
  title1: {
    fontSize: 30
  }
});

export default function DispalyCount({text, count}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title1}>
          {count}
        </Typography>
        <Typography className={classes.title}>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View All</Button>
      </CardActions>
    </Card>
  );
}