import React from 'react';
import styled from 'styled-components';
import guide from '../../assets/guide.png';

const Guide = () => {
  return (
    <ImageBox>
      <Image src={guide} />
    </ImageBox>
  );
};

export default Guide;

const ImageBox = styled.div`
  position: absolute;
  display: none;
`;
const Image = styled.img`
  position: relative;
  z-index: 3;
  display: flex;
  margin-left: 13rem;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    margin-left: 4rem;
    width: 90%;
  }
  @media all and (max-width: 767px) {
    margin-left: 3rem;
    width: 85%;
  }
`;
