import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';
import styled from 'styled-components';
import { Line, Scatter } from 'react-chartjs-2';
import * as ss from 'simple-statistics';
import { ChartLayout } from './ChartLayout.style';
import ChartTitle from './ChartTitle';

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

const RegressionChart = ({ data }: { data: DataPoint[] }) => {
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
    const regressionLine = ss.linearRegressionLine(
      ss.linearRegression(data.map((d) => [d.x, d.y])),
    );
    const newChartData = data.map((point) => ({
      x: point.x,
      y: regressionLine(point.x),
    }));

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
              x: { type: 'linear' },
              y: { beginAtZero: true },
            },
          }}
        />
      </ChartContainer>
    </RegressionChartLayout>
  );
};

export default RegressionChart;

const RegressionChartLayout = styled(ChartLayout)`
  width: 85%;
  height: 19rem;
`;

const ChartContainer = styled.div`
  margin: 1rem;
`;
