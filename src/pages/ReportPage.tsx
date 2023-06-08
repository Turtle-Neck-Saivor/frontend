import React from 'react';
import styled from 'styled-components';
import DoughnutChart from '../components/report/DoughnutChart';
import WeekBarChart from '../components/report/WeekBarChart';

const ReportPage = () => {
  return (
    <ReportPageLayout>
      <ChartContainer>
        <DoughnutChart />
        <WeekBarChart />
      </ChartContainer>
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
