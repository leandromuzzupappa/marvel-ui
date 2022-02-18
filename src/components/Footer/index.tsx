import './styles.scss';
import { Link } from 'react-router-dom';

import { ESearchAPI } from 'utils/enums/generalEnums';
import { getKeysFromEnum } from 'utils/enumUtils';

const Footer = () => {
  const itemsFooter = getKeysFromEnum(ESearchAPI);

  return (
    <footer className="footer section">
      <h1 className="footer_logo">MARVEL</h1>
      <ul className="footer_links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {itemsFooter.map((item) => (
          <li>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
