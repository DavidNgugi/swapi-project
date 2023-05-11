import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import { DetailsContainer, DetailsTitle, DetailsText } from './styles';
import { usePeople } from "../../contexts/PeopleContext";
import { PersonDetails, HomeWorld } from '../../types';
import { GET_HOMEWORLD } from '../../graphql';
import { client } from '../../client';

interface RouteParams {
    name: string;
}

const DetailsPage: React.FC = () => {
    const { name } = useParams() as unknown as RouteParams;
    const { results } = usePeople();
    const [data, setData] = useState<PersonDetails | undefined>(undefined);
    const [homeworld, setHomeworld] = useState<HomeWorld | undefined>(undefined);
    
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
                <DetailsTitle>{name}</DetailsTitle>
                <DetailsText>Height: {data?.height}</DetailsText>
                <DetailsText>Mass: {data?.mass}</DetailsText>
                <DetailsText>Homeworld: {homeworld?.name}</DetailsText>
            </DetailsContainer>
        </Layout>
    );
};

export default DetailsPage;
