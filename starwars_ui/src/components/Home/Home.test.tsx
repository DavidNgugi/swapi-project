/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-wait-for-side-effects */
import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import HomePage from "./index";
import { GET_PEOPLE } from "../../graphql";
import PeopleProvider from "../../providers/PeopleProvider";

const mocks = [
  {
    request: {
      query: GET_PEOPLE,
      variables: { page: 1 },
    },
    result: {
      data: {
        people: {
          count: 2,
          results: [
            { 
                name: "John Doe", 
                height: "100",  
                mass: "100",
                gender: "Male",
                homeworld: "https://swapi.dev/api/planets/1/",
            },
            { 
                name: "Jane Smith",
                height: "110",  
                mass: "110",
                gender: "Female",
                homeworld: "https://swapi.dev/api/planets/2/",
            },
          ],
        },
      },
    },
  },
];

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe("HomePage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state initially", () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <PeopleProvider>
            <HomePage />
        </PeopleProvider>
      </MockedProvider>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders error state when there is an error", async () => {
    const errorMock = {
      request: {
        query: GET_PEOPLE,
        variables: { page: 1 },
      },
      error: new Error("Something went wrong"),
    };

    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
       <PeopleProvider>
            <HomePage />
        </PeopleProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Sorry, a problem occurred while loading your data!")).toBeInTheDocument();
    });
  });

  it("renders results correctly", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
       <PeopleProvider>
            <HomePage />
        </PeopleProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
      expect(screen.queryByText("No results available")).not.toBeInTheDocument();
    });
  });

  it("navigates to person details page on click", async () => {
    const navigateMock = jest.fn();
    jest.spyOn(require("react-router-dom"), "useNavigate").mockReturnValue(navigateMock);

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PeopleProvider>
            <HomePage />
        </PeopleProvider>
      </MockedProvider>
    );

    await waitFor(() => {
        const personCard = screen.getByText("John Doe");
        fireEvent.click(personCard);

        expect(navigateMock).toHaveBeenCalledTimes(1);
        expect(navigateMock).toHaveBeenCalledWith("/details/John Doe");
    });
  });

  it("renders pagination correctly", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PeopleProvider>
            <HomePage />
        </PeopleProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });
});
