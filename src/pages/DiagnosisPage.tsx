import React, { useState } from 'react';
import styled from '@emotion/styled';
import DiagnosisList from '../components/diagnosis/DiagnosisList';
import TextButton from '../components/TextButton';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../stores';
import { useDispatch, useSelector } from 'react-redux';
import AlertDialog from '../components/AlertDialog';

const DiagnosisPage = () => {
  const navigate = useNavigate();
  const [isZero, setIsZero] = useState(false);
  const turtleItemCount = useSelector(
    (state: RootState) => state.diagnosis.turtleItem,
  );
  const discItemCount = useSelector(
    (state: RootState) => state.diagnosis.discItem,
  );

  const handleClick = () => {
    if (discItemCount === 0 && turtleItemCount === 0) setIsZero(true);
    else {
      const isDiscValue = discItemCount >= turtleItemCount;
      navigate('/matching', {
        state: {
          isDisc: isDiscValue,
        },
      });
    }
  };

  return (
    <DiagnosisPageLayout>
      {isZero ? (
        <AlertDialog
          title="의심 증상이 발견되지 않았습니다"
          description="28일 후 자가진단 테스트 알림을 통해 다시 진단을 시도해주세요"
          handleAgree={() => {
            navigate('/report');
          }}
          isDialog={isZero}
          setIsDialog={setIsZero}
        />
      ) : null}
      <CenterLayout>
        <TitleContainer>
          <DiagnosisTitle>Self-diagnosis</DiagnosisTitle>
          <SubTitle>문항을 읽고 해당하는 항목을 모두 선택해주세요</SubTitle>
        </TitleContainer>
        <DiagnosisList />
        <ButtonContainer>
          <TextButton text="제출하기" color="#5C73DB" onClick={handleClick} />
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
  padding-bottom: 2rem;
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
