import constate from 'constate';
import { useState } from 'react';
import { IUser } from 'utils/interfaces/userInterfaces';

const _useContext = () => {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);

  return {
    userData,
    setUserData,
    drawerVisible,
    setDrawerVisible,
    loadingPage,
    setLoadingPage,
  };
};

const [ContextProvider, useContext] = constate(_useContext);

export { ContextProvider, useContext };
