import React from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import Input from './Input';
import FormButton from './FormButton';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/user';

const LoginForm = () => {
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: { emailId: '', password: '' },
    onSubmit: async () => {
      const res = await login(values);
      if (res) {
        navigate('/');
      }
    },
  });
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Input
        mb={3.5}
        name="emailId"
        label="Email Address"
        type="email"
        onChange={handleChange}
      />
      <Input
        mb={3}
        name="password"
        label="Password"
        type="password"
        onChange={handleChange}
      />
      <FormButton title="Login" />
    </Form>
  );
};

export default LoginForm;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
