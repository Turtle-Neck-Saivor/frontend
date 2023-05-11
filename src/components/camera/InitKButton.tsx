import React from 'react';
import { ButtonLayout } from './IsDetectButton';
import styled from 'styled-components';
import { initing, set } from '../../stores/cameraSlice';
import store, { RootState } from '../../stores';
import guide from '../../assets/icon_guide.png';
import StartTooltip from './StartTooltip';
import { useSelector } from 'react-redux';

const InitKButton = () => {
  const isIniting = useSelector((state: RootState) => state.camera.isIniting);
  const handleClick = () => {
    store.dispatch(set(true));
    store.dispatch(initing(true));
  };
  if (isIniting) {
    return (
      <ButtonLayout>
        <InitingButton>바른자세 등록</InitingButton>
      </ButtonLayout>
    );
  } else {
    return (
      <ButtonLayout onClick={handleClick}>
        <StartTooltip
          title={
            <React.Fragment>
              <img src={guide} width={300} />
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '1rem',
                  color: 'white',
                }}
              >
                얼굴이 카메라 가운데에 오도록 <br />
                자세를 잡아주세요
              </p>
            </React.Fragment>
          }
        >
          <InitButton>바른자세 등록</InitButton>
        </StartTooltip>
      </ButtonLayout>
    );
  }
};

export default InitKButton;

const InitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -3rem;
  right: -1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 1rem;
  height: 2rem;
  font-weight: 700;
  background-color: #be56ff;
`;

const InitingButton = styled(InitButton)`
  background-color: #686868;
`;
