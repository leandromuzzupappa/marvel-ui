import constate from 'constate';
import { useEffect, useState } from 'react';
import { IUser } from 'utils/interfaces/userInterfaces';
import { storageUtils } from 'utils/storageUtils';

const { getLocalJsonItem } = storageUtils;

const _useContext = () => {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    if (!loadingPage) {
      setTimeout(() => {
        setUserData(getLocalJsonItem('marvelui'));
      }, 2000);
    }
  }, [loadingPage]);

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
