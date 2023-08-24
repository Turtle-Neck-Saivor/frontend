import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setMonth } from '../../stores/graphSlice';
import { RootState } from '../../stores';
import { getYearGraph } from '../../api/graph';
import { monthMap } from '../../data/monthMap';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ReportCalendar = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [value, onChange] = useState<Value>(new Date());
  const selectMonth = useSelector(
    (state: RootState) => state.graph.selectMonth,
  );
  // const nickname = useSelector((state: RootState) => state.user.nickname);

  const getYearData = async () => {
    const nickname = localStorage.getItem('nickname');
    const res = await getYearGraph(nickname);
    const convertedData = [];
    for (let key in res.data) {
      convertedData[monthMap[key]] = res.data[key];
    }
    setData(convertedData);
  };

  useEffect(() => {
    if (value instanceof Array) {
      value.forEach((date) => {
        if (date instanceof Date) {
          const year = date.getFullYear();
          const month = date.getMonth() + 1; // 월에 1을 더함
          const day = date.getDate();
          dispatch(
            setMonth(
              `${year}-${month < 10 ? '0' + month : month}-${
                day < 10 ? '0' + day : day
              }`,
            ),
          );
        }
      });
    } else if (value instanceof Date) {
      const year = value.getFullYear();
      const month = value.getMonth() + 1; // 월에 1을 더함
      const day = value.getDate();
      dispatch(
        setMonth(
          //월과 일이 한 자릿수일 때 앞에 0을 추가하여 두 자릿수 형식을 유지
          `${year}-${month < 10 ? '0' + month : month}-${
            day < 10 ? '0' + day : day
          }`,
        ),
      );
    }
  }, [value]);

  useEffect(() => {
    getYearData();
  }, []);

  return (
    <CalendarLayout>
      <Calendar
        maxDetail="year"
        locale="en"
        value={value}
        showNavigation={false}
        onChange={onChange}
        tileClassName={({ date, view }) =>
          view === 'year' ? `month-${data[date.getMonth() + 1]}` : null
        }
      />
    </CalendarLayout>
  );
};

export default ReportCalendar;

const CalendarLayout = styled.div`
  width: 75%;
  margin-left: 2rem;
  flex-grow: 13;
`;
