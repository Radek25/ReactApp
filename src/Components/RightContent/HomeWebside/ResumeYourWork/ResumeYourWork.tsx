import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
  
//Pagination Import
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../../tools/reducers";
import { IDataFromAPI } from '../../../../tools/reducers/DataFromAPIReducers';

//Icon Styled
import Signal from '../../../../icons/signal.png';

//Styled Import
import {ResumeYourWorkWrapper} from './ResumeYourWorkStyled';

//ComponentImport
import {Comment} from '../../../Common/Comment/Comment'
import { FilterInput } from '../../../Common/FilterInput/FilterInput';

import { getComment} from '../../../../tools/actions/actionsTypes/commentAction';
import { ISingleComment } from './../../../../tools/InterfacesOfAPIData/comment';

type GetComment = ReturnType<typeof getComment>

//Pagination Styles
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);


export const ResumeYourWork: FC = () =>{

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch<GetComment>(getComment());
  }, []);
  const { CurrentComment } = useSelector<IState, IDataFromAPI>((globalState) => ({
    ...globalState.DataFromAPI,
  }));
      
  //Pagination Option
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);

  const [value, setValue] = useState('all');
  const [text, addText] = useState('');

  const allComents = CurrentComment?.filter(CurrentComment => CurrentComment.name.toLowerCase().includes(text.toLowerCase())).slice((page*10+page-10), (page*10+page));
  const comentsOfOneUser = CurrentComment?.filter(CurrentComment => CurrentComment.UserComment.name == 'Leanne Graham');

  const oneUser = comentsOfOneUser?.filter(comentsOfOneUser => comentsOfOneUser.name.toLowerCase().includes(text.toLowerCase())).slice((page*10+page-10), (page*10+page));
 
  let sizeOfPagination: number = 10;
  if (value == 'all' && CurrentComment) {
    sizeOfPagination = CurrentComment?.length/10;
  }
  else if (value == 'followed' && comentsOfOneUser){
    sizeOfPagination = comentsOfOneUser?.length/10;
  }

    return(
        <ResumeYourWorkWrapper>
            <div className = 'top-of-resume-your-work'>
                <p className = 'title-of-component'>Resume your work</p>
                <div className = 'top-of-resume-your-work-right-side'>
                  <FilterInput addText = {addText}/>
                  <img src = {Signal}/>
                  <select value = {value} onChange = {e => setValue(e.target.value)}>
                    <option value = 'all'>All</option>
                    <option value = 'followed'>Followed</option>
                  </select>
                </div>
            </div>
            {
            (value == 'all')? 
              (allComents?.map(comment => <Comment comment = {comment}/>)) 
              :
              (oneUser?.map(comment => <Comment comment = {comment}/>))
            }   
            {
              (value == 'all' && allComents?.length != undefined && allComents.length < 1)?
              (
                <div id = 'no-results'>
                  <p>No more results!</p>
                   <Pagination count={sizeOfPagination} page={page} onChange={handleChange}/>
                </div>
              ):
              (
                (value == 'followed' && oneUser?.length != undefined && oneUser.length < 1)?
                (
                  <div id = 'no-results'>
                  <p>No more results!</p>
                   <Pagination count={sizeOfPagination} page={page} onChange={handleChange}/>
                </div>
                ):
                (
                  <div id = 'pagination-wrapper' className = {classes.root}>
                  <Pagination count={sizeOfPagination} page={page} onChange={handleChange}/>
                </div>
                )
              )
            }
            {console.log(allComents?.length)}
            {console.log(oneUser?.length)}
        </ResumeYourWorkWrapper>
    )
}