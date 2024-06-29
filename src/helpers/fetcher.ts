import axios from 'axios';

import { BASE_API_URL } from '@/constants/apiURL';
import type { FetcherProps } from '@/types/fetcherProps';

import getSpotifyAccessToken from './getSpotifyAccessToken';

const defaultFetcherFn = async <T>(options: FetcherProps<T>): Promise<T> => {
  const instance = axios.create();

  const {
    url,
    data,
    normalizer,
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method = 'get',
    params,
  } = options || {};

  const token = await getSpotifyAccessToken();
  headers.Authorization = `Bearer ${token}`;

  return instance<T>({
    baseURL: BASE_API_URL,
    data,
    headers,
    method,
    params,
    url,
  }).then((response) => {
    const dataRes = response.data;
    if (typeof normalizer === 'function') {
      return normalizer(dataRes);
    }
    return dataRes;
  });
};

export default defaultFetcherFn;
