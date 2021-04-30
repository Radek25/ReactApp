import { ISingleUser } from '../../interfaceOfUser/users';

export const GET_USERS = 'GET_USERS';

export interface IUserTypes{
    GET_USERS: {
        usersList : ISingleUser[];
    }
}