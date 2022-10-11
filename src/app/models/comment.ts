export interface Comment {
  id: string;
  cluckId: string;
  body: string;
  author: string;
  authorId: number;
  posted: Date;
  lastModified: Date;
}
