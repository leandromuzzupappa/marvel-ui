import { useContext } from 'hooks/useContext';
import { Navigate } from 'react-router-dom';

const AuthProvider = () => {
  const { pathname } = new URL(window.location.href);
  const { userData } = useContext();

  if (userData?.name) {
    if (pathname.includes('/sign-in')) {
      return <Navigate to={'/account?algo'} />;
    }
  } else {
    if (pathname.includes('/account')) return <Navigate to={'/sign-in'} />;
  }

  return <></>;
};

export default AuthProvider;
