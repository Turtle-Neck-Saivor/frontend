import { TextField } from '@mui/material';
import React from 'react';

/**
 * 입력창
 */

interface Props {
  mb: number;
  name: string;
  label: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any; //eslint-disable-line no-unused-vars
}
const Input = (props: Props) => {
  return (
    <>
      <TextField
        sx={{ width: '50%', mb: props.mb }}
        name={props.name}
        required
        label={props.label}
        variant="outlined"
        type={props.type}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
