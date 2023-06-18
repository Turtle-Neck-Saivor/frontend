import React from 'react';
import styled from '@emotion/styled';
import DiagnosisList from '../components/diagnosis/DiagnosisList';
import TextButton from '../components/TextButton';

const DiagnosisPage = () => {
  return (
    <DiagnosisPageLayout>
      <CenterLayout>
        <TitleContainer>
          <DiagnosisTitle>Self-diagnosis</DiagnosisTitle>
          <SubTitle>문항을 읽고 해당하는 항목을 모두 선택해주세요</SubTitle>
        </TitleContainer>
        <DiagnosisList />
        <ButtonContainer>
          <TextButton text="제출하기" color="#5C73DB" />
        </ButtonContainer>
      </CenterLayout>
    </DiagnosisPageLayout>
  );
};

export default DiagnosisPage;

const DiagnosisPageLayout = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterLayout = styled.div`
  width: 45%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

const DiagnosisTitle = styled.h1`
  color: #1f384c;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
`;

const SubTitle = styled.p`
  display: flex;
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  color: #8d929b;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 3rem;
`;
