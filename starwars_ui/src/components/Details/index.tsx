import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import { DetailsContainer, DetailsTitle, DetailsText } from './styles';
import { usePeople } from "../../contexts/PeopleContext";
import { PersonDetails, HomeWorld } from '../../types';
import { GET_HOMEWORLD } from '../../graphql';
import { client } from '../../client';
import ErrorBoundary from '../ErrorBoundary';
import { Grid, GridItem, Image } from '@chakra-ui/react';
import characters from '../../assets/data/characters.json';
import profile from '../../assets/images/profile.jpeg';

interface RouteParams {
    name: string;
}

interface ICharacter {
    name: string;
    photo: string;
}

const DetailsPage: React.FC = () => {
    const { name } = useParams() as unknown as RouteParams;
    const { results } = usePeople();
    const [data, setData] = useState<PersonDetails | undefined>(undefined);
    const [homeworld, setHomeworld] = useState<HomeWorld | undefined>(undefined);
    const [character, setCharacter] = useState<ICharacter | undefined>(undefined);

    const charactersList: ICharacter[] = characters.characters;

    useEffect(() => {
        if(charactersList && charactersList.length > 0) {
            const characterData: ICharacter | undefined = charactersList.find((character: ICharacter) => character.name === name);
            console.log(characterData);
            setCharacter(characterData);
        }
    }, [name, charactersList]);

    const getHomeworldData = useCallback(async (id: number) => {
        try {
            const {data} = await client.query({
                query: GET_HOMEWORLD,
                variables: { id: id },
            });
            setHomeworld(data.homeworld);
        } catch (error) {
            console.error("Failed to fetch homeworld", error);
        }
    }, []);

    const getHomeworldId = (url: string) => {
        const id = parseInt(url.split('/')[5]);
        return id;
    };

    useEffect(() => {
        if (results) {
            const person: PersonDetails | undefined = results.find((person) => person.name === name);
            if (person) {
                setData(person);
                const homeworldId = getHomeworldId(person.homeworld);
                getHomeworldData(homeworldId);
            }
        }
    }, [results, name, getHomeworldData]);
    
    return (
        <Layout>
            <DetailsContainer>
                <Grid templateColumns="repeat(2, 1fr)" gap={8} marginBottom={8}>
                    <GridItem colSpan={1}>
                        {character ? (
                            <Image src={character?.photo} alt="Placeholder" width={250} />
                        ) : (
                            <Image src={profile} alt="Placeholder" width={250} />
                        )}
                    </GridItem>
                    <GridItem colSpan={1} marginTop={50}>
                        <DetailsTitle>{name}</DetailsTitle>
                        <ErrorBoundary>
                            <DetailsText>Height: {data?.height}</DetailsText>
                            <DetailsText>Mass: {data?.mass}</DetailsText>
                            <DetailsText>Homeworld: {homeworld?.name}</DetailsText>
                        </ErrorBoundary>
                    </GridItem>
                </Grid>
            </DetailsContainer>
        </Layout>
    );
};

export default DetailsPage;
