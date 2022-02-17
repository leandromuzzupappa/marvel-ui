import './styles.scss';

import { useQuery } from 'react-query';
import { fetchCaracters } from 'services/marvelService';
import Title from 'components/Title';
import { ICharacters } from 'utils/interfaces/characterInterfaces';
import Card from 'components/Card';
import { useEffect } from 'react';

const Characters = () => {
  const { data: characterData } = useQuery(['offset', 0], fetchCaracters, {
    keepPreviousData: true,
  });

  useEffect(() => {
    console.log(characterData);
  }, [characterData]);

  return (
    <section className="section section_characters">
      <div className="section_container">
        <Title classes="section_characters-title" megaTitle>
          <span>MARVEL</span>
          <span>CHARACTERS</span>
          <span>LIST</span>
        </Title>
        <div className="section_characters-info">
          <h4>All</h4>
          <p>{characterData?.data.total} Results</p>
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
