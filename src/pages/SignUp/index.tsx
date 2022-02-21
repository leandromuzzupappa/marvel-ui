import './styles.scss';
import { useState } from 'react';
import Input from 'components/forms/Input';
import { useContext } from 'hooks/useContext';
import { useNavigate } from 'react-router-dom';
import { storageUtils } from 'utils/storageUtils';

const { setLocalItem } = storageUtils;

const SignUp = () => {
  const [user, setUser] = useState('');
  const { userData, setUserData } = useContext();
  const navigate = useNavigate();

  const handleCreateUser = () => {
    setUserData({
      ...userData,
      name: user,
    });

    setLocalItem('marvelui', {
      ...userData,
      name: user,
    });

    return navigate('/');
  };

  return (
    <div className="sign_up">
      <div className="sign_up-container">
        <h1>MARVEL UI</h1>
        <h2>Sign Up Form</h2>
        <Input
          label="Username"
          placeholder="Insert a username"
          handleChange={(event: any) => setUser(event?.target.value)}
        />
        <button onClick={handleCreateUser}>Save</button>
      </div>
    </div>
  );
};

export default SignUp;
