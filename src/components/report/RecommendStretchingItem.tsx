import React from 'react';
import StretchingInfo from './StretchingInfo';
import AddRoutine from './AddRoutine';
import PageTitle from '../PageTitle';
import styled from 'styled-components';

interface Props {
  title: string;
  contents: string;
  isCheck: boolean;
  linkUrl: string;
  guideUrl: string;
}
const RecommendStretchingItem = ({
  title,
  contents,
  isCheck,
  linkUrl,
  guideUrl,
}: Props) => {
  return (
    <>
      <StrechingContainer>
        <StretchingInfo
          title={title}
          contents={contents}
          linkUrl={linkUrl}
          guideUrl={guideUrl}
        />
        <AddRoutine isCheck={isCheck} />
      </StrechingContainer>
    </>
  );
};

export default RecommendStretchingItem;

const StrechingContainer = styled.div`
  display: flex;
  width: 100%;
`;
