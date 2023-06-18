import DiagnosisItem from './DIagnosisItem';
import styled from 'styled-components';

const DiagnosisList = () => {
  return (
    <DiagnosisListLayout>
      <DiagnosisItem />
      <DiagnosisItem />
      <DiagnosisItem />
    </DiagnosisListLayout>
  );
};

export default DiagnosisList;

const DiagnosisListLayout = styled.div`
  width: 100%;
  margin: 2rem 0;
`;
