import { ISingleUser } from './../InterfacesOfAPIData/user';
import { ISinglePicture } from './../InterfacesOfAPIData/picture';
import {ISinglePost} from '../InterfacesOfAPIData/post';
import { ISingleComment } from './../InterfacesOfAPIData/comment';

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
            return post.filter(post => post.id === 11 || post.id === 21 || post.id === 31 || post.id === 41)
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

export const getCurrentComment = async () => {
    return fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.json())
    .then((comments: ISingleComment[]) => {
        return comments;
    })
}

export const getUsersToComment = async () =>{
    return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then((users: ISingleUser[]) => {
            return users;
        })
}

export const getCurrentPhoto= async () =>{
    return fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(response => response.json())
        .then((photos: ISinglePicture[]) => {
            return (photos.slice(50, 170));
        })
}