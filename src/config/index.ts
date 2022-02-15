import { RouteItem } from 'interfaces/generalInterfaces';

import Homepage from 'pages/Homepage';
import Pepitos from 'pages/Pepitos';

export const routes: RouteItem[] = [
  {
    key: 'router-home',
    path: '/',
    element: Homepage,
  },
  {
    key: 'router-pepitos',
    path: '/pepitos',
    element: Pepitos,
  },
];
