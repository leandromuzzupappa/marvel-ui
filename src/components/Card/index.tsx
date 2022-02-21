import './styles.scss';

import { Link } from 'react-router-dom';
import Title from 'components/Title';
import { ICard } from 'utils/interfaces/generalInterfaces';
import { useContext } from 'hooks/useContext';
import { storageUtils } from 'utils/storageUtils';
import noImage from '../../assets/images/no-img-x1.jpg';

const { setLocalItem } = storageUtils;

const Card = ({ id, title, description, thumbnail, url, classes }: ICard) => {
  const { userData } = useContext();
  const imgURL = thumbnail?.path.includes('image_not_available')
    ? noImage
    : `${thumbnail?.path}.${thumbnail?.extension}`;

  // Mejorar!
  const handleFav = (e: any) => {
    if (id) {
      const favsArr = userData?.favs ?? [];
      const duplicated = favsArr.find((item) => item === id);
      if (!duplicated) {
        favsArr.push(id);
        userData.favs = favsArr;
        setLocalItem('marvelui', userData);
      }
    }
  };
  const handleHide = (e: any) => {
    if (id) {
      const hidesArr = userData?.hides ?? [];
      const duplicated = hidesArr.find((item) => item === id);
      if (!duplicated) {
        hidesArr.push(id);
        userData.hides = hidesArr;
        setLocalItem('marvelui', userData);
        window.document.querySelector(`[data-id='${id}']`)?.remove(); //sorry
      }
    }
  };

  return (
    <div data-id={id} className={`card ${classes}`}>
      {userData?.name && (
        <div className="card_actions">
          <button
            onClick={(e) => {
              handleFav(e);
            }}
          >
            Fav
          </button>
          <button
            onClick={(e) => {
              handleHide(e);
            }}
          >
            Hide
          </button>
        </div>
      )}
      <Link to={url} data-card-id={id} className="card_link">
        {thumbnail && <img className="card_image" src={imgURL} alt={title} />}
        <main className="card_content">
          <Title classes="card_title">{title}</Title>
          {description && <p>{description}</p>}
        </main>
      </Link>
    </div>
  );
};

export default Card;
