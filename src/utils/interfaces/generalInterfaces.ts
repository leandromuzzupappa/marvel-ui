import { FC, MouseEventHandler } from 'react';

export interface RouteItem {
  key: string;
  path: string;
  element: FC;
}

export interface ITitleComponent {
  classes?: string;
  handleClick?: MouseEventHandler;
  animation?: string;
}
