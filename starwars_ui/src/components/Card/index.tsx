import React from "react";
import styled from "styled-components";
import {
    Box as ChakraBox,
    BoxProps,
} from "@chakra-ui/react";

const StyledBox = styled(ChakraBox)`
  display: flex;
  flex: 1;
  background-color: #eeee;
  color: #000;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #cec418;
    border: 1px solid #cec418;
  }
`;

const Card: React.FC<BoxProps> = ({ children, ...props }) => {
    return <StyledBox {...props}>{children}</StyledBox>;
};

export default Card;