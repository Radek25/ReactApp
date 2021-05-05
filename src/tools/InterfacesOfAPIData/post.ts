import { ISinglePicture } from "./picture";
import { ISingleUser } from "./user";

export interface ISinglePost{
    userId: number;
    id: number;
    title: string;
    body: string;
    userPost?: ISingleUser;
    photoPost?: ISinglePicture;
    picturePost: ISinglePicture;
}