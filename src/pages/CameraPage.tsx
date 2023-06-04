import React, { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import Camera from '../components/camera/Camera';
import IsDetectButton from '../components/camera/IsDetectButton';
import ChartJSRealtime from '../components/report/ChartJSRealtime';
import styled from 'styled-components';
import InitKButton from '../components/camera/InitKButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores';
import { setAllCount, setRedCount, setYellowCount } from '../stores/logSlice';

const CameraPage = () => {
  const dispatch = useDispatch();
  const isInit = useSelector((state: RootState) => {
    return state.camera.isInit;
  });
  const redPoint = useSelector((state: RootState) => {
    return state.result.criticalPointRed;
  });
  useEffect(() => {
    return () => {
      dispatch(setAllCount(true));
      dispatch(setYellowCount(true));
      dispatch(setRedCount(true));
    };
  }, []);

  if (isInit) {
    return (
      <Layout>
        <CameraLayout>
          <PageTitle title="Camera" />
          <IsDetectButton />
          <Camera />
        </CameraLayout>
        {redPoint !== 0 ? (
          <ChartBox>
            <ChartJSRealtime />
          </ChartBox>
        ) : null}
      </Layout>
    );
  } else {
    return (
      <Layout>
        <CameraLayout>
          <PageTitle title="Camera" />
          <InitKButton />
          <Camera />
        </CameraLayout>
        {redPoint !== 0 ? (
          <ChartBox>
            <ChartJSRealtime />
          </ChartBox>
        ) : null}
      </Layout>
    );
  }
};

export default CameraPage;

const ChartBox = styled.div``;

export const Layout = styled.div`
  margin-left: 5rem;
`;

export const CameraLayout = styled.div`
  width: 60vw;
`;
