import React from 'react';
import CenterLayout from '../components/CenterLayout';
import InputTitle from '../components/user/InputTitle';
import { Link } from 'react-router-dom';
import Division from '../components/Division';
import OtherFormButton from '../components/user/OtherFormButton';
import SignupForm from '../components/user/SignupForm';

const SignupPage = () => {
  return (
    <CenterLayout>
      <InputTitle title="회원가입" />
      <Division />
      <SignupForm />
      <Link to="/login">
        <OtherFormButton title="login" />
      </Link>
    </CenterLayout>
  );
};

export default SignupPage;
