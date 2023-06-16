import React from 'react';
import styled from 'styled-components';
import { ChartLayout } from './ChartLayout.style';
import ChartTitle from './ChartTitle';
import image from '../../assets/turtle_temperature.png';
import HelpIcon from '@mui/icons-material/Help';
import { SvgIcon } from '@mui/material';

const Temperature = () => {
  return (
    <TemperatureLayout>
      <TitleContainer>
        <ChartTitle title="거북이 온도(Total)" />
        <SvgIcon
          component={HelpIcon}
          color="disabled"
          sx={{ m: 0, fontSize: 20 }}
        />
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
  margin: 0 2rem 0 2rem;
  flex-grow: 1;
`;

const TitleContainer = styled.div`
  display: flex;
  width: max-content;
  justify-content: start;
`;

const Image = styled.img`
  width: 10.8rem;
  align-self: center;
  height: 10rem;
  margin-top: 1rem;
  padding: 0rem;
`;
