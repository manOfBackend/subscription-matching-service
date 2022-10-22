import axios, { AxiosInstance } from 'axios';

export const apiInstance: AxiosInstance = axios.create({
	baseURL: `${process.env.BASE_URL_API}`,
});
