import 'assets/scss/main.scss';

import { APP_TITLE } from 'utils/constants';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ContextProvider } from 'hooks/useContext';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'config';

import ScrollToTop from 'wrappers/ScrollToTop';
import AuthProvider from 'wrappers/Auth';

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <ContextProvider>
        <AuthProvider />
        <QueryClientProvider client={queryClient}>
          <ScrollToTop>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </ScrollToTop>
        </QueryClientProvider>
      </ContextProvider>
    </HelmetProvider>
  );
}
