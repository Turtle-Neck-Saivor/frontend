import { FormProps } from '../types/user';
import { BASE_URL } from './constant';
import axios from 'axios';

export const signup = async (args: FormProps) => {
  try {
    const options = {
      method: 'POST',
      url: `${BASE_URL}/api/v1/members`,
      data: {
        nickname: args.nickname,
        age: args.age,
        sex: args.sex,
        emailId: args.emailId,
        password: args.password,
      },
    };
    const signupRes = await axios(options);
    if (signupRes.data) {
      return true;
    }
  } catch (e: any) {
    alert('Signup Error - console.log 확인');
    console.log(e);
  }
  return false;
};

export const login = async (args: FormProps) => {
  try {
    const options = {
      method: 'POST',
      url: `${BASE_URL}/api/v1/members/login`,
      data: {
        emailId: args.emailId,
        password: args.password,
      },
    };
    const loginRes = await axios(options);

    if (loginRes.data) {
      return loginRes.data;
    }
  } catch (e: any) {
    alert('이메일 또는 비밀번호가 일치하지 않습니다.');
    console.log(e);
  }
  return false;
};
