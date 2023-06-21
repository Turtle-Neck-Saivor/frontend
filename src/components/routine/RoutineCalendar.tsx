import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import './Calendar.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SvgIcon } from '@mui/material';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const RoutineCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());
  return (
    <RoutineCalendarLayout>
      <Calendar
        maxDetail="month"
        formatDay={(locale, date) =>
          new Date(date).toLocaleDateString('en-us', {
            day: '2-digit',
          })
        }
        value={value}
        showNavigation={true}
        onChange={setValue}
        tileContent={({ date, view }) => {
          return (
            <>
              <SvgIcon
                component={CheckCircleIcon}
                sx={{ color: '#A0ECB2', fontSize: '1.2rem', mt: 1 }}
              />
            </>
          );
        }}
      />
    </RoutineCalendarLayout>
  );
};

export default RoutineCalendar;

const RoutineCalendarLayout = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;
