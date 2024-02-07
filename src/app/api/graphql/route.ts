import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import {
  buildSchema,
  Field,
  ID,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

@ObjectType()
export class Dog {
  @Field(() => ID)
  name: string;

  @Field(() => [String])
  description: string[];
}

@Resolver(Dog)
export class DogsResolver {
  @Query(() => [Dog])
  dogs(): Dog[] {
    return [{ name: "Bo" }, { name: "Boo" }];
  }
}

const schema = await buildSchema({ resolvers: [DogsResolver] });

const server = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}
