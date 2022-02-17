import { FC, MouseEventHandler, ReactNode } from 'react';
import { ICharacters } from './characterInterfaces';

export interface RouteItem {
  key: string;
  path: string;
  element: FC;
}

export interface ITitleComponent {
  classes?: string;
  handleClick?: MouseEventHandler;
  animation?: string;
  megaTitle?: boolean;
}

export interface IButtonComponent {
  classes?: string;
  children: ReactNode | string;
  handleClick?: MouseEventHandler;
}

export interface IMarvelFetchData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ICharacters[];
}

export interface IThumbnail {
  path: string;
  extension: string;
}

export interface IResourceURIName {
  resourceURI: string;
  name: string;
}

export interface IRelatedInfo {
  available: number;
  collectionURI: string;
  items: IResourceURIName[];
  returned: number;
}

export interface url {
  type: string;
  url: string;
}

export interface ICard {
  id?: number;
  title: string;
  description?: string;
  thumbnail?: IThumbnail;
  url: string;
  classes?: string;
}
