import 'assets/scss/main.scss';

import { APP_TITLE } from 'utils/constants';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ContextProvider } from 'hooks/useContext';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'config';

import Footer from 'components/Footer';

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </QueryClientProvider>
        <Footer />
      </ContextProvider>
    </HelmetProvider>
  );
}
