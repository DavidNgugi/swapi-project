import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import {
  VStack,
  Text,
  Center,
  Grid
} from "@chakra-ui/react";
import { GET_PEOPLE } from "../../graphql";
import { GetPeopleQueryResult, PersonDetails } from "../../types";
import Card from "../Card";
import Layout from "../Layout";
import Loader from "../Loader";
import Pagination from "../Pagination";
import { usePeople } from "../../contexts/PeopleContext";
import ErrorBoundary from "../ErrorBoundary";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { results, setResults, count, setCount, page, setPage } = usePeople();

  const { loading, error, data } = useQuery<GetPeopleQueryResult>(GET_PEOPLE, {
    variables: { page },
  });

  useEffect(() => {
    if (data?.people?.results) {
      setResults(data.people.results);
      setCount(data.people.count);
    }
  }, [data, setResults, setCount]);

  if (error) return <p>Sorry, a problem occurred while loading your data!</p>;

  const onPageChange = (newPage: React.SetStateAction<number>) => {
    setPage(newPage)
  };

  const onClick = (name: string) => {
    navigate(`/details/${name}`);
  };

  return (
    <Layout>
      <VStack spacing={2} align="stretch">
        {!loading ? (
          <ErrorBoundary>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              gap={8}
              marginBottom={8}
            >
              {results && !!results?.length ? (
                <>
                  {results?.map((person: PersonDetails, index: number) => (
                    <Card
                      key={person.name}
                      borderWidth="1px"
                      borderRadius="lg"
                      padding="6"
                    >
                      <Text data-testid={`person-card-${index}`} onClick={() => onClick(person.name)}>
                        {person.name}
                      </Text>
                    </Card>
                  ))}
                </>
              ) : (
                <Text>No results available</Text>
              )}
            </Grid>
          </ErrorBoundary>
        ) : (
          <Loader />
        )}
        {count && (
          <Center>
            <Pagination
              count={count}
              currentPage={page}
              onPageChange={onPageChange}
            />
          </Center>
        )}
      </VStack>
    </Layout>
  );
};

export default HomePage;
