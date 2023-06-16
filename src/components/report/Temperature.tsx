import React from 'react';
import styled from 'styled-components';
import { ChartLayout } from './ChartLayout.style';
import ChartTitle from './ChartTitle';
import image from '../../assets/turtle_temperature.png';

const Temperature = () => {
  return (
    <TemperatureLayout>
      <TitleContainer>
        <ChartTitle title="거북이 온도(Total)" />
      </TitleContainer>
      <Image src={image} />
    </TemperatureLayout>
  );
};

export default Temperature;

const TemperatureLayout = styled(ChartLayout)`
  display: flex;
  width: 25%;
  flex-direction: column;
  padding: 1.3rem 1.5rem;
  margin: 0 4rem 0 2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  width: max-content;
  justify-content: start;
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 10.8rem;
  height: 11rem;
  padding: 0 2rem;
`;
