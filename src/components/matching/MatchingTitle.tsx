import React from 'react';

import PageTitle from '../PageTitle';
import IconButton from '../IconButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ButtonLayout, TitleContainer } from '../report/ReportTitle';

const MatchingTitle = () => {
  return (
    <TitleContainer>
      <PageTitle title="Recommend" />
      <ButtonLayout>
        <IconButton
          bgColor="#5C73DB"
          textColor="white"
          icon={FileDownloadIcon}
          title="Download"
        />
      </ButtonLayout>
    </TitleContainer>
  );
};

export default MatchingTitle;
