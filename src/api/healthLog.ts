import axios, { AxiosError } from 'axios';
import { HealthProps } from '../types/healthLog';
import { BASE_URL } from './constant';

export const setHealth = async (args: HealthProps) => {
  try {
    let dateToSend = new Date();
    let date = dateToSend.toISOString().split('T')[0];
    const options = {
      method: 'POST',
      url: `${BASE_URL}/api/v1/health`,
      data: {
        nickname: args.nickname,
        redCnt: args.redCnt,
        yellowCnt: args.yellowCnt,
        totalCnt: args.totalCnt,
        greenCnt: args.greenCnt,
        date: date,
      },
    };
    const healthRes = await axios(options);
    if (healthRes) {
      return true;
    }
  } catch (e) {
    alert('다시 시도해주세요');
  }
  return false;
};
