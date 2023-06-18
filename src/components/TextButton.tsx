import { Button } from '@mui/material';
import React from 'react';

type Props = {
  color: string;
  text: string;
};
const TextButton = ({ color, text }: Props) => {
  return (
    <Button variant="contained" sx={{ backgroundColor: `${color}` }}>
      {text}
    </Button>
  );
};

export default TextButton;
