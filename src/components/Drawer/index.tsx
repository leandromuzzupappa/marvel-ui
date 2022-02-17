import './styles.scss';
import CloseIcon from 'components/icons/CloseIcon';
import { IDrawer } from 'utils/interfaces/generalInterfaces';
import { useContext } from 'hooks/useContext';
import { useEffect } from 'react';

const Drawer = ({
  classes,
  closable = true,
  overlay = true,
  overlayClosable = true,
  overlayClasses,
  position = 'top',
  size = 'default',
  title,
  visible,
  children,
}: IDrawer) => {
  const { drawerVisible, setDrawerVisible } = useContext();

  useEffect(() => {
    setDrawerVisible(visible);
  }, [visible, setDrawerVisible]);

  return drawerVisible ? (
    <>
      <div
        className={`drawer drawer-position-${position} drawer-size-${size} ${
          classes ? classes : ''
        }`}
      >
        <header className="drawer-header">
          {closable && (
            <button
              className="drawer-header-close"
              onClick={() => setDrawerVisible(false)}
            >
              <CloseIcon />
            </button>
          )}
          <h4 className="drawer-header-title">{title}</h4>
        </header>
        <div className="drawer-body">{children}</div>
      </div>
      {overlay && (
        <div
          className={`drawer-overlay ${overlayClasses ? overlayClasses : ''}`}
          onClick={() => overlayClosable && setDrawerVisible(false)}
        ></div>
      )}
    </>
  ) : (
    <></>
  );
};

export default Drawer;
