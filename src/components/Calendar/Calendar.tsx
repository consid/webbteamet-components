import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './calendar.css';

interface CalendarProps {}

export const Calendar = ({ ...props }: CalendarProps) => {
  const [selected, setSelected] = useState<Date>();
  let footer = <p>Please pick a day.</p>;

  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

  return (
    <DayPicker
      mode='single'
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      className='con-calendar'
    />
  );
};
