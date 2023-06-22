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
    const res = await axios(options);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getWeekGraph = async (nickname: string) => {
  try {
    let dateToSend = new Date();
    let date = dateToSend.toISOString().split('T')[0];
    const options = {
      method: 'GET',
      url: `${BASE_URL}/api/v1/health/graphs/week`,
      params: { nickname: nickname, date: date },
    };
    const res = await axios(options);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getMonthGraph = async (nickname: string, date: string) => {
  try {
    const options = {
      method: 'GET',
      url: `${BASE_URL}/api/v1/health/graphs/month`,
      params: { nickname: nickname, date: date },
    };
    const res = await axios(options);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getYearGraph = async (nickname: string) => {
  try {
    let dateToSend = new Date();
    let date = dateToSend.toISOString().split('T')[0];
    const options = {
      method: 'GET',
      url: `${BASE_URL}/api/v1/health/graphs/year`,
      params: { nickname: nickname, date: date },
    };
    const res = await axios(options);
    return res;
  } catch (error) {
    console.log(error);
  }
};
