import React, { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import Camera from '../components/camera/Camera';
import IsDetectButton from '../components/camera/IsDetectButton';
import useNotification from '../hooks/useNotification';

const CameraPage = () => {
  const [isDetect, setIsDetect] = useState(false);
  const { fireNotificationWithTimeout } = useNotification();

  const notification = () => {
    fireNotificationWithTimeout('🔔 거북목 경고 알림', {
      body: '자세를 바르게 해주세요',
    });
  };

  useEffect(() => {
    if (isDetect) {
      setTimeout(() => {
        notification();
      }, 5000);
    }
  }, [isDetect]);
  return (
    <>
      <PageTitle title="Camera" />
      <IsDetectButton isDetect={isDetect} setIsDetect={setIsDetect} />
      <Camera isDetect={isDetect} />
    </>
  );
};

export default CameraPage;
