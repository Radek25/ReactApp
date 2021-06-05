import React, {FC} from 'react';
import { Link } from 'react-router-dom';

//Styled Import 
import { TopTabWrapper } from './TopTabStyled';

//Icon Import
import Cog from './../../../../icons/cog.png';

interface IWorkspacesArray{
    workspacesArray: {
        Id: number;
        BackgroundImg: string;
        MainIcon: string;
        TitleOfTile: string;
        Description: string;
        UpdateNumber: string;
    } | undefined;
}

export const TopTab: FC<IWorkspacesArray> = (props) => {
    return(
        <TopTabWrapper photo={props.workspacesArray?.BackgroundImg}>
            <div className='bottom-module'>
                <img src={props.workspacesArray?.MainIcon} alt='IconMain'/>
                <div className='title-of-workspace'>
                    <Link to = {'/test'}><img src={Cog} alt='IconCog'/></Link>
                    <h1>{props.workspacesArray?.TitleOfTile}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, sapiente. Consectetur quasi praesentium laborum cum dolores est dolorum, perferendis, vero repudiandae, tempore totam. Ad accusamus laborum sint. Aliquid, id alias.</p>
                </div>
            </div>
        </TopTabWrapper>    
    );
};