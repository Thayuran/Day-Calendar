import React from 'react';
import {
  MuiPickersUtilsProvider,
  DatePicker as MaterialDatePicker,
} from '@material-ui/pickers';
import Day from './components/Day';
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = ({ value, onChange }) => {
  const handleDateChange = (date) => {
    onChange(date);
  };

  return (
    <MaterialDatePicker
      value={value}
      onChange={handleDateChange}
      renderDay={(date, selectedDate, isInCurrentMonth, dayComponent) => (
        <Day date={date} isSelected={selectedDate.isSame(date, 'day')} />
      )}
    />
  );
};

export default DatePicker;