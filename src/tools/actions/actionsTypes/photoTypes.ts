import { ISinglePicture } from './../../InterfacesOfAPIData/picture';

export const GET_PHOTO = "GET_PHOTO";

export interface IPhotoTypes {
  GET_PHOTO: {
    photo: ISinglePicture
  };
}
