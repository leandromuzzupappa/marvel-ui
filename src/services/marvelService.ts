import { MARVEL_KEYS } from 'utils/constants';
import axios from 'axios';
import { ESearchQueryNames } from 'utils/enums/generalEnums';

type queryKeyType = {
  queryKey: string | any[];
};

export const fetchCaracters = async ({ queryKey }: queryKeyType) => {
  console.log('service', queryKey);
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
