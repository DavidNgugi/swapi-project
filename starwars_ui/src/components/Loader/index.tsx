import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

const Loader: React.FC = () => (
    <Center minHeight="50vh" data-testid="loader">
        <Spinner />
    </Center>
);

export default Loader;