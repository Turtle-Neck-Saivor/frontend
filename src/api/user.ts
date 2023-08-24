import { FormProps } from '../types/user';
import { BASE_URL } from './constant';
import axios from 'axios';
import store from '../stores';
import { setUser } from '../stores/userSlice';

export const signup = async (args: FormProps) => {
  try {
    const options = {
      method: 'POST',
      url: `${BASE_URL}/api/v1/members`,
      data: {
        nickname: args.nickname,
        emailId: args.emailId,
        password: args.password,
      },
    };
    const signupRes = await axios(options);
    if (signupRes.data) {
      localStorage.setItem('nickname', args.nickname);
      return true;
    }
  } catch (e: any) {
    alert('이미 가입된 이메일입니다.');
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
      return true;
    }
  } catch (e: any) {
    alert('이메일 또는 비밀번호가 일치하지 않습니다.');
  }
  return false;
};
