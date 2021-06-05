import React, {FC} from 'react'

//Styled Import
import { CommentWrapper } from './CommentStyled';
import { ISingleComment } from './../../../tools/InterfacesOfAPIData/comment';

//Icons Import
import Dot from '../../../icons/circle-solid.png';
import FileSignature from '../../../icons/file-signature.png';
import Entities from '../../../icons/entities3.png';
import Book from '../../../icons/book.png';
import Person from '../../../icons/person.png';
import Publication from '../../../icons/publications.png';

interface IComment{
    comment: ISingleComment;
}

export const Comment: FC<IComment> = (props) =>{

    let CommentSubtitleArray = [
        {Icon : FileSignature, Title: 'Client contract'},
        {Icon : FileSignature, Title: 'Supplier contract'},
        {Icon : Entities, Title: 'Corporate'},
        {Icon : Book, Title: 'Group norms'},
        {Icon : Person, Title: 'Customers'},
        {Icon : Publication, Title: 'Documents'},
        {Icon : Entities, Title: 'Institutions'},
        {Icon : Person, Title: 'Business meeting'}
    ];

    let index : number = Math.floor(Math.random() * 7) + 1  ;
    let title: string = props.comment.name;
    let body : string = props.comment.body;

    return(
        <CommentWrapper>
            <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
            <p>{body.charAt(0).toUpperCase() + body.slice(1)}</p>
            <div className = 'subtitles'>
                <p>{props.comment.UserComment.company.name}</p>
                <img src = {Dot} alt='.'/>
                <div>
                    <img src ={CommentSubtitleArray[index].Icon} alt='icon'/>
                    <p>{CommentSubtitleArray[index].Title}</p>
                </div>
                <img src = {Dot} alt='.'/>
                <p>Updated {index} days ago by {props.comment.UserComment.name}</p>
            </div>
        </CommentWrapper>
    );
};