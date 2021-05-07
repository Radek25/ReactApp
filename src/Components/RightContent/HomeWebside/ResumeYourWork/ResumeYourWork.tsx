import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
  
//Pagination Import
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../../tools/reducers";
import { IDataFromAPI } from '../../../../tools/reducers/DataFromAPIReducers';

//Styled Import
import {ResumeYourWorkWrapper} from './ResumeYourWorkStyled';

//ComponentImport
import {Comment} from '../../../Common/Comment/Comment'
import { FilterInput } from '../../../Common/FilterInput/FilterInput';

import { getComment} from '../../../../tools/actions/actionsTypes/commentAction';

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
      
    return(
        <ResumeYourWorkWrapper>
            <div className = 'top-of-resume-your-work'>
                <p className = 'title-of-component'>Resume your work</p>
            </div>
            {CurrentComment?.splice(1, 10).map(comment => <Comment comment = {comment}/>)}
            <div id = 'pagination-wrapper' className = {classes.root}>
                <Pagination count={10} page={page} onChange={handleChange}/>
            </div>
        </ResumeYourWorkWrapper>
    )
}