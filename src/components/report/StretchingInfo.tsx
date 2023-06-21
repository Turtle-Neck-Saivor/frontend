import React from 'react';
import styled from 'styled-components';
import LinkIcon from '@mui/icons-material/Link';
import IconButton from '../IconButton';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';

interface Props {
  title: string;
  contents: string;
}

const StretchingInfo = ({ title, contents }: Props) => {
  return (
    <StretchingInfoLayout>
      <TitleContainer>
        <Title>{title}</Title>
        <Subtitle>{contents}</Subtitle>
      </TitleContainer>
      <ButtonContainer>
        <IconButton
          bgColor="#A09EFD"
          textColor="white"
          icon={LinkIcon}
          title="상세정보"
          padding="0.7rem"
        />
        <IconButton
          bgColor="#BAEDBD"
          textColor="#616161"
          icon={PhotoCameraFrontIcon}
          title="가이드라인"
          padding="0.7rem"
        />
      </ButtonContainer>
    </StretchingInfoLayout>
  );
};

export default StretchingInfo;

const StretchingInfoLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 4;
  height: 10rem;
  margin: 2rem 3rem 2rem 2rem;
  border-radius: 0.8rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.17);
`;

const TitleContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.5rem;
`;

const Title = styled.h2`
  margin: 1.5rem 1.8rem 0.3rem;
  font-size: 1.7rem;
  color: #3b3b3b;
`;

const Subtitle = styled.p`
  margin: 0 1.8rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #848484;
`;
