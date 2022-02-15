import { useQuery } from 'react-query';
import { fetchCaracters } from 'services/marvelService';

const Characters = () => {
  const { data: characterData } = useQuery(['offset', 0], fetchCaracters, {
    keepPreviousData: true,
  });

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characterData?.results.map((char: { name: string }, i: number) => (
          <li key={char.name}>
            {i} - {char.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
