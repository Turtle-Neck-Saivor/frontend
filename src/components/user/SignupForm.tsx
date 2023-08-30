import React from 'react';
import useForm from '../../hooks/useForm';
import Input from './Input';
import FormButton from './FormButton';
import { useNavigate } from 'react-router-dom';
import { Form } from './LoginForm';
import { signup } from '../../api/user';
import CustomRadio from './CustomRadio';

const SignupForm = () => {
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {
      emailId: '',
      password: '',
      nickname: '',
      sex: 'FEMALE',
      age: 1,
    },
    onSubmit: async () => {
      const res = await signup(values);
      if (res) {
        navigate('/login');
      }
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        mb={3.5}
        name="nickname"
        label="Nickname"
        type="text"
        onChange={handleChange}
      />
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
      <Input
        mb={3}
        name="age"
        label="Age"
        type="text"
        onChange={handleChange}
      />
      <CustomRadio
        mb={3}
        name="sex"
        value={values.sex}
        onChange={handleChange}
      />
      <FormButton title="Sign up" />
    </Form>
  );
};

export default SignupForm;
