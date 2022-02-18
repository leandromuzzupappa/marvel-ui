import {
  IDate,
  IPrice,
  IRelatedInfo,
  IThumbnail,
  url,
} from './generalInterfaces';

export interface IComics {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string | null;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: any[];
  resourceURI: string;
  urls: url[];
  series: ISeries;
  variants: IVariants[];
  collections: any[];
  collectionsIssues: any[];
  dates: IDate[];
  prices: IPrice[];
  thumbnail: IThumbnail;
  images: any[];
  creators: ICreators;
  characters: ICharacters;
  stories: IStories;
  events: IEvents;
}

interface ISeries extends IRelatedInfo {}
interface IStories extends IRelatedInfo {}
interface IEvents extends IRelatedInfo {}
interface IVariants extends IRelatedInfo {}
interface ICharacters extends IRelatedInfo {}
interface ICreators extends IRelatedInfo {}
