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
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '75vw',
          minHeight: '80vh',
          flexDirection: 'column',
          alginItems: 'center',
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default CenterLayout;
