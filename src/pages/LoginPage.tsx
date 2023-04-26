import React from 'react';
import CenterLayout from '../components/CenterLayout';
import InputTitle from '../components/user/InputTitle';
import LoginForm from '../components/user/LoginForm';
import { Link } from 'react-router-dom';
import Division from '../components/Division';
import OtherFormButton from '../components/user/OtherFormButton';

const LoginPage = () => {
  return (
    <CenterLayout>
      <InputTitle title="로그인" />
      <Division />
      <LoginForm />
      <Link to="/signup">
        <OtherFormButton title="Sign up" />
      </Link>
    </CenterLayout>
  );
};

export default LoginPage;
