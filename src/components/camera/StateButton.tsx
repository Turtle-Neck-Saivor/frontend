import { useEffect, useState } from 'react';
import { Button, ButtonLayout } from './IsDetectButton';
import styled from 'styled-components';
import { RootState } from '../../stores';
import { useSelector } from 'react-redux';

const StateButton = ({ resultTurtleNeck }: { resultTurtleNeck: string }) => {
  const isDetect = useSelector((state: RootState) => state.camera.isDetect);
  const [status, setStatus] = useState(resultTurtleNeck);
  const [color, setColor] = useState('grey');
  const setButton = () => {
    switch (resultTurtleNeck) {
      case 'GREEN':
        setStatus('정상');
        setColor('green');
        break;
      case 'YELLOW':
        setStatus('주의');
        setColor('yellow');
        break;
      case 'RED':
        setStatus('경고');
        setColor('red');
        break;
      case 'ERROR':
        setStatus('잘못된자세');
        setColor('grey');
        break;
    }
  };
  useEffect(() => {
    if (!isDetect) {
      setStatus('현재 상태');
      setColor('grey');
    } else {
      setButton();
    }
  }, [isDetect]);
  useEffect(() => {
    setButton();
  }, [resultTurtleNeck]);

  return (
    <ButtonLayout>
      <StatusButton boxColor={color}>{status}</StatusButton>
    </ButtonLayout>
  );
};

export default StateButton;

const StatusButton = styled(Button)<{ boxColor: string }>`
  right: 0;
  left: -8rem;
  top: 0;
  font-weight: 700;
  background-color: ${(props) => props.boxColor};
`;
