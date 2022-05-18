import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors/colors";

const { white } = colors;

const StyledView = styled.View`
  display: flex;
  background-color: ${white}
  align-items: center;
  justify-content: center;
`;

export const MainContainer = (props) => {
  return <StyledView {...props}>{props.children}</StyledView>;
};
