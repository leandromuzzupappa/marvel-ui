import { FC } from 'react';

import Hero from 'components/Hero';
import Characters from 'components/Characters';

const Homepage: FC<{}> = () => {
  return (
    <>
      <Hero />
      <Characters />
    </>
  );
};

export default Homepage;
