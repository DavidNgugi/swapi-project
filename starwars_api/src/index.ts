import { createServer } from 'http'
import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from '@graphql-tools/schema'
import { createYoga } from 'graphql-yoga'
import { join } from "path";

import resolvers from "./resolvers";

async function startServer() {
    const schemaPath = join(__dirname, "./graphql/schema.graphql");
    const schema = await loadSchema(schemaPath, {
        loaders: [new GraphQLFileLoader()],
    });

  const schemaWithResolvers = addResolversToSchema({ schema, resolvers })
 
  const yoga = createYoga({
    schema: schemaWithResolvers,
    graphqlEndpoint: '/',
  })
 
  const server = createServer(yoga)
 
  server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000')
  })
}

startServer()
    .then(() => console.log("Server started!"))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
