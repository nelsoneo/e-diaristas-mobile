import React from "react";
import { Avatar } from "react-native-paper";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  InformationContainer,
} from "./UserInformation.style";

export interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <UserInformationContainer>
      <Avatar.Image source={{ uri: props.picture }} />
      <InformationContainer>
        <UserName>{props.name}</UserName>
        <UserDescription>{props.description}</UserDescription>
      </InformationContainer>
    </UserInformationContainer>
  );
};

export default UserInformation;
