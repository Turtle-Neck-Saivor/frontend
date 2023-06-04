import React from 'react';
import styled from 'styled-components';
import { Doughnut, defaults } from 'react-chartjs-2';

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = 'bottom';

const DoughnutChart = () => {
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
        var text = '12%',
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2.5;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <ChartLayout>
      <Doughnut
        data={{
          labels: ['Red', 'Blue'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 88],
              backgroundColor: ['#5B33CC', '#f3eeff'],
              borderColor: ['#5B33CC', '#f3eeff'],
            },
          ],
        }}
        height={300}
        width={500}
        options={{
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
              fontSize: 25,
            },
          },
        }}
        plugins={plugins}
      />
    </ChartLayout>
  );
};

export default DoughnutChart;

const ChartLayout = styled.div`
  width: 60vw;
  display: flex;
  margin: 2rem 0;
`;
