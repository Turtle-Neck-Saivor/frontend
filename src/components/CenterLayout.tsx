import React from 'react';
import { Box, Container } from '@mui/material';

/**
 * 콘텐츠를 가운데정렬하기 위한 레이아웃 컴포넌트
 */

type WrapperProps = {
  children: React.ReactNode;
};

const CenterLayout = ({ children }: WrapperProps) => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: '80vh',
          flexDirection: 'column',
          my: 3,
          alginItems: 'center',
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default CenterLayout;
