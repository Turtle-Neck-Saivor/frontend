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
  width: fit-content;
  flex-direction: column;
  padding: 1.8rem 1.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const Image = styled.img`
  width: 10.8rem;
  height: 11rem;
  padding: 0 2rem;
`;
