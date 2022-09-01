export interface Cluck {
  id: string;
  body: string;
  posted: Date;
  lastModified: Date;
  authorId: number;
  author: string;
  eggRating: number;
  commentCount: number;
  liked: -1 | 0 | 1;
  commented: boolean;
}
