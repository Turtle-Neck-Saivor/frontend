import { Button } from '@mui/material';
import React from 'react';

type Props = {
  color: string;
  text: string;
  onClick?: () => void;
};
const TextButton = ({ color, text, onClick }: Props) => {
  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: `${color}` }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default TextButton;
