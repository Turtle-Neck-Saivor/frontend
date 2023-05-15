import React from 'react';
import styled from 'styled-components';
import DoughnutChart from '../components/report/DoughnutChart';

const ReportPage = () => {
  return (
    <ReportPageLayout>
      <DoughnutChart />
    </ReportPageLayout>
  );
};

export default ReportPage;

const ReportPageLayout = styled.div`
  padding: 2rem;
`;
