import React, { FC } from "react";

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../../tools/reducers";
import { IDataFromAPI } from '../../../../tools/reducers/DataFromAPIReducers';

//Icon Import
import UnknownUser from "../../../../icons/question-circle.png";

//StyledImport
import { PersonWrapper } from "../Person/PerswonStyled";

export const Person: FC = () => {
  const { CurrentUser } = useSelector<IState, IDataFromAPI>((globalState) => ({
    ...globalState.DataFromAPI,
  }));

  return (
    <PersonWrapper>
      <img src={!CurrentUser? UnknownUser : CurrentUser.photo?.url}></img>
      <p className="name-and-surname">
        {!CurrentUser ? "No user" : CurrentUser.name}
      </p>
      <p className="job-title">{CurrentUser?.company.name}</p>
    </PersonWrapper>
  );
};
