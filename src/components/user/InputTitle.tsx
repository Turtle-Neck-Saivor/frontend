import React from 'react';
import { Box } from '@mui/material';

/**
 * 로그인 및 회원가입 입력창 상단 제목
 */

interface Props {
  title: string;
}

const InputTitle = (props: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1.8rem',
        mb: 4,
        color: '#222222',
      }}
    >
      {props.title}
    </Box>
  );
};

export default InputTitle;
