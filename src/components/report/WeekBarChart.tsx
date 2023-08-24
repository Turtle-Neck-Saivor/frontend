import React, { useEffect, useState } from 'react';
import ChartTitle from './ChartTitle';
import { ChartLayout } from './ChartLayout.style';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { getWeekGraph } from '../../api/graph';
import { RootState } from '../../stores';
import { useSelector } from 'react-redux';

const WeekBarChart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [arrayData, setArrayData] = useState<number[]>(new Array(7).fill(0));
  const nickname = useSelector((state: RootState) => state.user.nickname);

  const getWeekData = async () => {
    setIsLoading(true);
    try {
      const res = await getWeekGraph(nickname);
      setArrayData(Object.values(res.data));
    } catch (error) {
      console.error('Error fetching week rate:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getWeekData();
  }, []);

  const options = {
    responsive: false,
    elements: {
      rectangle: {
        borderWidth: 2,
        borderColor: 'rgb(0, 255, 0)',
        borderSkipped: 'bottom',
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          barThickness: 18,
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20,
          },
        },
      ],
    },
  };

  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        type: 'bar',
        borderWidth: 0,
        borderSkipped: false,
        borderRadius: 50,
        backgroundColor: [
          '#1096a5',
          '#BAEDBD',
          '#C6C7F8',
          '#B1E3FF',
          '#95A4FC',
          '#aafcde',
          '#fcaac5',
        ],
        data: arrayData,
        barThickness: 10,
      },
    ],
  };
  return (
    <BarChartLayout>
      <ChartTitle title="Week" />
      <BarContainer>
        <Bar data={data} options={options} width={545} height={230} />
      </BarContainer>
    </BarChartLayout>
  );
};

export default WeekBarChart;

const BarChartLayout = styled(ChartLayout)`
  padding-left: 1.5rem;
  flex-grow: 20;
`;

const BarContainer = styled.div`
  margin-top: 1rem;
`;
