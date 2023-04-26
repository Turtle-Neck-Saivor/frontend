import React from 'react';
import { Box } from '@mui/material';

/**
 * 다른 페이지로의 이동 버튼
 */

interface Props {
  title: string;
}

const OtherFormButton = (props: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        color: '#575DFB',
        mt: 3,
        fontSize: '0.9rem',
      }}
    >
      {props.title}
    </Box>
  );
};

export default OtherFormButton;
