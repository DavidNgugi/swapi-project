import { PeopleResult, Person } from '../types';
import API from '../api';

const resolvers = {
  Query: {
    people: async (_: any, { page }: { page: number }): Promise<PeopleResult> => {
      try {
        const response = await API.get(`/people/?page=${page}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching people:', error);
        throw new Error('Error fetching people');
      }
    },
    person: async (_: any, { name }: { name: string }): Promise<Person[]> => {
      try {
        const response = await API.get(`/people/?search=${name}`);
        return response.data.results;
      } catch (error) {
        console.error('Error fetching person:', error);
        throw new Error('Error fetching person');
      }
    },
  }
};

export default resolvers;