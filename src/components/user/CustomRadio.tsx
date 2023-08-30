import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';

interface Props {
  mb: number;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any; //eslint-disable-line no-unused-vars
}

const CustomRadio = (props: Props) => {
  return (
    <FormControl sx={{ width: '50%', mb: props.mb, color: 'black' }}>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        sx={{ color: 'black' }}
      >
        <FormControlLabel value="FEMALE" control={<Radio />} label="Female" />
        <FormControlLabel value="MALE" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadio;
