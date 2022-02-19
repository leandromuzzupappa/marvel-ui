import {
  FC,
  FormEventHandler,
  MouseEventHandler,
  ReactNode,
  RefObject,
} from 'react';
import { ICharacters } from './characterInterfaces';
import { IComics } from './comicInterfaces';

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
  disabled?: boolean;
}

export interface IDrawer {
  classes?: string;
  closable?: boolean;
  overlay?: boolean;
  overlayClosable?: boolean;
  overlayClasses?: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  size?: 'default' | 'small' | 'large';
  title: string;
  visible: boolean;
  children: ReactNode | string;
}

export interface IInput {
  handleChange?: FormEventHandler<HTMLInputElement>;
  label?: string;
  containerClasses?: string;
  classes?: string;
  placeholder?: string;
  type?: string;
  innerRef?: RefObject<HTMLInputElement>;
}

export interface ISelect {
  handleChange?: FormEventHandler<HTMLSelectElement>;
  label?: string;
  containerClasses?: string;
  classes?: string;
  defaultValue?: string;
  innerRef?: RefObject<HTMLSelectElement>;
}

export interface IScrollToTop {
  children: ReactNode;
}

export interface IListCards {
  title: string;
  data: any[];
  classes: string;
  urlBasePath: string;
}

export interface IMarvelFetchData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: (ICharacters | IComics)[];
}

export interface IThumbnail {
  path: string;
  extension: string;
}

export interface IResourceURIName {
  resourceURI: string;
  name: string;
  role?: string;
  type?: string;
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

export interface IDate {
  type: string;
  date: string;
}

export interface IPrice {
  type: string;
  price: number;
}
