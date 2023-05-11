import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores';
import { set } from '../../stores/cameraSlice';

const IsDetectButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const dispach = useDispatch();
  const isDetect = useSelector((state: RootState) => state.camera.isDetect);

  if (isDetect) {
    return (
      <ButtonLayout
        onClick={() => {
          dispach(set(false));
        }}
      >
        <Button>
          <StopCircleIcon />
          <Text>Stop</Text>
        </Button>
      </ButtonLayout>
    );
  } else {
    return (
      <>
        <IconLayout
          hover={isHovering}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          onClick={() => {
            dispach(set(true));
          }}
        >
          <Button style={{ backgroundColor: '#1bb21b' }}>
            <PlayCircleFilledIcon />
            <Text>Start</Text>
          </Button>
        </IconLayout>
      </>
    );
  }
};

export default IsDetectButton;

export const ButtonLayout = styled.div`
  position: relative;
  z-index: 30;
  cursor: pointer;
`;

const IconLayout = styled(ButtonLayout)<{ hover: boolean }>`
  ${(props) => (props.hover ? 'red' : 'gray')};
`;

export const Button = styled.div`
  position: absolute;
  top: -3rem;
  right: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: red;
`;

const Text = styled.div`
  margin-left: 0.5rem;
  font-weight: 600;
  color: white;
`;
