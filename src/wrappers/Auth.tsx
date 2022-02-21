import { useContext } from 'hooks/useContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthProvider = () => {
  const { pathname } = new URL(window.location.href);
  const { userData } = useContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.name) {
      if (pathname.includes('/sign-up')) {
        return navigate('/account');
      }
    } else {
      if (pathname.includes('/account')) return navigate('/sign-up');
    }
  }, [userData, pathname, navigate]);

  return <></>;
};

export default AuthProvider;
