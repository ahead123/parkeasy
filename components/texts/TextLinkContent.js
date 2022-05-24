import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors/colors";

const { primary } = colors;

const StyledText = styled.Text`
  color: ${primary};
  font-size: 15px;
`;

export const TextLinkContent = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
