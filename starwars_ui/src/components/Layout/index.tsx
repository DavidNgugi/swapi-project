import React, { ReactNode } from "react";
import { Center } from "@chakra-ui/react";
import Logo from "../Logo";
import StyledAppContainer from './style';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
    return (
        <StyledAppContainer {...props}>
            <Logo />
            <Center
                h="100%"
                w="100%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                {children}
            </Center>
        </StyledAppContainer>
    );
};

export default Layout;