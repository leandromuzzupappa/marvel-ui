import './styles.scss';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ESearchAPI } from 'utils/enums/generalEnums';
import { getKeysFromEnum } from 'utils/enumUtils';
import marvelLogo from '../../assets/images/marvel-logo.svg';

const itemsMenu: string[] = getKeysFromEnum(ESearchAPI);

const Header = () => {
  const [position, setPosition] = useState<number>(window.pageYOffset);
  const [visible, setVisible] = useState<boolean>(true);
  const [activeItemStyles, setActiveItemStyles] = useState<any>({});
  const headerElement = useRef<HTMLDivElement>(null);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;

      setVisible(position > scrollPos);
      setPosition(scrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [position]);

  useEffect(() => {
    const currentEl = headerElement?.current;
    const headerLinks = currentEl?.querySelectorAll('.header-menu-item a');
    const indicatorDefaultPos = currentEl?.querySelector('.header-login a');

    headerLinks?.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        const { x, width, height } = link.getBoundingClientRect();

        setActiveItemStyles({
          opacity: 1,
          width: `${width}px`,
          height: `${height}px`,
          left: `${x}px`,
        });
      });
    });

    const restoreIndicatorPos = () => {
      // @ts-ignore
      const { x, width, height } = indicatorDefaultPos?.getBoundingClientRect();
      setActiveItemStyles({
        opacity: 1,
        width: `${width}px`,
        height: `${height}px`,
        left: `${x}px`,
      });
    };

    restoreIndicatorPos();
    currentEl?.addEventListener('mouseleave', restoreIndicatorPos);
    window.addEventListener('resize', restoreIndicatorPos);
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');

    if (html) {
      if (openMenuMobile) html.style.overflowY = 'hidden';
      else html.style.overflowY = 'inherit';
    }
  }, [openMenuMobile]);

  const classes = `header-${visible ? 'visible' : 'hidden'} ${
    position < 80 ? 'header-top' : ''
  }`;

  return (
    <header className={`header ${classes}`} ref={headerElement}>
      <div className="header_container">
        <div className="header-logo">
          <Link to={'/'}>
            <h1>Marvel</h1>
            <img src={marvelLogo} alt="Marvel Logo" />
          </Link>
        </div>
        <nav className="header-menu">
          <ul>
            {itemsMenu.map((item: string) => (
              <li key={item} className="header-menu-item">
                <Link to={item}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-login">
          <li className="header-menu-item">
            <Link to="/sign-in">Sign In</Link>
          </li>
        </div>
        <div
          className={`header-menu-mobile-btn ${
            openMenuMobile ? 'header-menu-mobile-btn--open' : ''
          }`}
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
        >
          <span className="top"></span>
          <span className="center1"></span>
          <span className="center2"></span>
          <span className="bottom"></span>
        </div>
      </div>
      <div style={activeItemStyles} className="header-menu-item--active"></div>
      <div
        className={`header-menu-mobile ${
          openMenuMobile ? 'header-menu-mobile--open' : ''
        }`}
      >
        <nav className="menu">
          <ul>
            {itemsMenu.map((item: string) => (
              <li key={item} className="header-menu-item">
                <Link to={item}>{item}</Link>
              </li>
            ))}
            <li className="header-menu-item header-menu-signin">
              <Link to="/sign-in">Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
