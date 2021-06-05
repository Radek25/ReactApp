import React, {FC, useState} from 'react';
  
//Pagination Import
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../tools/reducers";
import { IDataFromAPI } from '../../../tools/reducers/DataFromAPIReducers';

//Icon Styled
import Signal from './../../../icons/signal.png';

//Styled Import
import {ResumeYourWorkWrapper} from './ResumeYourWorkStyled';

//ComponentImport
import {Comment} from '../Comment/Comment'
import { FilterInput } from '../FilterInput/FilterInput';
import { ExtraFilters } from './WorkspacesWebsideExtraFilters/ExtraFilters';

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

interface IViewChanges{
  flag: boolean;
}

export const ResumeYourWork: FC<IViewChanges> = (props) =>{

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
  const comentsOfOneUser = CurrentComment?.filter(CurrentComment => CurrentComment.UserComment.name === 'Leanne Graham');

  const oneUser = comentsOfOneUser?.filter(comentsOfOneUser => comentsOfOneUser.name.toLowerCase().includes(text.toLowerCase())).slice((page*10+page-10), (page*10+page));
 
  const mapAllComents = allComents?.map(comment => <Comment key={comment.id} comment = {comment}/>);
  const mapOneUserComents = oneUser?.map(comment => <Comment key={comment.id} comment = {comment}/>);

  let sizeOfPagination: number = 10;
  if (value === 'all' && CurrentComment) {
    sizeOfPagination = CurrentComment?.length/10;
  }
  else if (value === 'followed' && comentsOfOneUser){
    sizeOfPagination = comentsOfOneUser?.length/10;
  }

    return(
        <ResumeYourWorkWrapper>
            <div className = 'top-of-resume-your-work'>
                <h2>{props.flag === false? 'Resume your work' : 'Lastest updates'}</h2>
                <div className = 'top-of-resume-your-work-right-side'>
                  <FilterInput addText = {addText}/>
                  <img src = {Signal} alt='signal'/>
                  <select value = {value} onChange = {e => setValue(e.target.value)}>
                    <option value = 'all'>All</option>
                    <option value = 'followed'>Followed</option>
                  </select>
                </div>
            </div>
            {props.flag === false? null : <ExtraFilters/>}
            {(value === 'all')? mapAllComents : mapOneUserComents}   
            {
              (value === 'all' && allComents?.length !== undefined && allComents.length < 1)?
              (
                <div id = 'no-results'>
                  <p>No more results!</p>
                   <Pagination count={sizeOfPagination} page={page} onChange={handleChange}/>
                </div>
              ):
              (
                (value === 'followed' && oneUser?.length !== undefined && oneUser.length < 1)?
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
        </ResumeYourWorkWrapper>
    )
}