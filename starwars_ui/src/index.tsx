import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { client } from './client';
import PeopleProvider from './providers/PeopleProvider';
import Router from './router';

const root = document.getElementById('root') as Element;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <ThemeProvider theme={{}}>
          <PeopleProvider>
            <RouterProvider router={Router} />
          </PeopleProvider>
        </ThemeProvider>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
);

reportWebVitals();
