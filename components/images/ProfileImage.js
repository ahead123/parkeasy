import React from "react";
import styled from "styled-components/native";

const StyledImage = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 40px;
`;

export const ProfileImage = (props) => {
  return (
    <StyledImage source={props.source} {...props} resizeMode="center">
      {props.children}
    </StyledImage>
  );
};
