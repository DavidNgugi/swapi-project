import React from "react";
import {
    Container,
    Center,
    Image,
} from "@chakra-ui/react";
import logo from "../../assets/images/logo_yellow_outline.png";

const Logo: React.FC = () => {
    return (
        <Container maxW="container.xl">
            <Center>
                <Image src={logo} alt="Star Wars Logo" width="25%" />
            </Center>
        </Container>
    );
}

export default Logo;