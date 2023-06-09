import React, { useState } from 'react';
import styled from 'styled-components';
import DoughnutChart from '../components/report/DoughnutChart';
import WeekBarChart from '../components/report/WeekBarChart';
import RegressionChart from '../components/report/RegressionChart';
import { Button } from '@mui/material';
const ReportPage = () => {
  const [data, setData] = useState([
    { x: 0, y: 6 },
    { x: 1, y: 3 },
    { x: 2, y: 7 },
    { x: 3, y: 2 },
    { x: 4, y: 8 },
    { x: 5, y: 3 },
    { x: 6, y: 9 },
    { x: 7, y: 2 },
    { x: 8, y: 8 },
    { x: 9, y: 3 },
    { x: 10, y: 9 },
  ]);
  const addData = () => {
    const x = data.length + 1;
    const y = Math.floor(Math.random() * 10) + 1;
    const newData = { x, y };
    setData([...data, newData]);
  };
  return (
    <ReportPageLayout>
      <ChartContainer>
        <DoughnutChart />
        <WeekBarChart />
      </ChartContainer>
      <RegressionChart data={data} />
      <Button onClick={addData}>데이터 추가</Button>
    </ReportPageLayout>
  );
};

export default ReportPage;

const ReportPageLayout = styled.div`
  width: 75vw;
  padding: 2rem;
`;

const ChartContainer = styled.div`
  display: flex;
`;
