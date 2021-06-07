import React, {FC, useState} from 'react';
import { Link } from 'react-router-dom';

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
import { FilterPanel } from './FilterPanel/FilterPanel';

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

    const[isMosaic, setValueOfView] = useState(true);
    const[isFilterOpen, setFilter] = useState(false);
    const[isSort, setSort] = useState(false);
    const[isFullScreen, setFullScreen] = useState(false);
    const [text, addText] = useState('');
  
     const allTitles = CurrentPhoto?.map(CurrentPhoto => CurrentPhoto.title).sort();
     const allPhotos = CurrentPhoto?.map(CurrentPhoto => CurrentPhoto.url);

     let ArrayPhotosAdnsSortTitles =[];
     for (let index = 0; index < 120; index++) {
       ArrayPhotosAdnsSortTitles.push({Title: allTitles?.[index], Photo: allPhotos?.[index]});
     }

     const noSortArray = CurrentPhoto?.filter(CurrentPhoto => CurrentPhoto.title.toLowerCase().includes(text.toLowerCase())).slice(24*(page-1), 24*page).map(CurrentPhoto => <Entitie key={CurrentPhoto.id} title={CurrentPhoto.title} photos={CurrentPhoto.url} sizeOfEntity = {isMosaic}/>);
     const sortArray = ArrayPhotosAdnsSortTitles?.filter(ArrayPhotosAdnsSortTitles => ArrayPhotosAdnsSortTitles.Title?.toLowerCase().includes(text.toLowerCase())).slice(24*(page-1), 24*page).map(Photo => <Entitie key={Photo.Title} title={Photo.Title} photos={Photo.Photo} sizeOfEntity = {isMosaic}/>);

    return(
        <EntitiesWrapper value={isMosaic} fullScreen={isFullScreen}>
            <div className = 'top'>
                <div className='title-and-view-option'>
                    <h1>Entities</h1>
                    <Link to = {'/test'}><img src={Setting} alt='IconSetting'/></Link>
                    <div onClick={() => setValueOfView(true)} id='button-first'><img src={isMosaic===true? MosaicBlue : MosaicGrey} alt='IconMosaic'/> Mosaic</div>
                    <div onClick={() => setValueOfView(false)} id='button-second'><img src={isMosaic===true? ListGrey : ListBlue} alt='IconList'/>List</div>
                </div>
              <OptionPanel addText={addText} setFilter={setFilter} setSort={setSort} setFullScreen={setFullScreen}/>
              {isFilterOpen === true? <FilterPanel/> : null}
            </div>
            {(sortArray.length === 0 || noSortArray?.length === 0)? <div>No results!</div>: (isSort === false? noSortArray : sortArray)}
            <div id = 'pagination-wrapper' className = {classes.root}>
                <Pagination count={sizeOfPagination} page={page} onChange={handleChange}/>
            </div>
        </EntitiesWrapper>
    );
};