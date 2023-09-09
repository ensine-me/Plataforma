import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { createCalendarEvent } from '../GoogleLoginAgenda';

export default function ResponsiveDateTimePickers() {
    
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DateTimePicker'
        ]}
      >
        <DemoItem>
          <DateTimePicker 
          defaultValue={dayjs('2023-09-09T21:30')} 
          onChange={(createCalendarEvent.setStart)}
          value={createCalendarEvent.start}
          />
        </DemoItem> 
      </DemoContainer>
    </LocalizationProvider>
  );
}