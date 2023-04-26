import React from 'react';
import { Button } from '@mui/material';

/**
 * 로그인, 회원가입 버튼
 */

interface Props {
  title: string;
}

const FormButton = (props: Props) => {
  return (
    <Button
      sx={{ width: '50%', mt: 1, backgroundColor: '#4763E4', height: 50 }}
      variant="contained"
      type="submit"
    >
      {props.title}
    </Button>
  );
};

export default FormButton;
