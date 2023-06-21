import React from 'react';
import LinkIcon from '@mui/icons-material/Link';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import styled from 'styled-components';
import IconButton from '../IconButton';
import { Link } from 'react-router-dom';

interface Props {
  linkUrl: string;
  guideUrl: string;
}

const TodoButton = ({ linkUrl, guideUrl }: Props) => {
  const handleOpenNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };
  return (
    <ButtonContainer>
      <IconButton
        bgColor="#A09EFD"
        textColor="white"
        title="상세정보"
        icon={LinkIcon}
        fontSize="0.85rem"
        padding="0.3rem"
        onClick={() => handleOpenNewTab(`${linkUrl}`)}
      />
      <Link to={`${guideUrl}`}>
        <IconButton
          bgColor="#BAEDBD"
          textColor="#616161"
          title="가이드라인"
          icon={PhotoCameraFrontIcon}
          fontSize="0.85rem"
          padding="0.3rem"
        />
      </Link>
    </ButtonContainer>
  );
};

export default TodoButton;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
