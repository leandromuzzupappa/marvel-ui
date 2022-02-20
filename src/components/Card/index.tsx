import { Link } from 'react-router-dom';
import Title from 'components/Title';
import { ICard } from 'utils/interfaces/generalInterfaces';

import noImage from '../../assets/images/no-img-x1.jpg';

const Card = ({ id, title, description, thumbnail, url, classes }: ICard) => {
  const imgURL = thumbnail?.path.includes('image_not_available')
    ? noImage
    : `${thumbnail?.path}.${thumbnail?.extension}`;

  return (
    <div className={`card ${classes}`}>
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
