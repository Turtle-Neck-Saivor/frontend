import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DoughnutChart from '../components/report/DoughnutChart';
import WeekBarChart from '../components/report/WeekBarChart';
import RegressionChart from '../components/report/RegressionChart';
import Temperature from '../components/report/Temperature';
import ReportCalendar from '../components/report/ReportCalendar';
import RecommendStreching from '../components/report/RecommendStretching';
import AlertDialog from '../components/AlertDialog';
import { useNavigate } from 'react-router-dom';
import ReportTitle from '../components/report/ReportTitle';
import { getMonthGraph } from '../api/graph';
import { RootState } from '../stores';
import { useSelector } from 'react-redux';

const ReportPage = () => {
  const navigate = useNavigate();
  const [isDialog, setIsDialog] = useState(false);

  return (
    <ReportPageLayout>
      <AlertDialog
        isDialog={isDialog}
        setIsDialog={setIsDialog}
        title="거북목 자가진단 하러가기"
        description="거북목을 관찰한지 28일이 경과하였습니다.
        거북목 증후군이 의심되어 자가진단이 필요합니다."
        handleAgree={() => {
          navigate('/diagnosis');
        }}
      />
      <ReportTitle setIsDialog={setIsDialog} />
      <ChartContainer>
        <DoughnutChart />
        <WeekBarChart />
      </ChartContainer>
      <RegressionChart />
      <TemperatureLayout>
        <Temperature />
        <ReportCalendar />
      </TemperatureLayout>
      <RecommendStreching />
    </ReportPageLayout>
  );
};

export default ReportPage;

const ReportPageLayout = styled.div`
  width: 75vw;
  padding: 0 3.3rem;
`;

const ChartContainer = styled.div`
  display: flex;
  width: 100%;
`;

const TemperatureLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1rem;
`;
