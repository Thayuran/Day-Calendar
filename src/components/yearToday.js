import React from 'react';
import { Grid, Typography } from '@mui/material';


function YearToday() {
const today = new Date();
const formattedyear = today.toLocaleDateString('en-US', {
    year: 'numeric',
});

const typographyStyle = {
     
    color: 'blue',
    fontWeight: 'bold',
    fontFamily:'TeX Gyre Schola',
  };

 return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100'}}>
      {/* <Typography variant="h4">Today's Date:</Typography> */}
      <Typography variant='h1' style={typographyStyle}>{formattedyear}</Typography>
    </Grid>

    
 );
}

export default YearToday;
