import { RouteItem } from 'utils/interfaces/generalInterfaces';

import { ESearchAPI } from 'utils/enums/generalEnums';
import { getKeysFromEnum } from 'utils/enumUtils';

import Homepage from 'pages/Homepage';
import Gallery from 'pages/Gallery';
import Single from 'pages/Single';
import SignUp from 'pages/SignUp';
import Account from 'pages/Account';

const paths = getKeysFromEnum(ESearchAPI);

export const routes: RouteItem[] = [
  {
    key: 'router-home',
    path: '/',
    element: Homepage,
  },
  ...paths.map((path) => ({
    key: `router-gallery-${path}`,
    path: `/${path}`,
    element: Gallery,
  })),
  ...paths.map((path) => ({
    key: `router-single-${path}`,
    path: `/${path}/:id`,
    element: Single,
  })),
  {
    key: 'router-signup',
    path: '/sign-up',
    element: SignUp,
  },
  {
    key: 'router-account',
    path: '/sign-up',
    element: Account,
  },
];
