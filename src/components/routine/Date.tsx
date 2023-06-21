import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

/**
 * 현재 날짜 컴포넌트
 * 날짜가 변경될 떄마다 업데이트
 */

const Date = () => {
  const [date, setDate] = useState('');
  const formattedDate = moment().format('MM/DD');

  useEffect(() => {
    setDate(formattedDate);
  }, [formattedDate]);

  return <DateLayout>{date}</DateLayout>;
};

export default Date;

const DateLayout = styled.p`
  margin-bottom: 0;
  font-size: 1.1rem;
  color: black;
`;
