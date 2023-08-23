import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Doughnut, defaults } from 'react-chartjs-2';
import { ChartLayout } from './ChartLayout.style';
import ChartTitle from './ChartTitle';
import { getDayGraph } from '../../api/graph';
import { RootState } from '../../stores';
import { useSelector } from 'react-redux';

/**
 * Day 도넛 차트
 * TODO: API 연동 후 퍼센트 반영
 */

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = 'bottom';

const DoughnutChart = () => {
  const [rate, setRate] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const nickname = useSelector((state: RootState) => state.user.nickname);
  const getDayRate = async () => {
    setIsLoading(true);
    const res = await getDayGraph(nickname);
    setRate(res.data.portion);
    setIsLoading(false);
  };

  useEffect(() => {
    getDayRate();
  }, []);

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 200).toFixed(2);
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'top';
        var text = `${rate}%`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2.5;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  if (!isLoading)
    return (
      <DoughnutChartLayout>
        <ChartTitle title="Day" />
        <Doughnut
          data={{
            labels: ['straight neck'],
            datasets: [
              {
                label: '# of votes',
                data: [rate, 100 - rate],
                borderRadius: 5,
                offset: 10,
                backgroundColor: ['#5B33CC', '#f3eeff'],
                borderColor: ['#5B33CC', '#f3eeff'],
              },
            ],
          }}
          height={150}
          width={130}
          options={{
            cutoutPercentage: 80,
            maintainAspectRatio: false,
            scales: {
              yAxes: [],
              xAxes: [],
            },
            elements: {
              center: {
                text: '50%', //set as you wish
              },
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
          plugins={plugins}
        />
      </DoughnutChartLayout>
    );
};

export default DoughnutChart;

const DoughnutChartLayout = styled(ChartLayout)`
  flex-grow: 1;
`;
