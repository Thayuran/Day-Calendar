import React from 'react';
import { Grid, Typography } from '@mui/material';


function MonthToday() {
const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
    month: 'numeric',
});

const typographyStyle = {
    fontSize:'100', 
    color: 'green',    
    fontWeight: 'bold',
    fontFamily:'TeX Gyre Schola',
  };

 return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100'}}>
      {/* <Typography variant="h4">Today's Date:</Typography> */}
      <Typography variant='h1' style={typographyStyle}>{formattedDate}</Typography>
    </Grid>

    
 );
}

export default MonthToday;
