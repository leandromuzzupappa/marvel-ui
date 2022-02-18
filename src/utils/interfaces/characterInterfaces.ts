import { IRelatedInfo, IThumbnail, url } from './generalInterfaces';

export interface ICharacters {
  id: number;
  name: string;
  title: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
  resourceURI: string;
  comics: IComics;
  series: ISeries;
  stories: IStories;
  events: IEvents;
  urls: url[];
}

interface IComics extends IRelatedInfo {}
interface ISeries extends IRelatedInfo {}
interface IStories extends IRelatedInfo {}
interface IEvents extends IRelatedInfo {}
