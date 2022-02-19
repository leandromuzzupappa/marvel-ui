import { MARVEL_KEYS } from 'utils/constants';
import axios from 'axios';
import {
  ESearchQueryNames,
  ESearchAPI,
  ESingleComic,
  ESingleSerie,
  ESingleStorie,
} from 'utils/enums/generalEnums';
import { getKeysFromEnum } from 'utils/enumUtils';

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

  const basePath = `https://gateway.marvel.com:443/v1/public/${fetchType}/${id}`;
  const endpoints = getKeysFromEnum(
    fetchType === ESearchAPI.characters
      ? ESearchAPI
      : fetchType === ESearchAPI.comics
      ? ESingleComic
      : fetchType === ESearchAPI.series
      ? ESingleSerie
      : fetchType === ESearchAPI.stories
      ? ESingleStorie
      : '',
  ).map((path) => (path !== fetchType ? `${basePath}/${path}` : basePath));

  let aa = await axios
    .all(
      endpoints.map((endpoint) =>
        axios.get(endpoint, {
          params: {
            ...MARVEL_KEYS,
          },
        }),
      ),
    )
    .then((data) => {
      const newData = data.map((item) => {
        let idAUX: string = '';
        const configUrl = item?.config?.url?.split('/');

        if (configUrl) {
          idAUX = configUrl.length === 8 ? configUrl[7] : fetchType;
        }

        return {
          ...item,
          results: item?.data.data.results,
          idAUX,
        };
      });

      return newData;
    });

  return aa;
};
