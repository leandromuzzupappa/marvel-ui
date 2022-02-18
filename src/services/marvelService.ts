import { MARVEL_KEYS } from 'utils/constants';
import axios from 'axios';
import { ESearchQueryNames } from 'utils/enums/generalEnums';

type queryKeyType = {
  queryKey: string | any[];
};

export const fetchCaracters = async ({ queryKey }: queryKeyType) => {
  const { fetchType, searchQuery, offset } = queryKey[1];

  const res = await axios.get(
    `https://gateway.marvel.com:443/v1/public/${fetchType}`,
    {
      params: {
        offset,
        ...(searchQuery && {
          [ESearchQueryNames[fetchType as keyof typeof ESearchQueryNames]]:
            searchQuery,
        }),
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

export const fetchSingle = async ({ queryKey }: queryKeyType) => {
  const { fetchType, id } = queryKey[1];

  const res = await axios.get(
    `https://gateway.marvel.com:443/v1/public/${fetchType}/${id}`,
    {
      params: {
        ...MARVEL_KEYS,
      },
    },
  );
  return {
    data: res.data.data,
    results: res.data.data.results[0],
    statusCode: res.data.code,
  };
};
