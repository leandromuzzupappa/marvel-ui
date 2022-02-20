import './styles.scss';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchSingle } from 'services/marvelService';
import Loading from 'components/Loading';
import Title from 'components/Title';
import { ESearchAPI } from 'utils/enums/generalEnums';
import { ICharacters } from 'utils/interfaces/characterInterfaces';
import ListCards from 'components/ListCards';
import { useContext } from 'hooks/useContext';

const Single = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const currentPage = pathname?.split('/')[1];
  const { data, isError, isLoading, isFetching, isFetched } = useQuery(
    [`marvel-singled-${currentPage}-data${id}`, { fetchType: currentPage, id }],
    fetchSingle,
    {
      keepPreviousData: true,
      useErrorBoundary: (error: any) => error.response?.status >= 500,
    },
  );
  const { loadingPage, setLoadingPage } = useContext();
  const [current, setCurrent] = useState<any[]>([]);
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  //const [stories, setStories] = useState([]);

  useEffect(() => {
    if (data && data?.length > 0) {
      data.forEach((item) => {
        item.idAUX === currentPage && setCurrent(item.data.data.results);
        item.idAUX === ESearchAPI.characters &&
          setCharacters(item.data.data.results);
        item.idAUX === ESearchAPI.comics && setComics(item.data.data.results);
        item.idAUX === ESearchAPI.series && setSeries(item.data.data.results);
        //item.idAUX === ESearchAPI.stories && setStories(item.data.data.results);
      });
    }
  }, [data, isError, isLoading, currentPage]);

  useEffect(() => {
    if (isLoading || isFetching || !isFetched) setLoadingPage(true);
    else setLoadingPage(false);
  }, [isLoading, isFetching, isFetched, setLoadingPage]);

  if (loadingPage) return <Loading />;

  if (isError)
    return (
      <Title megaTitle>
        <span>Hubo un error, recarga la pagina</span>
      </Title>
    );

  return (
    <>
      <section className="single_page-cover">
        <Title megaTitle classes="single_page">
          <span>{current[0]?.name ?? current[0]?.title}</span>
        </Title>
        <div className="single_page-cover-wrapper">
          <img
            src={`${current[0]?.thumbnail.path}.${current[0]?.thumbnail.extension}`}
            alt=""
            className="single_page-cover-image"
          />
          <img
            src={`${current[0]?.thumbnail.path}.${current[0]?.thumbnail.extension}`}
            alt=""
            className="single_page-cover-thumbnail"
          />
        </div>
      </section>
      {current[0]?.description && (
        <section className="single_page-description">
          <Title megaTitle classes="single_page-description-title">
            Description
          </Title>
          <p>{current[0]?.description}</p>
        </section>
      )}

      {current[0]?.comics && current[0]?.comics.available > 0 && (
        <ListCards
          classes="single_page-comics"
          title="Comics"
          data={comics}
          urlBasePath="/comics"
        />
      )}
      {current[0]?.characters && current[0]?.characters.available > 0 && (
        <ListCards
          classes="single_page-comics"
          title="Characters"
          data={characters}
          urlBasePath="/characters"
        />
      )}

      {current[0]?.series && current[0]?.series.available && (
        <section className="section single_page-series">
          <div className="section_container">
            <Title megaTitle>Series</Title>
            <ul className="serie-wrapper">
              {series
                .sort((a: any, b: any) => b?.startYear - a?.startYear)
                .map((item: any) => {
                  return (
                    <li className="serie">
                      <p className="serie-date">
                        {item?.startYear} -- {item?.endYear}
                      </p>
                      <p className="serie-title">{item?.title}</p>
                      <img
                        className="serie-img"
                        src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`}
                        alt={item?.title}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Single;
