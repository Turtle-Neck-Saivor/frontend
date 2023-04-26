import React, { useEffect, useState } from 'react';
import { FormProps } from '../types/user';

const useForm = ({ initialValues, onSubmit }: any) => {
  const [values, setValues] = useState<FormProps>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
