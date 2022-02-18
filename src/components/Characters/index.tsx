import './styles.scss';
import { FormEvent, RefObject, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchCaracters } from 'services/marvelService';
import { ICharacters } from 'utils/interfaces/characterInterfaces';
import { useContext } from 'hooks/useContext';
import Title from 'components/Title';
import Card from 'components/Card';
import Button from 'components/Button';
import SearchIcon from 'components/icons/SearchIcon';
import Drawer from 'components/Drawer';
import Input from 'components/forms/Input';
import Select from 'components/forms/Select';
import { renderOptions } from './RenderOptions';
import { ESearchAPI } from 'utils/enums/generalEnums';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ICharactersComponent {
  type?: string;
  rel?: string;
}

const Characters = ({ type = 'characters', rel }: ICharactersComponent) => {
  gsap.registerPlugin(ScrollTrigger);
  const characterElement = useRef<null | HTMLDivElement>(null);

  const fetchTypeElement = useRef() as RefObject<HTMLSelectElement>;
  const searchQueryElement = useRef() as RefObject<HTMLInputElement>;
  const limit = 20;
  const [fetchType, setFetchType] = useState<string>(
    ESearchAPI[type as keyof typeof ESearchAPI],
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [offset, setOffset] = useState(0);

  const { data: characterData } = useQuery(
    [
      `marvel-${fetchType}-data${rel ? `-${rel}` : ''}`,
      { fetchType, searchQuery, offset },
    ],
    fetchCaracters,
    {
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    setFetchType(type);
  }, [type]);

  useEffect(() => {
    const element = characterElement.current;
    if (element) {
      // Title
      gsap.fromTo(
        element.querySelector('.section_characters-title'),
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: '-30% 70%',
            end: '10% 70%',
            markers: false,
            scrub: true,
          },
        },
      );

      // Search Button
      gsap.fromTo(
        element.querySelector('.section_characters-info .search'),
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: element,
            start: 'top 70%',
            end: '70% 70%',
            markers: false,
            scrub: true,
          },
        },
      );

      // Actions Prev/ Next Button
      gsap.fromTo(
        element.querySelector('.section_characters-actions'),
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: '15% 70%',
            end: 'bottom 70%',
            markers: false,
            scrub: true,
          },
        },
      );
    }
  }, []);

  const { drawerVisible, setDrawerVisible } = useContext();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    fetchTypeElement?.current?.value &&
      setFetchType(fetchTypeElement?.current?.value);

    searchQueryElement?.current?.value &&
      setSearchQuery(searchQueryElement?.current?.value);
  };

  return (
    <section className="section section_characters" ref={characterElement}>
      <div className="section_container">
        <Title classes="section_characters-title" megaTitle>
          <span>MARVEL</span>
          <span>{fetchType.toUpperCase()}</span>
          <span>LIST</span>
        </Title>
        <Drawer
          title="Search Characters, Comics, Series or Stories"
          visible={drawerVisible}
          position="bottom"
          size="small"
          classes="section_characters-drawer"
        >
          <form onSubmit={(e) => handleSearch(e)}>
            <Select
              classes="section_characters-search_select"
              innerRef={fetchTypeElement}
              defaultValue={fetchType}
            >
              {renderOptions()}
            </Select>
            <Input
              placeholder="Search"
              classes="section_characters-search_input"
              innerRef={searchQueryElement}
            />
            <Button classes="section_characters-search_btn">Search</Button>
          </form>
        </Drawer>
        <div className="section_characters-info">
          <h4 className="searched">{searchQuery ? searchQuery : 'ALL'}</h4>
          <p className="results">{characterData?.data.total} Results</p>
          <div className="search">
            <Button
              classes="section_characters-search-btn"
              handleClick={() => setDrawerVisible(!drawerVisible)}
            >
              <SearchIcon fill="#d84127" />
              <span>Search</span>
            </Button>
          </div>
        </div>
        <div className="section_characters-content">
          <div className="section_characters-actions">
            <Button
              disabled={!offset}
              handleClick={() =>
                setOffset((currentOffset) => currentOffset - limit)
              }
            >
              Prev page
            </Button>
            <Button
              disabled={offset >= characterData?.data.total}
              handleClick={() =>
                setOffset((currentOffset) => currentOffset + limit)
              }
            >
              Next page
            </Button>
          </div>
          {characterData?.results.length > 0 ? (
            characterData?.results.map(
              ({ id, name, title, thumbnail }: ICharacters, i: number) => (
                <Card
                  key={id}
                  id={id}
                  title={name ?? title}
                  thumbnail={thumbnail}
                  url={`/${fetchType}/${id}`}
                  classes={`section_characters-card ${
                    i !== 0 && i % 2 === 0 && i % 6 === 0
                      ? 'section_characters-card-wide'
                      : ''
                  }`}
                />
              ),
            )
          ) : (
            <p className="section_characters-content-no_matches">
              <strong>No matches</strong>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Characters;
