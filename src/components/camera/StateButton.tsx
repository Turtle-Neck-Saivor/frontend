import { useEffect, useState } from 'react';
import { Button, ButtonLayout } from './IsDetectButton';
import styled from 'styled-components';

const StateButton = ({ resultTurtleNeck }: { resultTurtleNeck: string }) => {
  const [status, setStatus] = useState('현재 상태');
  const [color, setColor] = useState('grey');

  useEffect(() => {
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
  left: 0;
  top: 0;
  font-weight: 700;
  background-color: ${(props) => props.boxColor};
`;
