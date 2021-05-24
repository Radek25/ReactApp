import React, {FC, useState} from 'react';

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../tools/reducers";
import { IDataFromAPI } from '../../../tools/reducers/DataFromAPIReducers';

//Styled Import
import {EntitiesWrapper} from './EntitiesWebsideStyled';

//Pagination Import
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

//Component Import
import {Entitie} from '../../Common/Entitie/Entitie';
import { OptionPanel } from './OptionPanel/OptionPanel';

//Icons Import
import Setting from '../../../icons/cog.png';
import ListBlue from '../../../icons/list-blue.png';
import ListGrey from '../../../icons/list-grey.png';
import MosaicBlue from '../../../icons/mosaic-blue.png';
import MosaicGrey from '../../../icons/mosaic-grey.png';

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

export const Entities: FC = () => {
    
    const { CurrentPhoto } = useSelector<IState, IDataFromAPI>((globalState) => ({
        ...globalState.DataFromAPI,
    }));

    //Pagination Option
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);
    let sizeOfPagination = (CurrentPhoto?.length? CurrentPhoto.length/24 : 5)

    let[isMosaic, setValueOfView] = useState(true);
    return(
        <EntitiesWrapper value={isMosaic}>
            <div className = 'top'>
                <div className='title-and-view-option'>
                    <h1>Entities</h1>
                    <img src={Setting}/>
                    <div onClick={() => setValueOfView(true)} id='button-first'><img src={isMosaic==true? MosaicBlue : MosaicGrey}/> Mosaic</div>
                    <div onClick={() => setValueOfView(false)} id='button-second'><img src={isMosaic==true? ListGrey : ListBlue}/>List</div>
                </div>
            <OptionPanel/>
            </div>
            {CurrentPhoto?.slice(24*(page-1), 24*page).map(CurrentPhoto => <Entitie sizeOfEntity = {isMosaic} photoUrl = {CurrentPhoto.url}/>)}
            <div id = 'pagination-wrapper' className = {classes.root}>
                <Pagination count={sizeOfPagination} page={page} onChange={handleChange}/>
            </div>
        </EntitiesWrapper>
    );
};