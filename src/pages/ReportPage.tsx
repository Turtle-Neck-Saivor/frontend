import React, { useState } from 'react';
import styled from 'styled-components';
import DoughnutChart from '../components/report/DoughnutChart';
import WeekBarChart from '../components/report/WeekBarChart';
import RegressionChart from '../components/report/RegressionChart';
import { Button } from '@mui/material';
import Temperature from '../components/report/Temperature';
import ReportCalendar from '../components/report/ReportCalendar';
import RecommendStreching from '../components/report/RecommendStretching';
import PageTitle from '../components/PageTitle';
import AlertDialog from '../components/AlertDialog';
import { useNavigate } from 'react-router-dom';

const ReportPage = () => {
  const navigate = useNavigate();
  const [isDialog, setIsDialog] = useState(false);
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
      <AlertDialog
        isDialog={isDialog}
        setIsDialog={setIsDialog}
        title="거북목 자가진단 하러가기"
        description="거북목을 관찰한지 28일이 경과하였습니다. \n
        거북목 증후군이 의심되어 자가진단이 필요합니다."
        handleAgree={() => {
          navigate('/diagnosis');
        }}
      />
      <TitleContainer>
        <PageTitle title="Report" />
        <ButtonLayout>
          <Button
            variant="contained"
            sx={{ height: '2rem', background: '#5C73DB' }}
            onClick={() => setIsDialog(true)}
          >
            자가진단
          </Button>
        </ButtonLayout>
      </TitleContainer>
      <ChartContainer>
        <DoughnutChart />
        <WeekBarChart />
      </ChartContainer>
      <RegressionChart data={data} />
      <Button onClick={addData}>데이터 추가</Button>
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

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 2.5rem 0 0;
`;
