import React from 'react';
import useForm from '../../hooks/useForm';
import Input from './Input';
import FormButton from './FormButton';
import { useNavigate } from 'react-router-dom';
import { Form } from './LoginForm';

const SignupForm = () => {
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '', name: '' },
    onSubmit: async () => {
      navigate('/');
    },
  });
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Input
        mb={3.5}
        name="email"
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
      <FormButton title="Sign up" />
    </Form>
  );
};

export default SignupForm;
