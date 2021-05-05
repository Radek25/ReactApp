import { ISingleUser } from './../InterfacesOfAPIData/user';
import { ISinglePicture } from './../InterfacesOfAPIData/picture';
import {ISinglePost} from '../InterfacesOfAPIData/post';

export const getCurrentUser = async (id: number) => {
    return fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then((response) => response.json())
    .then((user: ISingleUser[]) => {
      return user[0];
    });
};

export const getUserPictures = async (id: number) => {
    return fetch (`https://jsonplaceholder.typicode.com/photos?id=${id}`)
    .then(response => response.json())
    .then((picture: ISinglePicture[]) => {
        return picture[0];
    })
};

export const getCurrentPost = async (UserId: number, PostCount: number) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then((post: ISinglePost[]) => {
            return post.filter(post => post.id == 11 || post.id == 21 || post.id == 31 || post.id == 41)
        })
}

export const getUsersToPost = async (PostCount: number) =>{
    return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then((users: ISingleUser[]) => {
            return users.slice(1, PostCount+1);
        })
}

export const getPhotosToPost = async (PhotoId: number, PhotoCount: number) =>{
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${PhotoId}`)
        .then(response => response.json())
        .then((photo: ISinglePicture[]) => {
            return photo.slice(1, PhotoCount+1);
        })
}

export const getPicturesToPost = async (PhotoId: number) =>{
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${PhotoId}`)
        .then(response => response.json())
        .then((pictures: ISinglePicture[]) => {
            return pictures;
        })
}


