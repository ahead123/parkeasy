import React from "react";
import styled from "styled-components/native";

const StyledImage = styled.ImageBackground`
  height: 300px;
  width: 100%;
  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.29;
  shadow-radius: 4.65px;
  elevation: 7;
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius}px` : ""}
`;

export const ParkingSpotListImage = (props) => {
  return (
    <StyledImage source={props.source} {...props}>
      {props.children}
    </StyledImage>
  );
};
