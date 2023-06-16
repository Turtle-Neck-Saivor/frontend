import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import styled from 'styled-components';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ReportCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <CalendarLayout>
      <Calendar
        maxDetail="year"
        locale="en"
        value={value}
        showNavigation={false}
        onChange={onChange}
      />
    </CalendarLayout>
  );
};

export default ReportCalendar;

const CalendarLayout = styled.div`
  width: 75%;
`;
