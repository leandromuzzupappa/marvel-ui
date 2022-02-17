import constate from 'constate';
import { useState } from 'react';

import { IUser } from 'utils/interfaces/userInterfaces';

const _useContext = () => {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const [drawerVisible, setDrawerVisible] = useState(false);

  return {
    userData,
    setUserData,
    drawerVisible,
    setDrawerVisible,
  };
};

const [ContextProvider, useContext] = constate(_useContext);

export { ContextProvider, useContext };
