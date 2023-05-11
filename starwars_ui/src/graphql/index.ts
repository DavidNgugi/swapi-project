import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
  query GetPeople($page: Int!) {
    people(page: $page) {
      count
      results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;

export const GET_PERSON = gql`
  query GetPerson($name: String!) {
    person(name: $name) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

export const GET_HOMEWORLD = gql`
  query GetHomeWorld($id: Int!) {
    homeworld(id: $id) {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      surface_water
      population
    }
  }
`;
