import Characters from 'components/Characters';
import { useLocation } from 'react-router';

import Layout from 'layouts/Main';

const Gallery = () => {
  const { pathname } = useLocation();
  const currentPage = pathname.substring(1);

  return (
    <Layout>
      <Characters type={currentPage} rel={`gallery-${currentPage}`} />
    </Layout>
  );
};

export default Gallery;
