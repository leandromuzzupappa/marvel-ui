import { APP_TITLE } from './utils/constants';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider, QueryClient, useQuery } from 'react-query';
import { fetchCaracters } from './services/marvelService';

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <Characters />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

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
