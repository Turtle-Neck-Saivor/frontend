import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import './Calendar.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SvgIcon } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDateTodos } from '../../stores/routineSlice';
import { RootState } from '../../stores';
import { SelectedTodo } from '../../types/routine';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type Todos = Record<string, SelectedTodo>;

const RoutineCalendar = () => {
  const selectedDateTodos = useSelector(
    (state: RootState) => state.routine.todo,
  );
  const [value, setValue] = useState<Value>(new Date());
  const [todos, setTodos] = useState<Todos>({});
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = localStorage.getItem('calendarTodos');
    if (storedTodos) {
      const todosFromStorage = JSON.parse(storedTodos);
      setTodos(todosFromStorage);
      const todayString = new Date().toISOString().split('T')[0];
      const todayTodos = todosFromStorage[todayString];

      if (todayTodos) {
        dispatch(setSelectedDateTodos(todayTodos));
      } else {
        dispatch(
          setSelectedDateTodos({
            checkedStates: [false, false, false, false],
            rate: 0,
          }),
        );
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (value instanceof Date) {
      const dateString = value.toISOString().split('T')[0];
      dispatch(
        setSelectedDateTodos(
          todos[dateString] || {
            checkedStates: [false, false, false, false],
            rate: 0,
          },
        ),
      );
    }
  }, [todos, value, dispatch]);

  useEffect(() => {
    if (value instanceof Date) {
      const dateString = value.toISOString().split('T')[0];
      setTodos((prev) => {
        const newTodos = { ...prev, [dateString]: selectedDateTodos };
        localStorage.setItem('calendarTodos', JSON.stringify(newTodos));
        return newTodos;
      });
    }
  }, [selectedDateTodos, value]);

  const handleDayClick = (date: Date) => {
    const dateString = date.toISOString().split('T')[0]; // 'YYYY-MM-DD' format
    const storedTodos = localStorage.getItem('calendarTodos');
    let selectedTodo;
    if (storedTodos) {
      const todosFromStorage = JSON.parse(storedTodos);
      selectedTodo = todosFromStorage[dateString];
    }
    dispatch(
      setSelectedDateTodos(
        selectedTodo || {
          checkedStates: [false, false, false, false],
          rate: 0,
        },
      ),
    );
  };

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
        onClickDay={handleDayClick}
        tileContent={({ date, view }) => {
          const dateString = date.toISOString().split('T')[0];
          return todos[dateString]?.rate === 100 ? (
            <SvgIcon
              component={CheckCircleIcon}
              sx={{ color: '#0fcb3b', fontSize: '1.2rem', mt: 1 }}
            />
          ) : (
            <SvgIcon
              component={CheckCircleIcon}
              sx={{ color: '#c8c8c8', fontSize: '1.2rem', mt: 1 }}
            />
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
