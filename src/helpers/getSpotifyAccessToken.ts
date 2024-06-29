import axios from 'axios';
import qs from 'qs';

import { CLIENT_ID, CLIENT_SECRET, TOKEN_API_URL } from '@/constants/apiURL';

const getSpotifyAccessToken = async (): Promise<string> => {
  const tokenUrl = TOKEN_API_URL || '';
  const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
    'base64',
  );

  const response = await axios.post(
    tokenUrl,
    qs.stringify({
      grant_type: 'client_credentials',
    }),
    {
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  return response.data.access_token;
};

export default getSpotifyAccessToken;
