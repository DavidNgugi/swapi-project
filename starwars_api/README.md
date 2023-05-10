# SWAPI GraphQL API in TypeScript on NodeJs

This retrieves SWAPI data and wraps that using a GraphQL Server running on docker and hosted on Render

## Prerequisites

1. Node.js
2. Docker
3. npm

## Getting Started
Clone the repository:

```bash
git clone git@github.com:DavidNgugi/swapi-project.git
```
Change to the project directory:

```bash
cd starwars_api
```

## Usage

The following make commands are available to manage the Docker container:

Build the Docker image:

```bash
make build
```

Builds and Runs the app in a Docker container:

```bash
make run
```

Access the GraphQL API at `http://localhost:4000`.

Stop and removes the running Docker container:

```bash
make stop
```

## Code Overview
The main server code is in the `src/index.ts` file, which sets up a GraphQL server using `graphql-yoga` and `@graphql-tools`. The server listens on port `4000`.

The GraphQL schema is defined in the `src/graphql/schema.graphql` file, and the resolvers are in the src/resolvers directory.

When the server starts, it loads the schema from the .graphql file and adds the resolvers to the schema. The server is then created and started using the combined schema and resolvers.

## License
This project is licensed under the MIT License.