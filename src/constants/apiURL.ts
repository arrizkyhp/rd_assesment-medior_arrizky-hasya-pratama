export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
export const TOKEN_API_URL = process.env.NEXT_PUBLIC_TOKEN_API_URL;
export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
export const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
export const ENDPOINT = {
  IDENTITY: {
    LOGIN: 'identity/sign-in',
    PROFILE: 'identity/me',
  },
  MASTER: {
    VEHICLE: 'master-data/inventory/vehicle/list',
  },
  POKEMON: 'pokemon',
};
