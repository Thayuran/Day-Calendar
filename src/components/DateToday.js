import React from 'react';
import { Grid, Typography } from '@mui/material';


function DateToday() {
//  const today = new Date();
//  const formattedDate = today.toLocaleDateString('en-US', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//  });

const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
    day: 'numeric',
});

const typographyStyle = {
    fontSize:'100', 
    color: 'red',
    fontFamily:'TeX Gyre Schola',
    fontWeight: 'bold',
       
  };

 return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100'}}>
      {/* <Typography variant="h4">Today's Date:</Typography> */}
      <Typography variant='h1' style={typographyStyle}>{formattedDate}</Typography>
    </Grid>

    
 );
}

export default DateToday;
