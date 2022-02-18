import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchSingle } from 'services/marvelService';

const Single = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const currentPage = pathname?.split('/')[1];

  const { data: characterData } = useQuery(
    [`marvel-single-${currentPage}-data${id}`, { fetchType: currentPage, id }],
    fetchSingle,
    {
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    console.log(characterData);
  }, [characterData]);

  return (
    <div style={{ minHeight: '50vh' }}>
      <h2>{characterData?.results.name}</h2>
    </div>
  );
};

export default Single;
