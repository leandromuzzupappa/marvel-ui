import './styles.scss';
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
import { FormEvent, RefObject, useRef, useState } from 'react';
import { renderOptions } from './RenderOptions';
import { ESearchAPI } from 'utils/enums/generalEnums';

const Characters = () => {
  const fetchTypeElement = useRef() as RefObject<HTMLSelectElement>;
  const searchQueryElement = useRef() as RefObject<HTMLInputElement>;
  const [fetchType, setFetchType] = useState<string>(ESearchAPI.characters);
  const [searchQuery, setSearchQuery] = useState('');

  // setOffset is unused yet Need to dissable to deploy w/o errors
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [offset, setOffset] = useState(0);

  const { data: characterData } = useQuery(
    [`marvel-${fetchType}-data`, { fetchType, searchQuery, offset }],
    fetchCaracters,
    {
      keepPreviousData: true,
    },
  );
  const { drawerVisible, setDrawerVisible } = useContext();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    fetchTypeElement?.current?.value &&
      setFetchType(fetchTypeElement?.current?.value);

    searchQueryElement?.current?.value &&
      setSearchQuery(searchQueryElement?.current?.value);
  };

  return (
    <section className="section section_characters">
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
          {characterData?.results.map(
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Characters;
