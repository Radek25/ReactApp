import React, { FC } from "react";

//Data Import
import { useSelector } from "react-redux";
import { IState } from "../../../../tools/reducers";
import { IUserReducer } from "../../../../tools/reducers/userReducers";

//Icon Import
import WorkerPicture from "../../../../icons/WorkPort.jpg";

//StyledImport
import { PersonWrapper } from "../Person/PerswonStyled";

export const Person: FC = () => {
  const { CurrentUser } = useSelector<IState, IUserReducer>((globalState) => ({
    ...globalState.user,
  }));

  return (
    <PersonWrapper>
      {/* {console.log(picturesList)} */}
      <img src={!CurrentUser? WorkerPicture : CurrentUser.photo?.url}></img>
      <p className="name-and-surname">
        {!CurrentUser ? "und" : CurrentUser.name}
      </p>
      <p className="job-title">Job Title - Company</p>
    </PersonWrapper>
  );
};
