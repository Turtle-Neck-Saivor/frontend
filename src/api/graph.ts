import axios from 'axios';
import { BASE_URL } from './constant';

export const getDayGraph = async (nickname: string) => {
  try {
    let dateToSend = new Date();
    let date = dateToSend.toISOString().split('T')[0];
    const options = {
      method: 'GET',
      url: `${BASE_URL}/api/v1/health/graphs/day`,
      params: { nickname: nickname, date: date },
    };
    const healthRes = await axios(options);
    return healthRes;
  } catch (error) {
    throw new Error('API getSearchList error');
  }
};
