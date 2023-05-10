import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';
import moment from 'moment';
import { red } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';
import styled from 'styled-components';

// const Chart = require('react-chartjs-2').Chart;

const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
};

// const color = Chart.helpers.color;
const data = {
  datasets: [
    {
      label: 'Result Timeline',
      backgroundColor: red,
      borderColor: chartColors.red,
      fill: false,
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
    },
  ],
};

const ChartJSRealtime = () => {
  const resultData = useSelector((state: RootState) => {
    return state.result.resultData;
  });

  const options = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      xAxes: [
        {
          type: 'realtime',
          distribution: 'linear',
          realtime: {
            onRefresh: function (chart) {
              chart.data.datasets[0].data.push({
                x: moment(),
                y: resultData,
              });
            },
            delay: 3000,
            time: {
              displayFormat: 'h:mm',
            },
          },
          ticks: {
            displayFormats: 1,
            maxRotation: 0,
            minRotation: 0,
            stepSize: 1,
            maxTicksLimit: 30,
            minUnit: 'second',
            source: 'auto',
            autoSkip: true,
            callback: function (value) {
              return moment(value, 'HH:mm:ss').format('mm:ss');
            },
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 10,
            max: 20,
          },
        },
      ],
    },
  };

  return (
    <ChartLayout>
      <Line data={data} options={options} />
    </ChartLayout>
  );
};

export default ChartJSRealtime;

const ChartLayout = styled.div`
  width: 60vw;
  display: flex;
  margin: 2rem 0;
`;
