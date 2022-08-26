export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  bio: string;
  avatarHue: number;
  avatarImage: string;
  cluckCount: number;
  followingCount: number;
  followersCount: number;
  eggRating: number;
  joined: Date;
  lastModified: Date;
  lastLogin: Date;
  currentlyFollowingUser?: boolean; // Easy flag to tell if you as a user are currently following this user.
}
