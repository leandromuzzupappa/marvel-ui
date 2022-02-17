import { Link } from 'react-router-dom';
import Title from 'components/Title';
import { ICard } from 'utils/interfaces/generalInterfaces';

const Card = ({ id, title, description, thumbnail, url, classes }: ICard) => {
  return (
    <div className={`card ${classes}`}>
      <Link to={url} data-card-id={id} className="card_link">
        {thumbnail && (
          <img
            className="card_image"
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={title}
          />
        )}
        <main className="card_content">
          <Title classes="card_title">{title}</Title>
          {description && <p>{description}</p>}
        </main>
      </Link>
    </div>
  );
};

export default Card;
