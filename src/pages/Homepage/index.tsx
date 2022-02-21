import { FC } from 'react';

import Layout from 'layouts/Main';

import Hero from 'components/Hero';
import Characters from 'components/Characters';

const Homepage: FC<{}> = () => {
  return (
    <Layout>
      <Hero />
      <Characters />
    </Layout>
  );
};

export default Homepage;
