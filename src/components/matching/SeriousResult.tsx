import React from 'react';
import ResultBox from './ResultBox';
import styled from 'styled-components';

const SeriousResult = () => {
  return (
    <ResultBox color="#bc0c0c">
      자가진단에 따르면 거북목 증후군이 “심각”할 것으로 예상됩니다.
      <br />
      거북목 증후군은 스트레칭과 운동을 통한 목 주변 근육 강화로 자가치료가
      가능하지만, <br />
      전문의와의 상담을 통해 더 효율적인 치료를 권장드립니다.
    </ResultBox>
  );
};

export default SeriousResult;
