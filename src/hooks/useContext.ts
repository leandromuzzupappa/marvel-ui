import constate from 'constate';
import { useState } from 'react';

import { IUser } from 'utils/interfaces/userInterfaces';

const _useContext = () => {
  const [userData, setUserData] = useState<IUser>({} as IUser);

  return {
    userData,
    setUserData,
  };
};

const [ContextProvider, useContext] = constate(_useContext);

export { ContextProvider, useContext };
