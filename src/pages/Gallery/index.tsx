import Characters from 'components/Characters';
import { useLocation } from 'react-router';

const Gallery = () => {
  const { pathname } = useLocation();
  const currentPage = pathname.substring(1);

  return (
    <>
      <Characters type={currentPage} rel={`gallery-${currentPage}`} />
    </>
  );
};

export default Gallery;
