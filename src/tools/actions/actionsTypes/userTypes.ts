import { ISingleUser } from "../../InterfacesOfAPIData/user";

export const GET_USER = "GET_USER";

export interface IUserTypes {
  GET_USER: {
    user: ISingleUser;
  };
}
