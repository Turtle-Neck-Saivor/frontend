import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';
import styled from 'styled-components';
import { Line, Scatter } from 'react-chartjs-2';
import * as ss from 'simple-statistics';
import { ChartLayout } from './ChartLayout.style';
import ChartTitle from './ChartTitle';
import { getMonthGraph } from '../../api/graph';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';

type DataPoint = { x: number; y: number };
type DataSet = {
  label: string;
  data: DataPoint[];
  fill: boolean;
  type?: string;
  backgroundColor?: string;
  borderColor?: string;
  pointBackgroundColor?: string;
  pointBorderColor?: string;
  showLine?: boolean;
};
type ChartData = { datasets: DataSet[] };

const RegressionChart = () => {
  const [data, setData] = useState([]);
  const selectMonth = useSelector(
    (state: RootState) => state.graph.selectMonth,
  );
  // const nickname = useSelector((state: RootState) => state.user.nickname);
  const nickname = localStorage.getItem('nickname');

  const getMonthData = async () => {
    let dateToSend = new Date();
    let date = dateToSend.toISOString().split('T')[0];
    const res = await getMonthGraph(nickname, date);
    setData(res.data.infoList);
  };

  const getSelectMonthData = async () => {
    const res = await getMonthGraph(nickname, selectMonth);
    setData(res.data.infoList);
  };

  useEffect(() => {
    getMonthData();
  }, []);

  useEffect(() => {
    getSelectMonthData();
  }, [selectMonth]);

  const [chartData, setChartData] = useState<ChartData>({
    datasets: [
      {
        type: 'scatter',
        label: 'Scatter Dataset',
        data,
        fill: false,
        backgroundColor: '#000000',
        borderColor: '#000000',
      },
      {
        type: 'line',
        label: 'Regression Line Dataset',
        data: [],
        fill: false,
        borderColor: '#17a161',
        showLine: true,
      },
    ],
  });

  useEffect(() => {
    const linearRegression = ss.linearRegression(data.map((d) => [d.x, d.y]));
    const regressionLine = ss.linearRegressionLine(linearRegression);

    const newChartData = data.map((point) => ({
      x: point.x,
      y: regressionLine(point.x),
    }));

    let slope = linearRegression.m;
    setChartData((prev) => ({
      datasets: [
        {
          ...prev.datasets[0],
          data: data,
        },
        {
          ...prev.datasets[1],
          data: newChartData,
        },
      ],
    }));
  }, [data]);

  return (
    <RegressionChartLayout>
      <ChartTitle title="Month" />
      <ChartContainer>
        <Scatter
          width={920}
          height={300}
          data={chartData}
          options={{
            responsive: false,
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: false,
                    min: 1,
                    max: 31,
                    stepSize: 1,
                  },
                },
              ],
              yAxes: [{ beginAtZero: true }],
            },
          }}
        />
      </ChartContainer>
    </RegressionChartLayout>
  );
};

export default RegressionChart;

const RegressionChartLayout = styled(ChartLayout)`
  width: max-content;
  height: 19rem;
  padding: 2rem;
`;

const ChartContainer = styled.div`
  margin: 1rem;
`;
