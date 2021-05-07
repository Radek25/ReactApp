import { ISingleUser } from './user';
export interface ISingleComment{
    postID: number;
    id: number;
    name: string;
    email: string;
    body: string;
    UserComment: ISingleUser;
}