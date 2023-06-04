import React from 'react';
import { CameraLayout, Layout } from './CameraPage';
import PageTitle from '../components/PageTitle';
import Stretching from '../components/stretching/Stretching';

const StretchingPage = () => {
  return (
    <Layout>
      <CameraLayout>
        <PageTitle title="Stretching Guide" />
        <Stretching />
      </CameraLayout>
    </Layout>
  );
};

export default StretchingPage;
