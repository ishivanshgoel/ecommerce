import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// components
import AppBarCustom from '../../Components/AppBarCustom'
import DisplayCount from '../../Components/DispalyCount/DisplayCount'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  displayCount: {
  
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div>
      <AppBarCustom />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid className={classes.displayCount} item xs={12} sm={3}>
            <DisplayCount count={1} text={'Customers'} />
          </Grid>
          <Grid className={classes.displayCount} item xs={12} sm={3}>
            <DisplayCount count={22} text={'Orders'} />
          </Grid>
          <Grid className={classes.displayCount} item xs={12} sm={3}>
            <DisplayCount count={6} text={'Products'} />
          </Grid>
          <Grid className={classes.displayCount} item xs={12} sm={3}>
            <DisplayCount count={0} text={'Claims'} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}



export default Home