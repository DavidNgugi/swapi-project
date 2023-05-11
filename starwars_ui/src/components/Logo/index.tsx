import React from "react";
import {
    Container,
    Center,
    Image,
} from "@chakra-ui/react";
import logo from "../../images/logo.png";

const Logo: React.FC = () => {
    return (
        <Container maxW="container.xl">
            <Center>
                <Image src={logo} alt="Star Wars Logo" />
            </Center>
        </Container>
    );
}

export default Logo;