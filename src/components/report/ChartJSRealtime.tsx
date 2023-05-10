import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';
import streamingPlugin from 'chartjs-plugin-streaming';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';
import styled from 'styled-components';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.pluginService.register(annotationPlugin, streamingPlugin);

const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
};

const data = {
  datasets: [
    {
      label: 'Result Timeline',
      backgroundColor: chartColors.blue,
      borderColor: chartColors.blue,
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
  const [redPoint, setRedPoint] = useState(0);
  const [yellowPoint, setYellowPoint] = useState(0);

  const options = {};
  if (localStorage.getItem('criticalPoint')) {
    return (
      <ChartLayout>
        <Line
          data={data}
          options={{
            annotation: {
              drawTime: 'afterDatasetsDraw', // (default)
              events: ['click'],
              dblClickSpeed: 350, // ms (default)
              annotations: [
                {
                  drawTime: 'afterDraw',
                  id: 'a-line-1',
                  type: 'line',
                  mode: 'horizontal',
                  scaleID: 'y-axis-0',
                  value: JSON.parse(localStorage.getItem('criticalPoint')).red,
                  borderColor: 'orange',
                  borderWidth: 3,
                },
                {
                  drawTime: 'afterDraw',
                  id: 'a-line-2',
                  type: 'line',
                  mode: 'horizontal',
                  scaleID: 'y-axis-0',
                  value: JSON.parse(localStorage.getItem('criticalPoint'))
                    .yellow,
                  borderColor: 'red',
                  borderWidth: 3,
                },
              ],
            },
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
                    min: 0,
                    max: 20,
                    stepSize: 5,
                  },
                },
              ],
            },
          }}
        />
      </ChartLayout>
    );
  } else {
    return <ChartLayout></ChartLayout>;
  }
};

export default ChartJSRealtime;

const ChartLayout = styled.div`
  width: 60vw;
  display: flex;
  margin: 2rem 0;
`;
