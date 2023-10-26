import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function ResponsiveDateTimePickers({onChange, value}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DateTimePicker'
        ]}
      >
        <DemoItem>
          <DateTimePicker
          onChange={onChange}
          value={value}
          />
        </DemoItem> 
      </DemoContainer>
    </LocalizationProvider>
  );
}