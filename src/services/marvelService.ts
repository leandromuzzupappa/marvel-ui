import { MARVEL_KEYS } from 'utils/constants';
import axios from 'axios';

type queryKeyType = {
  queryKey: string | (string | number)[];
};

export const fetchCaracters = async ({ queryKey }: queryKeyType) => {
  const res = await axios.get(
    'https://gateway.marvel.com:443/v1/public/characters',
    {
      params: {
        [queryKey[0]]: queryKey[1],
        ...MARVEL_KEYS,
      },
    },
  );
  return {
    data: res.data.data,
    results: res.data.data.results,
    statusCode: res.data.code,
  };
};
