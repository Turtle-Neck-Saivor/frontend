import axios, { AxiosError } from 'axios';
import { HealthProps } from '../types/healthLog';
import { BASE_URL } from './constant';

export const setHealth = async (dateArray: HealthProps[]) => {
  try {
    const options = {
      method: 'POST',
      url: `${BASE_URL}/api/v1/health`,
      data: dateArray,
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
