export type NewsItem = {
  id: number;
  title: string;
  date: string;
  image: string;
  content: string;
  isMain?: boolean;
};

import { news1 } from './news/1';
import { news2 } from './news/2';
import { news3 } from './news/3';


export const newsData: NewsItem[] = [
  news1,
  news2,
  news3,
]; 