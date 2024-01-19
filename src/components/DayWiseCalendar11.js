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