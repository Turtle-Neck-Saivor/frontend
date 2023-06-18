import styled from 'styled-components';
import DiagnosisItem from './DiagnosisItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DiagnosisProps } from '../../types/diagnosis';

const DiagnosisList = () => {
  const [data, setData] = useState<DiagnosisProps[]>();

  useEffect(() => {
    axios.get('/data/diagnosis/diagnosis.json').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <DiagnosisListLayout>
      {data &&
        data.map((data) => <DiagnosisItem key={data.id} text={data.text} />)}
    </DiagnosisListLayout>
  );
};

export default DiagnosisList;

const DiagnosisListLayout = styled.div`
  width: 100%;
  margin: 2rem 0;
`;
