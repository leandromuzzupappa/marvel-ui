import './styles.scss';
import { useQuery } from 'react-query';
import { fetchCaracters } from 'services/marvelService';
import { ICharacters } from 'utils/interfaces/characterInterfaces';
import Title from 'components/Title';
import Card from 'components/Card';
import Button from 'components/Button';
import SearchIcon from 'components/icons/SearchIcon';
import Drawer from 'components/Drawer';
import { useContext } from 'hooks/useContext';

const Characters = () => {
  const { data: characterData } = useQuery(['offset', 0], fetchCaracters, {
    keepPreviousData: true,
  });
  const { drawerVisible, setDrawerVisible } = useContext();

  return (
    <section className="section section_characters">
      <div className="section_container">
        <Title classes="section_characters-title" megaTitle>
          <span>MARVEL</span>
          <span>CHARACTERS</span>
          <span>LIST</span>
        </Title>
        <Drawer
          title="Buscar personaje"
          visible={drawerVisible}
          position="bottom"
          size="small"
        >
          <h1>lenny</h1>
        </Drawer>
        <div className="section_characters-info">
          <h4 className="searched">All</h4>
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
            ({ id, name, thumbnail }: ICharacters, i: number) => (
              <Card
                key={id}
                id={id}
                title={name}
                thumbnail={thumbnail}
                url={`/characters/${id}`}
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
