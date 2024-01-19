import React from 'react';
import { Grid, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const renderTimeSlots = (start, end, interval) => {
    const timeSlots = [];
    for (let time = start; time < end; time += interval) {
      timeSlots.push(
        <Grid item xs={2} key={time}>
          <Typography variant="body2" align="center">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Typography>
        </Grid>
      );
    }
    return timeSlots;
  };




const DayWiseCalendar = () => {
    // Define time range and interval
    const startTime = new Date(2023, 0, 1, 6, 30);
    const endTime = new Date(2023, 0, 2, 9, 0);
    const timeInterval = 30; // minutes
  
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">Monday, January 2, 2023</Typography>
            </Grid>
            <Grid item>
              <ChevronLeftIcon />
              <ChevronRightIcon />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {renderTimeSlots(startTime, endTime, timeInterval)}
          </Grid>
        </Grid>
      </Grid>
    );
  };
  
  export default DayWiseCalendar;