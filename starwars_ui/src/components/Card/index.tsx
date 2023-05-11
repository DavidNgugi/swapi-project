import React from "react";
import styled from "styled-components";
import {
    Box as ChakraBox,
    BoxProps,
} from "@chakra-ui/react";

const StyledBox = styled(ChakraBox)`
  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
    color: #000000;
  }
`;

const Card: React.FC<BoxProps> = ({ children, ...props }) => {
    return <StyledBox {...props}>{children}</StyledBox>;
};

export default Card;