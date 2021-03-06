import React, { FC } from "react";

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../../tools/reducers";
import { IDataFromAPI } from '../../../../tools/reducers/DataFromAPIReducers';

//Icon Import
import UnknownUser from "../../../../icons/question-circle.png";

//StyledImport
import { PersonWrapper } from "../Person/PerswonStyled";
import { Link } from "react-router-dom";


export const Person: FC = () => {
  const { CurrentUser } = useSelector<IState, IDataFromAPI>((globalState) => ({
    ...globalState.DataFromAPI,
  }));

  return (
    <PersonWrapper>
      <Link to ='/profile'>
      <img src={!CurrentUser? UnknownUser : CurrentUser.photo?.url} alt='UserPhoto'/>
      <p>{(!CurrentUser)? 'No user' : CurrentUser.name}</p>
      <p>{CurrentUser?.company.name}</p>
      </Link>
    </PersonWrapper>
  );
};
