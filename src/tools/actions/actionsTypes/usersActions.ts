import {Dispatch} from 'redux';
import * as actionTypes from '../actionsTypes/userTypes';
import {ISingleUser} from '../../interfaceOfUser/users'

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch : Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then((usersList : ISingleUser[]) =>{
        dispatch({
            type: actionTypes.GET_USERS,
            usersList
        })
    })
}) as any;